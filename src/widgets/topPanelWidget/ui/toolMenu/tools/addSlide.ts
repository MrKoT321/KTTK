import { SlideType } from '../../../../../shared/types/types'

type AddSlideParams = {
    allSlides: SlideType[]
    setSlides(slides: SlideType[]): void
}

const addSlide = ({ allSlides, setSlides }: AddSlideParams) => {
    const createSlideId = () => {
        let maxId = 0
        allSlides.map((slide) => {
            if (slide.id > maxId) {
                maxId = slide.id
            }
        })
        return maxId + 1
    }
    const newSlide: SlideType = {
        id: createSlideId(),
        order: allSlides.length,
        background: 'color',
        backgroundValue: '#FFFFFF',
        objects: [],
    }
    allSlides.push(newSlide)
}

export { addSlide }
