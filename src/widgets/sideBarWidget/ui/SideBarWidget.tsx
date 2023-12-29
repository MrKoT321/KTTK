import { SlideType } from '../../../shared/types/types'
import { SideSlide } from './sideSlide/SideSlide'
import React, { useEffect, useState } from 'react'
import { drop } from '../tools/drop'
import { minEditor } from 'shared/testData'
import { useAppActions, useAppSelector } from '../../../shared/redux/store'

type SlideBarProps = {
    setCurrentSlideBg: (arg: string) => void
    selectedTextFonts: string
    selectedTextSize: number
    bolded: boolean
    italic: boolean
    underlined: boolean
    textColor: string
}

const SideBarWidget = ({
    setCurrentSlideBg,
    selectedTextFonts,
    selectedTextSize,
    bolded,
    italic,
    underlined,
    textColor,
}: SlideBarProps) => {
    const slides = useAppSelector((state) => state.slides.slides)
    const selected = useAppSelector((state) => state.selected)
    const currentSlide = useAppSelector((state) => state.slides.currentSlide)
    const { selectedSlideIds } = selected
    const { setSlides, setSelected } = useAppActions()
    const [draggedSlide, setDraggedSlide] = useState<SlideType | null>(null)

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, slide: SlideType) => {
        setDraggedSlide(slide)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, slide: SlideType) => {
        drop({ slides, setSlides, currentSlide, e, draggedSlide })
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Delete') {
            const allSlides: SlideType[] = []
            // if (selected.slidesIds.length === allSlides.length) {
            //     setSlides(minEditor.document.slides)
            // } else {
            //     for (let i = 0; i < allSlides.length; i++) {
            //         if (selected.slidesIds.includes(allSlides[i].id) && allSlides[i]) {
            //             allSlides.splice(i, 1)
            //             i--
            //         }
            //     }
            //     setSlides(allSlides)
            // }
            for (const slide of slides) {
                if (!selectedSlideIds.includes(slide.id)) {
                    allSlides.push(slide)
                }
            }
            if (allSlides.length === 0) {
                setSlides([...minEditor.document.slides])
            } else {
                setSlides([...allSlides])
            }
            const currSelected = { ...selected, selectedSlideIds: [] }
            setSelected(currSelected)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', (e) => handleKeyDown(e))
        return document.removeEventListener('keydown', (e) => handleKeyDown(e))
    }, [selectedSlideIds])

    return (
        <div>
            {slides.map((slide, index) => {
                const isSelected = selectedSlideIds.includes(slide.id)
                return (
                    <SideSlide
                        order={index}
                        key={slide.id}
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
