import styles from './SideSlide.module.css'
import { SlideType } from '../../../../shared/types/types'
import { Object } from '../../../../shared/ui/object'
import React, { useEffect, useState } from 'react'
import { widgetsSizeParams as wsp } from 'shared/tools/layoutParams'
import { useAppActions, useAppSelector } from '../../../../shared/redux/store'
import { setSelected, setSelectedObjectIds } from '../../../../shared/redux/actionCreators'

type SlideProps = {
    order: number
    isSelected: boolean
    isDraggable: boolean
    handleDrop(e: React.DragEvent<HTMLDivElement>, currentSlide: SlideType): void
    handleDragStart(e: React.DragEvent<HTMLDivElement>, currentSlide: SlideType): void
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
    const { setSelectedSlideIds } = useAppActions()
    let selectedSlideIds = useAppSelector((state) => state.selected.selectedSlideIds)
    const currentSlide = useAppSelector((state) => state.slides.currentSlide)
    const [isHovered, setIsHovered] = useState(false)

    const slideStyle = {
        ...wsp.sideSlideContainerSizeStyle,
        background: currentSlide.backgroundValue,
    }
    const slideContainerStyle = {
        ...slideStyle,
        borderColor: currentSlide.backgroundValue,
        borderWidth: 5,
        borderStyle: 'solid',
    }
    const thisSlide = { ...currentSlide, order: order }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.ctrlKey) {
            selectedSlideIds = selectedSlideIds.filter((selectedId) => selectedId !== thisSlide.id)
            selectedSlideIds.push(thisSlide.id)
        } else {
            selectedSlideIds = [thisSlide.id]
        }
        setSelectedSlideIds(selectedSlideIds)
        setCurrentSlideBg(currentSlide.backgroundValue)
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
