import { SideSlide } from '../../../entity/sideSlide/ui/SideSlide'
import React, { useEffect, useState } from 'react'
import { useAppActions, useAppSelector } from '../../../shared/redux/store'
import { getReorderedSlides } from '../tools/getReorderedSlides'
import { handleDeleteSlides } from '../tools/handleDeleteSlides'

const SideBarWidget = () => {
    const { slidesMap, slidesOrder } = useAppSelector((state) => state.slides)
    const selectedSlideIds = useAppSelector((state) => state.selected.selectedSlideIds)
    const { addSlide, setSlides, setSelectedSlideIds, setCurrentSlide, setSlidesOrder } = useAppActions()
    const [draggedSlidePos, setDraggedSlidePos] = useState<number | null>(null)

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
                            key={slideId}
                            isSelected={isSelected}
                            order={index}
                            slide={slide}
                            handleDrop={handleDrop}
                            setDraggedSlidePos={setDraggedSlidePos}
                        />
                    )
                }
            })}
        </>
    )
}

export { SideBarWidget }
