import { SlideType } from '../../../../shared/types/types'

type AddSlideProps = {
    allSlides: SlideType[]
    setSlides(slides: SlideType[]): void
}

const AddSlide = ({ allSlides, setSlides }: AddSlideProps) => {
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

export { AddSlide }
