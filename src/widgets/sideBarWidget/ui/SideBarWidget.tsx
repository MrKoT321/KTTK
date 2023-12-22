import { Selected, SlideType } from '../../../shared/types/types'
import { SideSlide } from './sideSlide/SideSlide'
import React, { useEffect, useState } from 'react'
import { drop } from '../tools/drop'
import { minEditor } from '../../../shared/testData'

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

    const handleKeyDown = (e: KeyboardEvent) => {
        const emptySlide: SlideType = {
            id: -1,
            order: -1,
            objects: [],
            background: 'imageBase64',
            backgroundValue: '',
        }
        if (e.key === 'Delete') {
            const newSlides = slides.map((slide) => {
                if (!selected.slidesIds.includes(slide.id)) {
                    return slide
                }
                return emptySlide
            })
            const allSlides = newSlides.filter((slide) => slide.id !== emptySlide.id)
            if (allSlides.length === 0) {
                setSlides([...minEditor.document.slides])
            } else {
                setSlides([...allSlides])
            }
            const currSelected = { ...selected, slidesIds: [] }
            setSelected(currSelected)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', (e) => handleKeyDown(e))
        return document.removeEventListener('keydown', (e) => handleKeyDown(e))
    }, [selected.slidesIds])

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
