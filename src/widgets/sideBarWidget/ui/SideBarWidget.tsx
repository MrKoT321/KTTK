import { Selected, SlideType } from '../../../shared/types/types'
import styles from './SideBarWidget.module.css'
import { SideSlide } from './sideSlide/SideSlide'
import React, { useState } from 'react'
import { drop } from '../tools/drop'

type SlideBarProps = {
    slides: SlideType[]
    setSlides(slides: SlideType[]): void
    selected: Selected
    setSelected: (sel: Selected) => void
}

const SideBarWidget = ({ slides, setSlides, selected, setSelected }: SlideBarProps) => {
    const [draggedSlide, setDraggedSlide] = useState<SlideType | null>(null)

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, slide: SlideType) => {
        setDraggedSlide(slide)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, slide: SlideType) => {
        drop({ e, slide, slides, setSlides, draggedSlide })
    }

    return (
        <div className={styles.sideBar}>
            {slides.map((slide, index) => {
                const isSelected = selected.slidesIds.includes(slide.id)
                return (
                    <SideSlide
                        order={index}
                        selected={selected}
                        setSelected={setSelected}
                        key={slide.id}
                        slide={slide}
                        isSelected={isSelected}
                        isDraggable={true}
                        handleDrop={handleDrop}
                        handleDragStart={handleDragStart}
                        handleDragOver={handleDragOver}
                    />
                )
            })}
        </div>
    )
}

export { SideBarWidget }
