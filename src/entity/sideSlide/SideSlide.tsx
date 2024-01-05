import styles from './SideSlide.module.css'
import { SlideType } from '../../shared/types/types'
import { Object } from '../../shared/ui/object'
import React, { useState } from 'react'
import { widgetsSizeParams as wsp } from 'shared/tools/layoutParams'
import { useAppActions, useAppSelector } from '../../shared/redux/store'
import { setCurrentSlide, setSelectedObjectIds } from '../../shared/redux/actionCreators'

type SlideProps = {
    slide: SlideType
    order: number
    isSelected: boolean
    // handleDrop(e: React.DragEvent<HTMLDivElement>, currentSlide: SlideType): void
    // handleDragStart(currentSlide: SlideType): void
    // handleDragOver(e: React.DragEvent<HTMLDivElement>): void
    setCurrentSlideBg: (arg: string) => void
}

// handleDragOver,
// handleDragStart,
// handleDrop,
// setCurrentSlideBg,

const SideSlide = ({ slide, order, isSelected, setCurrentSlideBg }: SlideProps) => {
    const slidesOrder = useAppSelector((state) => state.slides.slidesOrder)
    const selectedSlideIds = useAppSelector((state) => state.selected.selectedSlideIds)
    const thisSlide = { ...slide }
    const { setSelectedSlideIds } = useAppActions()
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

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        let newSelectedSlideIds: string[]
        const newCurrentSlideId = slidesOrder[order]
        if (e.ctrlKey) {
            newSelectedSlideIds = selectedSlideIds.filter((selectedId) => selectedId !== thisSlide.id)
            newSelectedSlideIds.push(newCurrentSlideId)
        } else {
            newSelectedSlideIds = [newCurrentSlideId]
        }
        setSelectedSlideIds(newSelectedSlideIds)
        setSelectedObjectIds([])
        console.log('newCurrentSlideId = ', newCurrentSlideId)
        setCurrentSlide(newCurrentSlideId)
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
                // onDragStart={() => handleDragStart(thisSlide)}
                // onDragOver={(e) => handleDragOver(e)}
                // onDrop={(e) => handleDrop(e, thisSlide)}
                draggable={true}
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
