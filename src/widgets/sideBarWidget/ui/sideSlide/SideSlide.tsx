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
    setCurrentSlideBg: (arg: string) => void
    selectedTextFonts: string
    selectedTextSize: number
    bolded: boolean
    italic: boolean
    underlined: boolean
    textColor: string
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
    setCurrentSlideBg,
    selectedTextFonts,
    selectedTextSize,
    bolded,
    italic,
    underlined,
    textColor,
}: SlideProps) => {
    const [isHovered, setIsHovered] = useState(false)

    const slideStyle = {
        ...wsp.sideSlideContainerSizeStyle,
        background: slide.backgroundValue,
    }
    const slideContainerStyle = {
        ...slideStyle,
        borderColor: slide.backgroundValue,
        borderWidth: 5,
        borderStyle: 'solid',
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
        setCurrentSlideBg(slide.backgroundValue)
    }

    return (
        <div className={styles.containerWithNumber}>
            <span>{order + 1}</span>
            <div
                className={`${styles.sideSlide}
            ${isSelected ? styles.sideSlideBorderSelected : styles.sideSlideBorder}
            ${isHovered ? styles.sideSlideBorderHovered : styles.sideSlideBorder}`}
                style={{ background: slideStyle.background }}
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
                                handleMouseDownResize={() => {
                                    console.log()
                                }}
                                selectedTextFonts={selectedTextFonts}
                                selectedTextSize={selectedTextSize}
                                bolded={bolded}
                                italic={italic}
                                underlined={underlined}
                                textColor={textColor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SideSlide }
