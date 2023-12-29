import { SlideType } from '../../../shared/types/types'
import { useAppSelector } from '../../../shared/redux/store'
import { PresentationTypes } from '../../../shared/redux/actionTypes'

type DropParams = {
    slides: SlideType[]
    setSlides: (slides: SlideType[]) => void
    currentSlide: SlideType
    e: React.DragEvent<HTMLDivElement>
    draggedSlide: SlideType | null
}

const drop = ({ slides, setSlides, currentSlide, e, draggedSlide }: DropParams) => {
    e.preventDefault()
    const editedSlides = [...slides]
    setSlides(
        editedSlides
            .map((s) => {
                if (s.id === currentSlide.id) {
                    if (draggedSlide) {
                        const r = { ...s, order: draggedSlide.order }
                        return r
                    }
                    return s
                }
                if (draggedSlide) {
                    if (s.id === draggedSlide.id) {
                        const r = { ...s, order: currentSlide.order }
                        return r
                    }
                }
                return s
            })
            .sort((x, y) => x.order - y.order),
    )
}

export { drop }
