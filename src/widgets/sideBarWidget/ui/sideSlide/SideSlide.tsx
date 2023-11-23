import styles from './SideSlide.module.css'
import { Selected, SlideType } from '../../../../shared/types/types'
import { Object } from '../../../../shared/ui/object'
import React, { useRef, useState } from 'react'

type SlideProps = {
    slide: SlideType
    selected: Selected
    setSelected(sel: Selected): void
    isSelected: boolean
}

const SideSlide = ({ slide, selected, setSelected, isSelected }: SlideProps) => {
    const styleObj = {
        background: slide.backgroundValue,
    }
    const sel: Selected = {
        slidesIds: [...selected.slidesIds],
        objectsIds: [...selected.objectsIds],
    }
    const [isHovered, setIsHovered] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
        if (e.ctrlKey) {
            sel.slidesIds = sel.slidesIds.filter((selectedId) => selectedId !== slide.id)
            sel.slidesIds.push(slide.id)
        } else {
            sel.slidesIds = [slide.id]
        }
        setSelected(sel)
    }

    return (
        <label
            className={`${styles.sideSlide}
            ${isSelected ? styles.sideSlideBorderSelected : styles.sideSlideBorder}
            ${isHovered ? styles.sideSlideBorderHovered : styles.sideSlideBorder}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(e) => handleClick(e)}
        >
            <div className={styles.container} style={styleObj}>
                <div className={styles.content} style={styleObj}>
                    {slide.objects.map((object, index) => (
                        <Object key={index} object={object} isSideSlide={true} />
                    ))}
                </div>
            </div>
        </label>
    )
}

export { SideSlide }
