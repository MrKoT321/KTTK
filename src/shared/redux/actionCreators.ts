import { PresentationTypes } from './actionTypes'
import { ObjectTextType, Selected, SlideType } from '../types/types'
import { v4 as uuidV4 } from 'uuid'

const setPresentationName = (name: string) => {
    return {
        type: PresentationTypes.SET_PRESENTATION_NAME,
        payload: name,
    }
}

const addSlide = (slidesMap: Map<string, SlideType>, order: string[]) => {
    const id = uuidV4()
    const newSlide: SlideType = {
        background: 'color',
        backgroundValue: '#FFFFFF',
        objects: [],
    }
    slidesMap.set(id, newSlide)
    order.push(id)
    return {
        type: PresentationTypes.ADD_SLIDE,
        payload: {
            slidesMap: new Map(slidesMap),
            slidesOrder: [...order],
        },
    }
}

const setSlides = (slidesMap: Map<string, SlideType>) => {
    return {
        type: PresentationTypes.SET_SLIDES,
        payload: slidesMap,
    }
}

const setBackground = (color: string) => {
    return {
        type: PresentationTypes.SET_BACKGROUND,
        payload: color,
    }
}

const setSelectedSlideIds = (selectedSlideIds: string[]) => {
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

const setCurrentSlide = (currentSlideId: string) => {
    return {
        type: PresentationTypes.SET_CURRENT_SLIDE,
        payload: currentSlideId,
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
        payload: { selectedObjectIds: [...selectedTextIds] },
    }
}

const setTextObjectsItalic = (selectedTextIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_ITALIC,
        payload: { selectedObjectIds: [...selectedTextIds] },
    }
}

const setTextObjectsUnderlined = (selectedTextIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_UNDERLINED,
        payload: { selectedObjectIds: [...selectedTextIds] },
    }
}

const setTextObjectFontColor = (color: string, selectedTextIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_FONT_COLOR,
        payload: { color: color, selectedObjectIds: [...selectedTextIds] },
    }
}

const setTextObjectFontSize = (size: number, selectedTextIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_FONT_SIZE,
        payload: { size: size, selectedObjectIds: [...selectedTextIds] },
    }
}

const setTextObjectFontFamily = (family: string, selectedTextIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_FONT_FAMILY,
        payload: { family: family, selectedObjectIds: [...selectedTextIds] },
    }
}

const setSlideObjectsBorderWidth = (width: number, selectedTextIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_BORDER_WIDTH,
        payload: { width: width, selectedObjectIds: [...selectedTextIds] },
    }
}

const setSlideObjectsBorderStyle = (style: string, selectedTextIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_BORDER_STYLE,
        payload: { style: style, selectedObjectIds: [...selectedTextIds] },
    }
}

const setSlideObjectsBorderColor = (color: string, selectedTextIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_BORDER_COLOR,
        payload: { color: color, selectedObjectIds: [...selectedTextIds] },
    }
}

const setSlidesOrder = (slidesOrder: string[]) => {
    return {
        type: PresentationTypes.SET_SLIDES_ORDER,
        payload: [...slidesOrder],
    }
}

export {
    setPresentationName,
    addSlide,
    setSlides,
    setBackground,
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
    setSlideObjectsBorderWidth,
    setSlideObjectsBorderStyle,
    setSlideObjectsBorderColor,
    setSlidesOrder,
}
