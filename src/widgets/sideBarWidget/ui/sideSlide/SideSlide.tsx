import styles from './SideSlide.module.css'
import { SlideType } from '../../../../shared/types/types'
import { Object } from '../../../../shared/ui/object'
import React, { useState } from 'react'
import { widgetsSizeParams as wsp } from 'shared/tools/layoutParams'
import { useAppActions, useAppSelector } from '../../../../shared/redux/store'
import { setCurrentSlide, setSelectedObjectIds } from '../../../../shared/redux/actionCreators'

type SlideProps = {
    slide: SlideType
    order: number
    isSelected: boolean
    isDraggable: boolean
    handleDrop(e: React.DragEvent<HTMLDivElement>, currentSlide: SlideType): void
    handleDragStart(e: React.DragEvent<HTMLDivElement>, currentSlide: SlideType): void
    handleDragOver(e: React.DragEvent<HTMLDivElement>): void
    setCurrentSlideBg: (arg: string) => void
}

const SideSlide = ({
    slide,
    order,
    isSelected,
    isDraggable,
    handleDragOver,
    handleDragStart,
    handleDrop,
    setCurrentSlideBg,
}: SlideProps) => {
    const { setSelectedSlideIds, setSlides } = useAppActions()
    const slides = useAppSelector((state) => state.slides.slides)
    let selectedSlideIds = useAppSelector((state) => state.selected.selectedSlideIds)
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
    const thisSlide = { ...slide, order: order }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.ctrlKey) {
            selectedSlideIds = selectedSlideIds.filter((selectedId) => selectedId !== thisSlide.id)
            selectedSlideIds.push(thisSlide.id)
        } else {
            selectedSlideIds = [thisSlide.id]
        }
        setSelectedSlideIds(selectedSlideIds)
        setSelectedObjectIds([])
        setCurrentSlide(thisSlide)
        setCurrentSlideBg(thisSlide.backgroundValue)
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
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SideSlide }
