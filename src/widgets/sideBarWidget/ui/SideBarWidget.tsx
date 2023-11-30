import { Selected, SlideType } from '../../../shared/types/types'
import styles from './SideBarWidget.module.css'
import { SideSlide } from './sideSlide/SideSlide'
import React, { useState } from 'react'

type SlideBarProps = {
    slides: SlideType[]
    setSlides(slides: SlideType[]): void
    selected: Selected
    setSelected: (sel: Selected) => void
}

const SideBarWidget = ({ slides, setSlides, selected, setSelected }: SlideBarProps) => {
    const [draggedSlide, setDraggedSlide] = useState<SlideType | null>(null)
    // const [slidesList, setSlidesList] = useState<(SlideType | undefined)[]>(slides)

    const sortSlides = (a: SlideType, b: SlideType) => {
        if (a.order > b.order) {
            return 1
        }
        return -1
    }

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, slide: SlideType) => {
        console.log('drag: ', slide)
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
                        console.log('s = ', s)
                        if (draggedSlide) {
                            const r = { ...s, order: draggedSlide.order }
                            console.log('r = ', r)
                            return r
                        }
                        return s
                    }
                    if (draggedSlide) {
                        if (s.id === draggedSlide.id) {
                            console.log('s = ', s)
                            const r = { ...s, order: slide.order }
                            console.log('r = ', r)
                            return r
                        }
                    }
                    console.log('s = ', s)
                    return s
                })
                .sort((x, y) => x.order - y.order),
        )
    }

    console.log('slidesdvgewfwgregre = ', slides)

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
