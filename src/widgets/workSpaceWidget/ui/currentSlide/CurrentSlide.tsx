import { useState } from 'react'
import { MouseStates, ObjectType, Selected, SlideType } from '../../../../shared/types/types'
// import { useDraggableList1 } from '../../../../shared/hooks/useDraggableList1'
import { Object } from '../../../../shared/ui/object'
import styles from './CurrentSlide.module.css'
import { changeObject } from './tools/changeObject'
import { drawMoveObject } from './tools/drawMoveObject'

type CurrentSlideProps = {
    slide: SlideType
    selected: Selected
    setSelected: (selected: Selected) => void
    setSlides: (slides: SlideType[]) => void
    mouseState: MouseStates
    setMouseState: (mouseState: MouseStates) => void
}

const CurrentSlide = ({ slide, selected, setSelected, setSlides, setMouseState, mouseState }: CurrentSlideProps) => {
    const styleObj = {
        background: slide.backgroundValue, //TODO: добавить кнопку смены
    }

    // const [currentMouseX, setCurrentMouseX] = useState(0)
    // const [currentMouseY, setCurrentMouseY] = useState(0)
    // const [startMouseX, setStartMouseX] = useState(0)
    // const [startMouseY, setStartMouseY] = useState(0)

    // const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => {
    //     if (mouseState === 'cursor' && isSelected) {
    //         setStartMouseX(e.clientX)
    //         setStartMouseY(e.clientY)
    //         setMouseState('move')
    //     }
    // }
    // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    //     if (mouseState === 'move') {
    //         setCurrentMouseX(e.clientX)
    //         setCurrentMouseY(e.clientY)
    //         slide.objects.map((object) => {
    //             if (selected.objectsIds.includes(object.id)) {
    //                 drawMoveObject({
    //                     object,
    //                     width: Math.abs(currentMouseX - startMouseX),
    //                     height: Math.abs(currentMouseY - startMouseY),
    //                 }) 
    //             }
    //         }) 
    //     }
    // }
    // const handleMouseUp = () => {
    //     if (mouseState === 'move') {
    //         setMouseState('cursor')
    //         changeObject()
    //     }
    // }

    return (
        <div className={styles.workSlide} style={styleObj}>
            {slide.objects.map((object, index) => {
                const isSelected = selected.objectsIds.includes(object.id)
                return (
                    <Object
                        key={index}
                        object={object}
                        selected={selected}
                        setSelected={setSelected}
                        isObjectSelected={isSelected}
                    />
                )
            })}
        </div>
    )
}

export { CurrentSlide }
