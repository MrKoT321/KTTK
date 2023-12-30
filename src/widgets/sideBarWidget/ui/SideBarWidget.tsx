import { MouseLocations, Selected, SlideType } from '../../../shared/types/types'
import { SideSlide } from './sideSlide/SideSlide'
import React, { useEffect, useState } from 'react'
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
    mouseLocation: MouseLocations
}

const SideBarWidget = ({
    setCurrentSlideBg,
    selectedTextFonts,
    selectedTextSize,
    bolded,
    italic,
    underlined,
    textColor,
    mouseLocation,
}: SlideBarProps) => {
    const slides = useAppSelector((state) => state.slides.slides)
    const selected = useAppSelector((state) => state.selected)
    const { setSlides, setSelectedSlideIds } = useAppActions()
    const [draggedSlide, setDraggedSlide] = useState<SlideType | null>(null)

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, slide: SlideType) => {
        setDraggedSlide(slide)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, slide: SlideType) => {
        e.preventDefault()
        const editedSlides = [...slides]
        setSlides(
            editedSlides
                .map((s) => {
                    if (s.id === slide.id) {
                        if (draggedSlide) {
                            const r = { ...s, order: draggedSlide.order }
                            return r
                        }
                        return s
                    }
                    if (draggedSlide) {
                        if (s.id === draggedSlide.id) {
                            const r = { ...s, order: slide.order }
                            return r
                        }
                    }
                    return s
                })
                .sort((x, y) => x.order - y.order),
        )
    }

    const handleKeyDown = (e: KeyboardEvent, selectedSlideIds: number[]) => {
        if (mouseLocation === 'sideBar') {
            if (e.key === 'Delete') {
                e.preventDefault()
                let allSlides: SlideType[] = []
                for (const slide of slides) {
                    if (!selectedSlideIds.includes(slide.id)) {
                        allSlides.push(slide)
                    }
                }
                if (allSlides.length === 0) {
                    allSlides = minEditor.document.slides
                }
                setSelectedSlideIds([allSlides[0].id])
                setSlides([...allSlides])
            }
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', (e) => handleKeyDown(e, selected.selectedSlideIds))
        return document.removeEventListener('keydown', (e) => handleKeyDown(e, selected.selectedSlideIds))
    }, [selected.selectedSlideIds])

    return (
        <>
            {slides.map((slide, index) => {
                const isSelected = selected.selectedSlideIds.includes(slide.id)
                return (
                    <SideSlide
                        slide={slide}
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
        </>
    )
}

export { SideBarWidget }
