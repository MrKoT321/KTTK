import styles from './WorkSpaceWidget.module.css'
import { MouseStates, Selected, SlideType } from '../../../shared/types/types'
import { CurrentSlide } from './currentSlide/CurrentSlide'
import { useState } from 'react'
import { DrawStyle } from '../../../shared/types/DrawStyle'
import { drawPotentialObject } from '../tools/drawPotentialObject'
import { addObject } from '../../../shared/tools/addObject'
import { MoveObj } from '../../../shared/types/MoveObj'
import { changeObjects } from './currentSlide/tools/changeObjects'
import { layoutParams as lp } from 'shared/tools/layoutParams'

type WorkSpaceWidgetProps = {
    slides: SlideType[]
    selected: Selected
    setSelected: (selected: Selected) => void
    setSlides: (slides: SlideType[]) => void
    mouseState: MouseStates
    setMouseState: (mouseState: MouseStates) => void
    slideSize: number[]
    setSlideSize: (slideSize: number[]) => void
}

const WorkSpaceWidget = ({
    slides,
    selected,
    setSelected,
    setSlides,
    mouseState,
    setMouseState,
    slideSize,
    setSlideSize,
}: WorkSpaceWidgetProps) => {
    const lastSlideId = selected.slidesIds[selected.slidesIds.length - 1]
    const currentSlide = slides.find((slide) => slide.id === lastSlideId) ?? slides[0]
    const allSlides = [...slides]

    const [currentMouseX, setCurrentMouseX] = useState(0)
    const [currentMouseY, setCurrentMouseY] = useState(0)
    const [startMouseX, setStartMouseX] = useState(0)
    const [startMouseY, setStartMouseY] = useState(0)

    const [isObjectChange, setIsObjectChange] = useState(false)
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
        // if (mouseState === 'cursor' && isObjectChange) {
        //     setCurrentMouseX(e.clientX - 275)
        //     setCurrentMouseY(e.clientY - 225)
        //     drawPotentialObject({
        //         mouseState,
        //         currentMouseX,
        //         startMouseX,
        //         startMouseY,
        //         currentMouseY,
        //         setStyleObj,
        //         createPosition,
        //     })
        // }
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
        // if (mouseState != 'cursor' && isObjectChange) {
        //     setIsObjectChange(false)
        //     setMouseState('cursor')
        // }
    }

    return (
        <div
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseUp={() => handleMouseUp()}
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
                slideSize={slideSize}
                setSlideSize={setSlideSize}
            />
            <div style={styleObj} className={styles.drawPotentialObject} />
            {moveObjs.map((object, index) => {
                return <div style={object.style} className={styles.moveObjs} key={index} />
            })}
        </div>
    )
}

export { WorkSpaceWidget }
