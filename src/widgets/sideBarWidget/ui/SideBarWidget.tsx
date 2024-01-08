import { MouseLocations, SlideType } from '../../../shared/types/types'
import { SideSlide } from '../../../entity/sideSlide/SideSlide'
import React, { useEffect, useState } from 'react'
import { useAppActions, useAppSelector } from '../../../shared/redux/store'
import { getReorderedSlides } from '../tools/getReorderedSlides'
import { handleDeleteSlides } from '../../../shared/tools/handleDeleteSlides'

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

    useEffect(() => {
        const handleDeleteDown = (event: KeyboardEvent) => {
            handleDeleteSlides(
                mouseLocation,
                event,
                selectedSlideIds,
                slidesOrder,
                setSlidesOrder,
                slidesMap,
                setSlides,
                addSlide,
                setSelectedSlideIds,
                setCurrentSlide,
            )
        }
        document.addEventListener('keydown', handleDeleteDown)
        return () => {
            document.removeEventListener('keydown', handleDeleteDown)
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
