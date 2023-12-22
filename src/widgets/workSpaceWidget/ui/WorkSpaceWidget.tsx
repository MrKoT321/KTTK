import styles from './WorkSpaceWidget.module.css'
import { MouseStates, Selected, SlideType } from '../../../shared/types/types'
import { CurrentSlide } from './currentSlide/CurrentSlide'
import { useState } from 'react'
import { drawPotentialObject } from '../tools/drawPotentialObject'
import { addObject } from '../../../shared/tools/addObject'
import { changeObjects } from './currentSlide/tools/changeObjects'
import { layoutParams as lp } from 'shared/tools/layoutParams'
import { DrawStyle, MoveObj } from '../../../shared/types/devTypes'

type WorkSpaceWidgetProps = {
    slides: SlideType[]
    selected: Selected
    setSelected: (selected: Selected) => void
    setSlides: (slides: SlideType[]) => void
    mouseState: MouseStates
    setMouseState: (mouseState: MouseStates) => void
    currentSlideBg: string
    selectedTextFonts: string
    selectedTextSize: number
    bolded: boolean
    italic: boolean
    underlined: boolean
    textColor: string
}

const WorkSpaceWidget = ({
    slides,
    selected,
    setSelected,
    setSlides,
    mouseState,
    setMouseState,
    currentSlideBg,
    selectedTextFonts,
    selectedTextSize,
    bolded,
    italic,
    underlined,
    textColor,
}: WorkSpaceWidgetProps) => {
    const lastSlideId = selected.slidesIds[selected.slidesIds.length - 1]
    const allSlides = slides.map((slide) => {
        const id = lastSlideId || slides[0].id
        if (slide.id === id) {
            slide.backgroundValue = currentSlideBg
        }
        return slide
    })
    const currentSlide = allSlides.find((slide) => slide.id === lastSlideId) ?? slides[0]

    const currSelected = { ...selected }

    const [currentMouseX, setCurrentMouseX] = useState(0)
    const [currentMouseY, setCurrentMouseY] = useState(0)
    const [startMouseX, setStartMouseX] = useState(0)
    const [startMouseY, setStartMouseY] = useState(0)

    const [startWidth, setStartWidth] = useState(0)
    const [startHeight, setStartHeight] = useState(0)

    const [isDraw, setIsDraw] = useState(false)

    const [styleObj, setStyleObj] = useState<DrawStyle>({
        opacity: 0,
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'solid',
    })
    const [moveObjs, setMoveObjs] = useState<MoveObj[]>([])

    const [currMoveToX, setCurrMoveToX] = useState(0)
    const [currMoveToY, setCurrMoveToY] = useState(0)

    const createMovePosition = (startMousePos: number, currentMousePos: number, currMoveTo: number) => {
        if (startMousePos >= currentMousePos) {
            console.log('move', moveTo, currentMousePos, startMousePos)
            return currentMousePos - startMousePos - currMoveTo
        } else {
            if (currMoveTo < 0) {
                return currentMousePos - startMousePos + currMoveTo
            } else {
                return currentMousePos - startMousePos - currMoveTo
            }
        }
    }

    const createPosition = (startMousePos: number, currentMousePos: number) => {
        if (startMousePos >= currentMousePos) {
            return currentMousePos
        } else {
            return startMousePos
        }
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (mouseState === 'creatingRect' || mouseState === 'creatingText' || mouseState === 'creatingCircle') {
            setIsDraw(true)
            setStartMouseX(e.clientX - lp.sideBarWidth)
            setStartMouseY(e.clientY - lp.topPanelHeight)
        }
    }
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (
            (mouseState === 'creatingRect' || mouseState === 'creatingText' || mouseState === 'creatingCircle') &&
            isDraw
        ) {
            setCurrentMouseX(e.clientX - lp.sideBarWidth)
            setCurrentMouseY(e.clientY - lp.topPanelHeight)
            drawPotentialObject({
                mouseState,
                currentMouseX,
                startMouseX,
                startMouseY,
                currentMouseY,
                setStyleObj,
                createPosition,
            })
        }
        if (mouseState === 'move') {
            setCurrentMouseX(e.clientX)
            setCurrentMouseY(e.clientY)
            setCurrMoveToX(currMoveToX + createMovePosition(startMouseX, currentMouseX, currMoveToX))
            setCurrMoveToY(currMoveToY + createMovePosition(startMouseY, currentMouseY, currMoveToY))
            moveObjs.map((object) => {
                object.style = {
                    left: object.style.left + createMovePosition(startMouseX, currentMouseX, currMoveToX),
                    top: object.style.top + createMovePosition(startMouseY, currentMouseY, currMoveToY),
                    width: object.style.width,
                    height: object.style.height,
                }
            })
            setMoveObjs(moveObjs)
        }
        if (mouseState === 'resize') {
            setCurrentMouseX(e.clientX - lp.sideBarWidth)
            setCurrentMouseY(e.clientY - lp.topPanelHeight)
            drawPotentialObject({
                mouseState: 'creatingRect',
                currentMouseX,
                startMouseX,
                startMouseY,
                currentMouseY,
                setStyleObj,
                createPosition,
            })
        }
    }
    const handleMouseUp = () => {
        if (
            (mouseState === 'creatingRect' || mouseState === 'creatingText' || mouseState === 'creatingCircle') &&
            isDraw
        ) {
            setIsDraw(false)
            setMouseState('cursor')
            addObject({
                mouseState,
                currentMouseX,
                startMouseX,
                startMouseY,
                currentMouseY,
                slides,
                selected,
                allSlides,
                setSlides,
                createPosition,
            })
            setStyleObj({
                opacity: 0,
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                borderColor: 'black',
                borderRadius: 10,
                borderWidth: 2,
                borderStyle: 'solid',
            })
        }
        if (mouseState === 'move') {
            setMouseState('cursor')
            changeObjects({ moveObjs, currentSlide })
            allSlides.map((slide) => {
                if (slide.id === currentSlide.id) {
                    slide = currentSlide
                }
            })
            setSlides(allSlides)
            setCurrMoveToX(0)
            setCurrMoveToY(0)
            setMoveObjs([])
        }
        if (mouseState === 'resize') {
            setMouseState('cursor')
            const newObjects = currentSlide.objects.map((object) => {
                if (selected.objectsIds.includes(object.id)) {
                    object.width = object.width * (styleObj.width / startWidth)
                    object.height = object.height * (styleObj.height / startHeight)
                    object.startX = startMouseX - lp.currentSlideIndentX
                    object.startY = startMouseY - styleObj.height - lp.currentSlideIndentY
                }
                return object
            })
            const newSlides = allSlides.map((slide) => {
                if (slide.id === currentSlide.id) {
                    slide.objects = newObjects
                }
                return slide
            })
            setSlides(newSlides)
            setStyleObj({
                opacity: 0,
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                borderColor: 'black',
                borderRadius: 10,
                borderWidth: 2,
                borderStyle: 'solid',
            })
        }
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const currObject = currentSlide.objects.find(
            (obj) =>
                e.clientX - lp.sideBarWidth - lp.currentSlideIndentX > obj.startX &&
                e.clientX - lp.sideBarWidth - lp.currentSlideIndentX < obj.startX + obj.width &&
                e.clientY - lp.topPanelHeight - lp.currentSlideIndentY > obj.startY &&
                e.clientY - lp.topPanelHeight - lp.currentSlideIndentY < obj.startY + obj.height,
        )
        if (selected.objectsIds.length !== 0) {
            if (currObject) {
                currSelected.objectsIds = [currObject.id]
            } else {
                currSelected.objectsIds = []
            }
            setSelected(currSelected)
        }
        if (currObject) {
            currSelected.objectsIds = [currObject.id]
        }
    }

    const handleMouseDownResize = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseState('resize')
        let minX = 1920
        let maxY = 0
        selected.objectsIds.map((id) => {
            const currobj = currentSlide.objects.find((object) => object.id === id) ?? {
                startX: minX,
                startY: maxY,
                height: 0,
            }
            if (minX > currobj.startX) {
                minX = currobj.startX
            }
            if (maxY < currobj.startY + currobj.height) {
                maxY = currobj.startY + currobj.height
            }
        })
        setStartMouseX(minX + lp.currentSlideIndentX)
        setStartMouseY(maxY + lp.currentSlideIndentY)
        setStartWidth(e.clientX - lp.sideBarWidth - lp.currentSlideIndentX - minX)
        setStartHeight(maxY - e.clientY + lp.topPanelHeight + lp.currentSlideIndentY)
    }

    return (
        <div
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseUp={() => handleMouseUp()}
            onClick={(e) => handleClick(e)}
        >
            <CurrentSlide
                slide={currentSlide}
                selected={selected}
                setSelected={setSelected}
                setMouseState={setMouseState}
                mouseState={mouseState}
                setMoveObjs={setMoveObjs}
                moveObjs={moveObjs}
                setStartMouseX={setStartMouseX}
                setStartMouseY={setStartMouseY}
                setCurrentMouseX={setCurrentMouseX}
                setCurrentMouseY={setCurrentMouseY}
                handleMouseDownResize={handleMouseDownResize}
                currentSlideBg={currentSlideBg}
                selectedTextFonts={selectedTextFonts}
                selectedTextSize={selectedTextSize}
                bolded={bolded}
                italic={italic}
                underlined={underlined}
                textColor={textColor}
            />
            <div style={styleObj} className={styles.drawPotentialObject} />
            {moveObjs.map((object, index) => {
                return <div style={object.style} className={styles.moveObjs} key={index} />
            })}
        </div>
    )
}

export { WorkSpaceWidget }
