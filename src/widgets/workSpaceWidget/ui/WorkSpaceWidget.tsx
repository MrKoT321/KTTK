import styles from './WorkSpaceWidget.module.css'
import { Selected, SlideType } from '../../../shared/types/types'
import { CurrentSlide } from './currentSlide/CurrentSlide'
import { MouseStates } from '../../editorWidget/ui/EditorWidget'
import { useState } from 'react'
import { addObject } from '../../../shared/tools/AddObject'
import { DrawStyle } from '../../../shared/types/DrawStyle'
import { DrawPotentialObject } from '../../../shared/tools/DrawPotentialObject'

type WorkSpaceWidgetProps = {
    slides: SlideType[]
    selected: Selected
    setSelected: (selected: Selected) => void
    setSlides: (slides: SlideType[]) => void
    mouseState: MouseStates
    setMouseState: (mouseState: MouseStates) => void
}

const WorkSpaceWidget = ({
    slides,
    selected,
    setSelected,
    setSlides,
    mouseState,
    setMouseState,
}: WorkSpaceWidgetProps) => {
    const lastSlideId = selected.slidesIds[selected.slidesIds.length - 1]
    const currentSlide = slides.find((slide) => slide.id === lastSlideId)

    const [currentMouseX, setCurrentMouseX] = useState(0)
    const [currentMouseY, setCurrentMouseY] = useState(0)
    const [startMouseX, setStartMouseX] = useState(0)
    const [startMouseY, setStartMouseY] = useState(0)

    const [isDraw, setIsDraw] = useState(false)
    const [isObjectMove, setIsObjectMove] = useState(false)
    const [isObjectChange, setIsObjectChange] = useState(false)

    const allSlides = [...slides]

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

    const createPosition = (startMousePos: number, currentMousePos: number) => {
        if (startMousePos >= currentMousePos) {
            return currentMousePos
        } else {
            return startMousePos
        }
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (mouseState != 'cursor' && !isObjectChange) {
            setIsDraw(true)
            setStartMouseX(e.clientX - 275)
            setStartMouseY(e.clientY - 225)
            console.log(e.clientX, e.clientY, '1')
        }
    }
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (mouseState != 'cursor' && isDraw) {
            setCurrentMouseX(e.clientX - 275)
            setCurrentMouseY(e.clientY - 225)
            DrawPotentialObject({
                mouseState,
                currentMouseX,
                startMouseX,
                startMouseY,
                currentMouseY,
                setStyleObj,
                createPosition,
            })
        }
        if (mouseState === 'cursor' && isObjectChange) {
            setCurrentMouseX(e.clientX - 275)
            setCurrentMouseY(e.clientY - 225)
            DrawPotentialObject({
                mouseState,
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
        if (mouseState != 'cursor' && isDraw) {
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
        if (mouseState != 'cursor' && isObjectChange) {
            setIsObjectChange(false)
            setMouseState('cursor')
        }
    }

    return (
        <div
            className={styles.workSpace}
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseUp={() => handleMouseUp()}
        >
            <CurrentSlide
                slide={currentSlide ?? slides[0]}
                selected={selected}
                setSelected={setSelected}
                setSlides={setSlides}
            />
            <div style={styleObj} className={styles.drawPotentialObject} />
        </div>
    )
}

export { WorkSpaceWidget }
