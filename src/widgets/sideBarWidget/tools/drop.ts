import { SlideType } from '../../../shared/types/types'

type DropParams = {
    e: React.DragEvent<HTMLDivElement>
    slide: SlideType
    slides: SlideType[]
    setSlides(slides: SlideType[]): void
    draggedSlide: SlideType | null
}

const drop = ({ e, slide, slides, setSlides, draggedSlide }: DropParams) => {
    e.preventDefault()
    const editedSlides = [...slides]
    setSlides(
        editedSlides
            .map((s) => {
                if (s.id === slide.id) {
                    if (draggedSlide) {
                        const r = { ...s, order: draggedSlide.order }
                        return r
                    }
                    return s
                }
                if (draggedSlide) {
                    if (s.id === draggedSlide.id) {
                        const r = { ...s, order: slide.order }
                        return r
                    }
                }
                return s
            })
            .sort((x, y) => x.order - y.order),
    )
}

export { drop }
