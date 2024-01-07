import { MouseLocations, SlideType } from '../../../shared/types/types'
import { SideSlide } from '../../../entity/sideSlide/SideSlide'
import React, { useEffect, useState } from 'react'
import { useAppActions, useAppSelector } from '../../../shared/redux/store'
import { getReorderedSlides } from '../tools/getReorderedSlides'

type SlideBarProps = {
    mouseLocation: MouseLocations
}

const SideBarWidget = ({ mouseLocation }: SlideBarProps) => {
    const { slidesMap, slidesOrder } = useAppSelector((state) => state.slides)
    const selectedSlideIds = useAppSelector((state) => state.selected.selectedSlideIds)
    const { setSlides, setSelectedSlideIds, setSlidesOrder } = useAppActions()
    const [draggedSlidePos, setDraggedSlidePos] = useState<number | null>(null)

    const handleDragStart = (pos: number) => {
        setDraggedSlidePos(pos)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, thisSlidePos: number) => {
        e.preventDefault()
        // console.log('slidesOrder = ', slidesOrder)
        // console.log('draggedSlidePos = ', draggedSlidePos)
        // console.log('thisSlidePos = ', thisSlidePos)
        setSlidesOrder(getReorderedSlides(thisSlidePos, draggedSlidePos, slidesMap, slidesOrder))
    }

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
    //
    // useEffect(() => {
    //     document.addEventListener('keydown', (e) => handleKeyDown(e))
    //     return document.removeEventListener('keydown', (e) => handleKeyDown(e))
    // }, [selectedSlideIds])

    useEffect(() => {
        if (slidesOrder.length === 1) {
            setSelectedSlideIds(Array.from(slidesMap.keys()))
        }
    }, [slidesMap])

    useEffect(() => {
        const newMap: Map<string, SlideType> = new Map()
        for (const slideId of slidesOrder) {
            const slide = slidesMap.get(slideId)
            if (slide) {
                newMap.set(slideId, slide)
            }
        }
        setSlides(newMap)
    }, [slidesOrder])

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
                            handleDrop={handleDrop}
                            handleDragStart={handleDragStart}
                            handleDragOver={handleDragOver}
                        />
                    )
                }
            })}
        </>
    )
}

export { SideBarWidget }
