import styles from './SideSlide.module.css'
import { Selected, SlideType } from '../../../../shared/types/types'
import { Object } from '../../../../shared/ui/object'
import React, { useState } from 'react'

type SlideProps = {
    order: number
    slide: SlideType
    selected: Selected
    setSelected(sel: Selected): void
    isSelected: boolean
    isDraggable: boolean
    handleDrop(e: React.DragEvent<HTMLDivElement>, slide: SlideType): void
    handleDragStart(e: React.DragEvent<HTMLDivElement>, slide: SlideType): void
    handleDragOver(e: React.DragEvent<HTMLDivElement>): void
}

const SideSlide = ({
    order,
    slide,
    selected,
    setSelected,
    isSelected,
    isDraggable,
    handleDragOver,
    handleDragStart,
    handleDrop,
}: SlideProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const styleObj = {
        background: slide.backgroundValue,
    }
    const sel: Selected = {
        slidesIds: [...selected.slidesIds],
        objectsIds: [...selected.objectsIds],
    }
    slide.order = order

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.ctrlKey) {
            sel.slidesIds = sel.slidesIds.filter((selectedId) => selectedId !== slide.id)
            sel.slidesIds.push(slide.id)
        } else {
            sel.slidesIds = [slide.id]
        }
        setSelected(sel)
    }

    return (
        <div
            className={`${styles.sideSlide}
            ${isSelected ? styles.sideSlideBorderSelected : styles.sideSlideBorder}
            ${isHovered ? styles.sideSlideBorderHovered : styles.sideSlideBorder}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(e) => handleClick(e)}
            onDragStart={(e) => handleDragStart(e, slide)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, slide)}
            draggable={isDraggable}
        >
            <div className={styles.container} style={styleObj}>
                <div className={styles.content} style={styleObj}>
                    {slide.objects.map((object, index) => (
                        <Object
                            key={index}
                            object={object}
                            isSideSlide={true}
                            selected={selected}
                            setSelected={setSelected}
                            isObjectSelected={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export { SideSlide }
