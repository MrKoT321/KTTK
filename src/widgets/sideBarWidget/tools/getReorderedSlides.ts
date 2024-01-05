import { SlideType } from '../../../shared/types/types'

const getReorderedSlides = (thisSlide: SlideType, draggedSlide: SlideType | null, slides: SlideType[]) => {
    const i = 1
}
// slides
//     .map((slide) => {
//         if (slide.id === thisSlide.id) {
//             if (draggedSlide) {
//                 return { ...slide, order: draggedSlide.order }
//             }
//             return slide
//         }
//         if (draggedSlide) {
//             if (slide.id === draggedSlide.id) {
//                 return { ...slide, order: thisSlide.order }
//             }
//         }
//         return slide
//     })
//     .sort((x, y) => x.order - y.order)

export { getReorderedSlides }
