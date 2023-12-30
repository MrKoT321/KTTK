import { PresentationTypes } from './actionTypes'
import { ObjectTextType, Selected, SlideType } from '../types/types'

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

// const setSlideObjects = (slideObjects: ObjectType[]) => {
//     return {
//         type: PresentationTypes.SET_SLIDE_OBJECTS_BOLDED,
//         payload: [...slideObjects],
//     }
// }

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

const setTextObjectsBolded = (selectedTextIds: number[], currentSlide: SlideType) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_BOLDED,
        payload: { selectedObjectIds: [...selectedTextIds], currentSlide: { ...currentSlide } },
    }
}

const setTextObjectsItalic = (selectedTextIds: number[], currentSlide: SlideType) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_ITALIC,
        payload: { selectedObjectIds: [...selectedTextIds], currentSlide: { ...currentSlide } },
    }
}

const setTextObjectsUnderlined = (selectedTextIds: number[], currentSlide: SlideType) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_UNDERLINED,
        payload: { selectedObjectIds: [...selectedTextIds], currentSlide: { ...currentSlide } },
    }
}

const setTextObjectFontColor = (color: string, selectedTextIds: number[], currentSlide: SlideType) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_FONT_COLOR,
        payload: { color: color, selectedObjectIds: [...selectedTextIds], currentSlide: { ...currentSlide } },
    }
}

const setTextObjectFontSize = (size: number, selectedTextIds: number[], currentSlide: SlideType) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_FONT_SIZE,
        payload: { size: size, selectedObjectIds: [...selectedTextIds], currentSlide: { ...currentSlide } },
    }
}

const setTextObjectFontFamily = (family: string, selectedTextIds: number[], currentSlide: SlideType) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_FONT_FAMILY,
        payload: { family: family, selectedObjectIds: [...selectedTextIds], currentSlide: { ...currentSlide } },
    }
}

export {
    setPresentationName,
    addSlide,
    setSlides,
    // setSlideObjects,
    setSelectedSlideIds,
    setSelectedObjectIds,
    setSelected,
    setCurrentSlide,
    setTextObjects,
    setTextObjectsBolded,
    setTextObjectsItalic,
    setTextObjectsUnderlined,
    setTextObjectFontColor,
    setTextObjectFontSize,
    setTextObjectFontFamily,
}
