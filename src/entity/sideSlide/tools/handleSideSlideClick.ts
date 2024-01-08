import React from 'react'

export const handleSideSlideClick = (
    e: React.MouseEvent<HTMLDivElement>,
    order: number,
    selectedSlideIds: string[],
    slidesOrder: string[],
    setSelectedSlideIds: (newSelectedSlideIds: string[]) => void,
    setSelectedObjectIds: (newSelectedObjectIds: number[]) => void,
    setCurrentSlide: (id: string) => void,
) => {
    let newSelectedSlideIds = selectedSlideIds
    const newCurrentSlideId = slidesOrder[order]
    if (e.ctrlKey) {
        if (newSelectedSlideIds.includes(newCurrentSlideId) && newSelectedSlideIds.length > 1) {
            newSelectedSlideIds.splice(newSelectedSlideIds.indexOf(newCurrentSlideId), 1)
        } else if (!newSelectedSlideIds.includes(newCurrentSlideId)) {
            newSelectedSlideIds.push(newCurrentSlideId)
        }
    } else {
        newSelectedSlideIds = [newCurrentSlideId]
    }
    setSelectedSlideIds(newSelectedSlideIds)
    setSelectedObjectIds([])
    setCurrentSlide(newCurrentSlideId)
}
