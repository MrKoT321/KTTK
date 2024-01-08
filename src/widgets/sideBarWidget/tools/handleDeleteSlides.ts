import { MouseLocations, SlideType } from '../../../shared/types/types'

export const handleDeleteSlides = (
    mouseLocation: MouseLocations,
    e: KeyboardEvent,
    selectedSlideIds: string[],
    slidesOrder: string[],
    setSlidesOrder: (newOrder: string[]) => void,
    slidesMap: Map<string, SlideType>,
    setSlides: (newMap: Map<string, SlideType>) => void,
    addSlide: (slidesMap: Map<string, SlideType>, slidesOrder: string[]) => void,
    setSelectedSlideIds: (newSlideIds: string[]) => void,
    setCurrentSlide: (id: string) => void,
) => {
    if (e.key === 'Delete' && mouseLocation === 'sideBar') {
        e.preventDefault()
        const newOrder = slidesOrder.filter((slideId) => !selectedSlideIds.includes(slideId))
        setSlidesOrder(newOrder)
        const newSlidesMap: Map<string, SlideType> = new Map()
        const keys = Array.from(slidesMap.keys())
        newOrder.map((slideId) => {
            keys.map((key) => {
                if (key === slideId) {
                    const newSlide = slidesMap.get(slideId)
                    if (newSlide) {
                        newSlidesMap.set(slideId, newSlide)
                    }
                }
            })
        })
        setSlides(newSlidesMap)
        if (newOrder.length === 0) {
            addSlide(new Map(), [])
        } else {
            setSelectedSlideIds([newOrder[0]])
            setCurrentSlide(slidesOrder[0])
        }
    }
}
