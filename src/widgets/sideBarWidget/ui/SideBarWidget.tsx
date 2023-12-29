import { MouseLocations, Selected, SlideType } from '../../../shared/types/types'
import { SideSlide } from './sideSlide/SideSlide'
import React, { useEffect, useState } from 'react'
import { drop } from '../tools/drop'
import { minEditor } from 'shared/testData'

type SlideBarProps = {
    slides: SlideType[]
    setSlides(slides: SlideType[]): void
    selected: Selected
    setSelected: (sel: Selected) => void
    setCurrentSlideBg: (arg: string) => void
    selectedTextFonts: string
    selectedTextSize: number
    bolded: boolean
    italic: boolean
    underlined: boolean
    textColor: string
    mouseLocation: MouseLocations
}

const SideBarWidget = ({
    slides,
    setSlides,
    selected,
    setSelected,
    setCurrentSlideBg,
    selectedTextFonts,
    selectedTextSize,
    bolded,
    italic,
    underlined,
    textColor,
    mouseLocation,
}: SlideBarProps) => {
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
        if (mouseLocation === 'sideBar') {
            if (e.key === 'Delete') {
                e.preventDefault()
                let allSlides: SlideType[] = []
                for (const slide of slides) {
                    if (!selected.slidesIds.includes(slide.id)) {
                        allSlides.push(slide)
                    }
                }
                if (allSlides.length === 0) {
                    allSlides = minEditor.document.slides
                }
                setSlides([...allSlides])
                const currSelected = { ...selected, slidesIds: [allSlides[0].id] }
                setSelected(currSelected)
            }
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', (e) => handleKeyDown(e))
        return document.removeEventListener('keydown', (e) => handleKeyDown(e))
    }, [selected.slidesIds])

    return (
        <div>
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
                        selectedTextFonts={selectedTextFonts}
                        selectedTextSize={selectedTextSize}
                        bolded={bolded}
                        italic={italic}
                        underlined={underlined}
                        textColor={textColor}
                    />
                )
            })}
        </div>
    )
}

export { SideBarWidget }
