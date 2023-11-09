import React from 'react'
import { SlideType } from '../../../../shared/types/types'
import { useDraggableList } from '../../../../shared/hooks/useDraggableList'
import { Object } from '../../../../shared/ui/object'
import styles from './CurrentSlide.module.css'

type CurrentSlideProps = {
    slide: SlideType
}

const CurrentSlide = ({ slide }: CurrentSlideProps) => {
    const styleObj = {
        background: slide.backgroundValue,
    }
    const { containerRef, itemRef } = useDraggableList()

    return (
        <div className={styles.workSlide} style={styleObj} ref={containerRef}>
            {slide.objects.map((object, index) => (
                <Object key={index} object={object} />
            ))}
        </div>
    )
}

export { CurrentSlide }
