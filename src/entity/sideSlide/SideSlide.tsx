import styles from './SideSlide.module.css'
import { SlideType } from '../../shared/types/types'
import { Object } from '../../shared/ui/object'
import React, { useState } from 'react'
import { widgetsSizeParams as wsp } from 'shared/tools/layoutParams'
import { useAppActions, useAppSelector } from '../../shared/redux/store'

type SlideProps = {
    isSelected: boolean
    order: number
    slide: SlideType
    handleDrop(e: React.DragEvent<HTMLDivElement>, thisSlidePos: number): void
    setDraggedSlidePos(pos: number): void
}

const SideSlide = ({ slide, order, isSelected, setDraggedSlidePos, handleDrop }: SlideProps) => {
    const slidesOrder = useAppSelector((state) => state.slides.slidesOrder)
    const selectedSlideIds = useAppSelector((state) => state.selected.selectedSlideIds)
    const thisSlide: SlideType = { ...slide }

    const { setSelectedSlideIds, setCurrentSlide, setSelectedObjectIds } = useAppActions()
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
        let newSelectedSlideIds = selectedSlideIds
        const newCurrentSlideId = slidesOrder[order]
        if (e.ctrlKey) {
            if (newSelectedSlideIds.includes(newCurrentSlideId) && newSelectedSlideIds.length > 1) {
                newSelectedSlideIds.splice(newSelectedSlideIds.indexOf(newCurrentSlideId), 1)
            } else if (!newSelectedSlideIds.includes(newCurrentSlideId)) {
                newSelectedSlideIds.push(newCurrentSlideId)
            }
        } else {
            newSelectedSlideIds = [newCurrentSlideId]
        }
        setSelectedSlideIds(newSelectedSlideIds)
        setSelectedObjectIds([])
        setCurrentSlide(newCurrentSlideId)
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
                onDragStart={() => setDraggedSlidePos(order)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, order)}
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
