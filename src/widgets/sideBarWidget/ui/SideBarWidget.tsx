import { MouseLocations, SlideType } from '../../../shared/types/types'
import { SideSlide } from '../../../entity/sideSlide/SideSlide'
import React, { useEffect, useState } from 'react'
import { useAppActions, useAppSelector } from '../../../shared/redux/store'
import { getReorderedSlides } from '../tools/getReorderedSlides'
import { defaultCurrentSlide } from '../../../shared/tools/defaultCurrentSlide'

type SlideBarProps = {
    mouseLocation: MouseLocations
}

const SideBarWidget = ({ mouseLocation }: SlideBarProps) => {
    const { slidesMap, slidesOrder } = useAppSelector((state) => state.slides)
    const selectedSlideIds = useAppSelector((state) => state.selected.selectedSlideIds)
    const { addSlide, setSlides, setSelectedSlideIds, setCurrentSlide, setSlidesOrder } = useAppActions()
    const [draggedSlidePos, setDraggedSlidePos] = useState<number | null>(null)

    const handleDragStart = (pos: number) => {
        setDraggedSlidePos(pos)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, thisSlidePos: number) => {
        e.preventDefault()
        setSlidesOrder(getReorderedSlides(thisSlidePos, draggedSlidePos, slidesMap, slidesOrder))
    }

    // const handleKeyDown = (e: KeyboardEvent) => {
    //     if (mouseLocation === 'sideBar') {
    //         if (e.key === 'Delete') {
    //             e.preventDefault()
    //             console.log('1111111111111111111111111111111111111111111111111\n11111111111')
    //             selectedSlideIds.forEach((slideId) => {
    //                 slidesMap.delete(slideId)
    //             })
    //             setSlidesOrder(Array.from(slidesMap.keys()))
    //             if (slidesMap.size === 0) {
    //                 addSlide(slidesMap, [])
    //             }
    //         }
    //     }
    // }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (mouseLocation === 'sideBar') {
            if (e.key === 'Delete') {
                e.preventDefault()
                console.log('1111111111111111')
                const newOrder = slidesOrder.filter((slideId) => !selectedSlideIds.includes(slideId))
                console.log('newOrder = ', newOrder)
                setSlidesOrder(newOrder)
                if (newOrder.length === 0) {
                    addSlide(new Map(), [])
                }
            }
        }
    }

    console.log('slidesOrder = ', slidesOrder)
    // console.log('currentSlideId = ', currentSlideId)
    console.log('selectedSlideIds = ', selectedSlideIds)
    console.log('slidesMap = ', slidesMap)

    useEffect(() => {
        document.addEventListener('keydown', (e) => handleKeyDown(e))
        return document.removeEventListener('keydown', (e) => handleKeyDown(e))
    }, [selectedSlideIds])

    useEffect(() => {
        const newSlidesMap: Map<string, SlideType> = new Map()
        const keys = Array.from(slidesMap.keys())
        slidesOrder.map((slideId) => {
            keys.map((key) => {
                if (key === slideId) {
                    console.log('2222222222')
                    newSlidesMap.set(slideId, slidesMap.get(slideId) || defaultCurrentSlide)
                }
            })
            console.log('newSlidesMap = ', newSlidesMap)
        })
        setSlides(newSlidesMap)
        if (slidesOrder.length === 1) {
            setSelectedSlideIds(Array.from(slidesMap.keys()))
            setCurrentSlide(slidesOrder[0])
        }
    }, [slidesOrder])

    // useEffect(() => {
    //     const newMap: Map<string, SlideType> = new Map()
    //     for (const slideId of slidesOrder) {
    //         const slide = slidesMap.get(slideId)
    //         if (slide) {
    //             newMap.set(slideId, slide)
    //         }
    //     }
    //     setSlides(newMap)
    // }, [slidesOrder])

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
