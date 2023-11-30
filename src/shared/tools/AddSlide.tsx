import { SlideType } from '../types/types'

type AddSlideParams = {
    allSlides: SlideType[]
    setSlides(slides: SlideType[]): void
}

const addSlide = ({ allSlides, setSlides }: AddSlideParams) => {
    const newSlide: SlideType = {
        id: allSlides[allSlides.length - 1].id + 1,
        order: allSlides.length,
        background: 'color',
        backgroundValue: '#FFFFFF',
        objects: [],
    }
    allSlides.push(newSlide)
    setSlides(allSlides)
}

export { addSlide }
