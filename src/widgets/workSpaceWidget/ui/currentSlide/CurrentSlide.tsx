import { layoutParams as lp, widgetsSizeParams as wsp } from 'shared/tools/layoutParams'
import { MouseStates } from '../../../../shared/types/types'
import { Object } from '../../../../shared/ui/object'
import styles from './CurrentSlide.module.css'
import { MoveObj } from '../../../../shared/types/devTypes'
import { useAppSelector } from '../../../../shared/redux/store'
import React from 'react'

type CurrentSlideProps = {
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
}

const CurrentSlide = ({
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
}: CurrentSlideProps) => {
    const slides = useAppSelector((state) => state.slides.slides)
    const { selectedSlideIds, selectedObjectIds } = useAppSelector((state) => state.selected)
    const lastSelectedSlideId = selectedSlideIds[selectedSlideIds.length - 1]
    const currentSlide = slides.filter((slide) => slide.id === lastSelectedSlideId)[0]
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
            selectedObjectIds.map((id) => {
                const currMoveObj = currentSlide.objects.find((object) => object.id === id)
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

    return (
        <div className={styles.workSlide} style={currentSlideStyle}>
            {currentSlide.objects.map((object, index) => {
                const isSelected = selectedObjectIds.includes(object.id)
                return (
                    <Object
                        key={index}
                        object={object}
                        isSideSlide={false}
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
