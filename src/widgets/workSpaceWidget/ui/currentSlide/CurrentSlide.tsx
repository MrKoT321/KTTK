import React, { useState } from 'react'
import { ObjectType, Selected, SlideType } from '../../../../shared/types/types'
import { useDraggableList } from '../../../../shared/hooks/useDraggableList'
import { Object } from '../../../../shared/ui/object'
import styles from './CurrentSlide.module.css'

type CurrentSlideProps = {
    slide: SlideType
    selected: Selected
}

const CurrentSlide = ({ slide, selected }: CurrentSlideProps) => {
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
