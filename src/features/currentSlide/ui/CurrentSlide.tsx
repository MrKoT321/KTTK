import { layoutParams as lp, widgetsSizeParams as wsp } from 'shared/tools/layoutParams'
import { Object } from '../../../shared/ui/object'
import styles from './CurrentSlide.module.css'
import { useAppActions, useAppSelector } from '../../../shared/redux/store'
import React from 'react'
import { defaultCurrentSlide } from '../../../shared/tools/defaultCurrentSlide'

type CurrentSlideProps = {
    handleMouseDownResize: (arg: React.MouseEvent<HTMLDivElement>) => void
}

const CurrentSlide = ({ handleMouseDownResize }: CurrentSlideProps) => {
    const { slidesMap, currentSlideId } = useAppSelector((state) => state.slides)
    const { selectedObjectIds } = useAppSelector((state) => state.selected)
    const { mouseState } = useAppSelector((state) => state.mouse)
    const { moveObjs } = useAppSelector((state) => state.editObject)
    const { setStartMouseX, setStartMouseY, setCurrentMouseX, setCurrentMouseY, setMoveObjs, setMouseState } =
        useAppActions()
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide
    const shadowObjs = moveObjs
    const currentSlideStyle = {
        ...wsp.currentSlideSizeStyle,
        background: currentSlide.backgroundValue,
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => {
        if (mouseState === 'cursor' && isSelected && !e.ctrlKey) {
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
                        handleMouseDown={handleMouseDown}
                        handleMouseDownResize={handleMouseDownResize}
                    />
                )
            })}
        </div>
    )
}

export { CurrentSlide }
