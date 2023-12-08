import styles from './SideSlide.module.css'
import { Selected, SlideType } from '../../../../shared/types/types'
import { Object } from '../../../../shared/ui/object'
import React, { useState } from 'react'
import { widgetsSizeParams as wsp } from 'shared/tools/layoutParams'

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

    const slideStyle = wsp.sideSlideSizeStyle && {
        background: slide.backgroundValue,
    }
    const slideContainerStyle = wsp.sideSlideContainerSizeStyle && {
        background: slide.backgroundValue,
    }
    const sel: Selected = {
        slidesIds: [...selected.slidesIds],
        objectsIds: [...selected.objectsIds],
    }
    const thisSlide = { ...slide, order: order }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.ctrlKey) {
            sel.slidesIds = sel.slidesIds.filter((selectedId) => selectedId !== thisSlide.id)
            sel.slidesIds.push(thisSlide.id)
        } else {
            sel.slidesIds = [thisSlide.id]
        }
        setSelected(sel)
    }

    return (
        <div className={styles.containerWithNumber}>
            <span className={styles.number}>{order + 1}</span>
            <div
                className={`${styles.sideSlide}
            ${isSelected ? styles.sideSlideBorderSelected : styles.sideSlideBorder}
            ${isHovered ? styles.sideSlideBorderHovered : styles.sideSlideBorder}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={(e) => handleClick(e)}
                onDragStart={(e) => handleDragStart(e, thisSlide)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, thisSlide)}
                draggable={isDraggable}
            >
                <div className={styles.container} style={slideContainerStyle}>
                    <div className={styles.content} style={slideStyle}>
                        {thisSlide.objects.map((object, index) => (
                            <Object
                                key={index}
                                object={object}
                                isSideSlide={true}
                                selected={selected}
                                setSelected={setSelected}
                                isObjectSelected={false}
                                setMouseState={() => {
                                    console.log()
                                }}
                                handleMouseDown={() => {
                                    console.log()
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SideSlide }
