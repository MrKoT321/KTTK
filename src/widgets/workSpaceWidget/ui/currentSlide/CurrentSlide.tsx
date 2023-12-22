import { layoutParams as lp, widgetsSizeParams as wsp } from 'shared/tools/layoutParams'
import { MoveObj } from '../../../../shared/types/MoveObj'
import { MouseStates, Selected, SlideType } from '../../../../shared/types/types'
import { Object } from '../../../../shared/ui/object'
import styles from './CurrentSlide.module.css'

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
}: CurrentSlideProps) => {
    const shadowObjs = [...moveObjs]

    const currentSlideBackgroundStyle = {
        background: slide.backgroundValue, //TODO: добавить кнопку смены
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

    return (
        <div className={styles.workSlide} style={currentSlideBackgroundStyle && wsp.currentSlideSizeStyle}>
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
                    />
                )
            })}
        </div>
    )
}

export { CurrentSlide }
