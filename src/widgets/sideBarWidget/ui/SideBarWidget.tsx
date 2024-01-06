import { MouseLocations, SlideType } from '../../../shared/types/types'
import { SideSlide } from '../../../entity/sideSlide/SideSlide'
import React, { useEffect, useState } from 'react'
import { minEditor } from 'shared/testData'
import { useAppActions, useAppSelector } from '../../../shared/redux/store'
import { getReorderedSlides } from '../tools/getReorderedSlides'

type SlideBarProps = {
    setCurrentSlideBg: (arg: string) => void
    mouseLocation: MouseLocations
}

const SideBarWidget = ({ setCurrentSlideBg, mouseLocation }: SlideBarProps) => {
    const { slidesMap, slidesOrder } = useAppSelector((state) => state.slides)
    const selected = useAppSelector((state) => state.selected)
    const { selectedSlideIds } = selected
    // const { setSlides, setSelectedSlideIds } = useAppActions()
    // const [draggedSlide, setDraggedSlide] = useState<SlideType | null>(null)

    // const handleDragStart = (slide: SlideType) => {
    //     setDraggedSlide(slide)
    // }
    //
    // const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    // }
    //
    // const handleDrop = (e: React.DragEvent<HTMLDivElement>, thisSlide: SlideType) => {
    //     e.preventDefault()
    //     setSlides(getReorderedSlides(thisSlide, draggedSlide, slides))
    // }

    // const handleKeyDown = (e: KeyboardEvent) => {
    //     if (mouseLocation === 'sideBar') {
    //         if (e.key === 'Delete') {
    //             e.preventDefault()
    //             let allSlides: SlideType[] = []
    //             for (const slide of slides) {
    //                 if (!selected.selectedSlideIds.includes(slide.id)) {
    //                     allSlides.push(slide)
    //                 }
    //             }
    //             if (allSlides.length === 0) {
    //                 allSlides = minEditor.document.slides
    //             }
    //             setSlides([...allSlides])
    //             setSelectedSlideIds([allSlides[0].id])
    //         }
    //     }
    // }

    // useEffect(() => {
    //     document.addEventListener('keydown', (e) => handleKeyDown(e))
    //     return document.removeEventListener('keydown', (e) => handleKeyDown(e))
    // }, [selectedSlideIds])

    return (
        <>
            {slidesOrder.map((slideId, index) => {
                const isSelected = selectedSlideIds.includes(slideId)
                const slide = slidesMap.get(slideId)
                // console.log(slideId, '---', slide)
                if (slide !== undefined) {
                    return (
                        <SideSlide
                            slide={slide}
                            order={index}
                            key={slideId}
                            isSelected={isSelected}
                            // handleDrop={handleDrop}
                            // handleDragStart={handleDragStart}
                            // handleDragOver={handleDragOver}
                            setCurrentSlideBg={setCurrentSlideBg}
                        />
                    )
                }
            })}
        </>
    )
}

export { SideBarWidget }
