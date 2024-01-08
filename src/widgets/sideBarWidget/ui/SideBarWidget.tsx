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

    const handleKeyDown = (e: KeyboardEvent, selectedSlideIds: string[]) => {
        if (mouseLocation === 'sideBar') {
            if (e.key === 'Delete') {
                e.preventDefault()
                const newOrder = slidesOrder.filter((slideId) => !selectedSlideIds.includes(slideId))
                setSlidesOrder(newOrder)
                const newSlidesMap: Map<string, SlideType> = new Map()
                const keys = Array.from(slidesMap.keys())
                newOrder.map((slideId) => {
                    keys.map((key) => {
                        if (key === slideId) {
                            const newSlide = slidesMap.get(slideId)
                            if (newSlide) {
                                newSlidesMap.set(slideId, newSlide)
                            }
                        }
                    })
                })
                setSlides(newSlidesMap)
                if (newOrder.length === 0) {
                    addSlide(new Map(), [])
                } else {
                    setSelectedSlideIds([newOrder[0]])
                    setCurrentSlide(slidesOrder[0])
                }
            }
        }
    }

    useEffect(() => {
        const handleDeleteSlides = (e: KeyboardEvent) => {
            handleKeyDown(e, selectedSlideIds)
        }
        document.addEventListener('keydown', handleDeleteSlides)
        return () => {
            document.removeEventListener('keydown', handleDeleteSlides)
        }
    }, [selectedSlideIds])

    useEffect(() => {
        if (slidesOrder.length === 1) {
            setSelectedSlideIds(slidesOrder)
            setCurrentSlide(slidesOrder[0])
        }
    }, [slidesOrder])

    return (
        <>
            {slidesOrder.map((slideId, index) => {
                const isSelected = selectedSlideIds.includes(slideId)
                const slide = slidesMap.get(slideId)
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
