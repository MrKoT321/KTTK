import { Selected, SlideType } from '../../../shared/types/types'
import { SideSlide } from './sideSlide/SideSlide'
import React, { useState } from 'react'
import { drop } from '../tools/drop'

type SlideBarProps = {
    slides: SlideType[]
    setSlides(slides: SlideType[]): void
    selected: Selected
    setSelected: (sel: Selected) => void
    setCurrentSlideBg: (arg: string) => void
}

const SideBarWidget = ({ slides, setSlides, selected, setSelected, setCurrentSlideBg }: SlideBarProps) => {
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
        <>
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
                        setCurrentSlideBg={setCurrentSlideBg}
                    />
                )
            })}
        </>
    )
}

export { SideBarWidget }
