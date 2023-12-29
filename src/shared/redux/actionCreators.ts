import { PresentationTypes } from './actionTypes'
import { Selected, SlideType } from '../types/types'

const setPresentationName = (name: string) => {
    return {
        type: PresentationTypes.SET_PRESENTATION_NAME,
        payload: name,
    }
}

const addSlide = (allSlides: SlideType[]) => {
    const newSlide: SlideType = {
        id: allSlides[allSlides.length - 1].id + 1,
        order: allSlides.length,
        background: 'color',
        backgroundValue: '#FFFFFF',
        objects: [],
    }
    allSlides.push(newSlide)
    return {
        type: PresentationTypes.ADD_SLIDE,
        payload: [...allSlides],
    }
}

const setSlides = (allSlides: SlideType[]) => {
    return {
        type: PresentationTypes.SET_SLIDES,
        payload: [...allSlides],
    }
}

const setSelectedSlideIds = (selectedSlideIds: number[]) => {
    return {
        type: PresentationTypes.SET_SELECTED_SLIDE_IDS,
        payload: [...selectedSlideIds],
    }
}

const setSelectedObjectIds = (selectedObjectIds: number[]) => {
    return {
        type: PresentationTypes.SET_SELECTED_OBJECT_IDS,
        payload: [...selectedObjectIds],
    }
}

const setSelected = (selected: Selected) => {
    return {
        type: PresentationTypes.SET_SELECTED,
        payload: selected,
    }
}

const setCurrentSlide = (currentSlide: SlideType) => {
    return {
        type: PresentationTypes.SET_CURRENT_SLIDE,
        payload: currentSlide,
    }
}

export {
    setPresentationName,
    addSlide,
    setSlides,
    setSelectedSlideIds,
    setSelectedObjectIds,
    setSelected,
    setCurrentSlide,
}
