import { layoutParams as lp, widgetsSizeParams as wsp } from 'shared/tools/layoutParams'
import { MouseStates, ObjectShapeType, Selected, SlideType } from '../../../../shared/types/types'
import { Object } from '../../../../shared/ui/object'
import styles from './CurrentSlide.module.css'
import { MoveObj } from '../../../../shared/types/devTypes'
import { useEffect } from 'react'

type CurrentSlideProps = {
    slide: SlideType
    selected: Selected
    setSelected: (selected: Selected) => void
    mouseState: MouseStates
    setMouseState: (mouseState: MouseStates) => void
    setMoveObjs: (moveObjs: MoveObj[]) => void
    moveObjs: MoveObj[]
    setStartMouseX: (startMouseX: number) => void
    setStartMouseY: (startMouseY: number) => void
    setCurrentMouseX: (currentMouseX: number) => void
    setCurrentMouseY: (currentMouseY: number) => void
    handleMouseDownResize: (arg: React.MouseEvent<HTMLDivElement>) => void
    currentSlideBg: string
    slides: SlideType[]
    setSlides(slides: SlideType[]): void
}

const CurrentSlide = ({
    slide,
    selected,
    setSelected,
    setMouseState,
    mouseState,
    setMoveObjs,
    moveObjs,
    setStartMouseX,
    setStartMouseY,
    setCurrentMouseX,
    setCurrentMouseY,
    handleMouseDownResize,
    currentSlideBg,
    slides,
    setSlides,
}: CurrentSlideProps) => {
    const shadowObjs = [...moveObjs]

    const currentSlideStyle = {
        ...wsp.currentSlideSizeStyle,
        background: currentSlideBg, //TODO: добавить кнопку смены
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => {
        if (mouseState === 'cursor' && isSelected) {
            setStartMouseX(e.clientX)
            setStartMouseY(e.clientY)
            setCurrentMouseX(e.clientX)
            setCurrentMouseY(e.clientY)
            setMouseState('move')
            selected.objectsIds.map((id) => {
                const currMoveObj = slide.objects.find((object) => object.id === id)
                if (currMoveObj) {
                    const style = {
                        width: currMoveObj.width,
                        height: currMoveObj.height,
                        left: currMoveObj.startX + lp.currentSlideIndentX,
                        top: currMoveObj.startY + lp.currentSlideIndentY,
                    }
                    shadowObjs.push({
                        style,
                        id,
                    })
                }
            })
            setMoveObjs(shadowObjs)
        }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        const emptyObject: ObjectShapeType = {
            id: -1,
            width: -1,
            height: -1,
            startX: -1,
            startY: -1,
            borderStyle: 'none',
            borderWidth: -1,
            borderColor: '',
            shapeBgColor: '',
            type: 'line',
            oType: 'ObjectShapeType',
        }
        if (e.key === 'Delete') {
            const newObjects = slide.objects.map((object) => {
                if (!selected.objectsIds.includes(object.id)) {
                    return object
                }
                return emptyObject
            })
            console.log('newObjects = ', newObjects)
            const allObjects = newObjects.filter((object) => object.id !== emptyObject.id)
            const newSlides = slides.map((slideFrom) => {
                if (slideFrom.id === slide.id) {
                    slideFrom.objects = allObjects
                    return slideFrom
                }
                return slideFrom
            })
            setSlides(newSlides)
            const currSelected = { ...selected, objectId: [] }
            setSelected(currSelected)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', (e) => handleKeyDown(e))
        return document.removeEventListener('keydown', (e) => handleKeyDown(e))
    }, [selected.objectsIds])

    return (
        <div className={styles.workSlide} style={currentSlideStyle}>
            {slide.objects.map((object, index) => {
                const isSelected = selected.objectsIds.includes(object.id)
                return (
                    <Object
                        key={index}
                        object={object}
                        selected={selected}
                        setSelected={setSelected}
                        isObjectSelected={isSelected}
                        setMouseState={setMouseState}
                        handleMouseDown={handleMouseDown}
                        handleMouseDownResize={handleMouseDownResize}
                    />
                )
            })}
        </div>
    )
}

export { CurrentSlide }
