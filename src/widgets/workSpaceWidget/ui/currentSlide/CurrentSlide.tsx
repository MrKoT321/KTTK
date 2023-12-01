import { Selected, SlideType } from '../../../../shared/types/types'
// import { useDraggableList1 } from '../../../../shared/hooks/useDraggableList1'
import { Object } from '../../../../shared/ui/object'
import styles from './CurrentSlide.module.css'

type CurrentSlideProps = {
    slide: SlideType
    selected: Selected
    setSelected: (selected: Selected) => void
}

const CurrentSlide = ({ slide, selected, setSelected }: CurrentSlideProps) => {
    const styleObj = {
        background: slide.backgroundValue, //TODO: добавить кнопку смены
    }

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
