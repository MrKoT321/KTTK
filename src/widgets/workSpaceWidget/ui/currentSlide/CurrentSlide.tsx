import React from 'react'
import { Selected, SlideType } from '../../../../shared/types/types'
import { useDraggableList } from '../../../../shared/hooks/useDraggableList'
import { Object } from '../../../../shared/ui/object'
import styles from './CurrentSlide.module.css'

type CurrentSlideProps = {
    slide: SlideType
    selected: Selected
    setSelected: (selected: Selected) => void
}

const CurrentSlide = ({ slide, selected, setSelected }: CurrentSlideProps) => {
    const styleObj = {
        background: slide.backgroundValue,
    }
    const { containerRef, itemRef } = useDraggableList()

    return (
        <div className={styles.workSlide} style={styleObj} ref={containerRef}>
            {slide.objects.map((object, index) => {
                const isSelected = selected.objectsIds.includes(object.id)
                return (
                    <Object
                        key={index}
                        object={object}
                        selected={selected}
                        setSelected={setSelected}
                        isSelected={isSelected}
                    />
                )
            })}
        </div>
    )
}

export { CurrentSlide }
