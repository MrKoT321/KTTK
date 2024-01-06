import { SlideType } from '../../../shared/types/types'

const getReorderedSlides = (
    thisSlidePos: number,
    draggedSlidePos: number | null,
    slidesMap: Map<string, SlideType>,
    slidesOrder: string[],
) => {
    let draggedSlideId: string
    if (draggedSlidePos === 0) {
        draggedSlideId = slidesOrder[0]
    } else {
        draggedSlideId = slidesOrder[draggedSlidePos || -1]
    }
    const thisSlideId = slidesOrder[thisSlidePos]

    // if (draggedSlideId && thisSlideId) {
    //     slidesOrder.splice(slidesOrder.indexOf(thisSlideId), 0, draggedSlideId)
    // }
    // return slidesOrder

    if (draggedSlideId && thisSlideId) {
        return slidesOrder.map((slideId) => {
            if (slideId === thisSlideId) {
                return draggedSlideId
            }
            if (slideId === draggedSlideId) {
                return thisSlideId
            }
            return slideId
        })
    }
    return slidesOrder
}

export { getReorderedSlides }
