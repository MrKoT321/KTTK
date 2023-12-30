import { PresentationTypes } from './actionTypes'
import { ObjectTextType, ObjectType, Selected, SlideType } from '../types/types'

const setPresentationName = (name: string) => {
    return {
        type: PresentationTypes.SET_PRESENTATION_NAME,
        payload: name,
    }
}

const addSlide = (allSlides: SlideType[]) => {
    const newSlide: SlideType = {
        id: allSlides[allSlides.length - 1].id + 1,
        order: allSlides.length + 1,
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

const setSlideObjects = (slideObjects: ObjectType[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_BOLDED,
        payload: [...slideObjects],
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
        payload: { ...selected },
    }
}

const setCurrentSlide = (currentSlide: SlideType) => {
    return {
        type: PresentationTypes.SET_CURRENT_SLIDE,
        payload: { ...currentSlide },
    }
}

const setTextObjects = (textObject: ObjectTextType[]) => {
    return {
        type: PresentationTypes.SET_TEXT_OBJECTS,
        payload: [...textObject],
    }
}

const setTextObjectsBolded = (selectedTextIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_BOLDED,
        payload: { selectedTextIds },
    }
}

const setTextObjectsItalic = (selectedTextIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_ITALIC,
        payload: { selectedTextIds },
    }
}

const setTextObjectsUnderlined = (selectedTextIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_UNDERLINED,
        payload: { selectedTextIds },
    }
}

const setTextObjectColor = (color: string, selectedTextIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_COLOR,
        payload: { selectedTextIds, color },
    }
}

export {
    setPresentationName,
    addSlide,
    setSlides,
    setSlideObjects,
    setSelectedSlideIds,
    setSelectedObjectIds,
    setSelected,
    setCurrentSlide,
    setTextObjects,
    setTextObjectsBolded,
    setTextObjectsItalic,
    setTextObjectsUnderlined,
    setTextObjectColor,
}
