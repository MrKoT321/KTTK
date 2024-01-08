import { PresentationTypes } from './actionTypes'
import { ObjectTextType, Selected, SlideType } from '../types/types'
import { v4 as uuidV4 } from 'uuid'
import { DrawStyle, MoveObj } from 'shared/types/devTypes'

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

const setSelectedSlideIds = (selectedSlideIds: string[]) => {
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

const setCurrentMouseX = (currentMouseX: number) => {
    return {
        type: PresentationTypes.SET_CURRENT_MOUSE_X,
        payload: currentMouseX,
    }
}

const setCurrentMouseY = (currentMouseY: number) => {
    console.log('action', currentMouseY)
    return {
        type: PresentationTypes.SET_CURRENT_MOUSE_Y,
        payload: currentMouseY,
    }
}

const setStartMouseX = (startMouseX: number) => {
    return {
        type: PresentationTypes.SET_START_MOUSE_X,
        payload: startMouseX,
    }
}

const setStartMouseY = (startMouseY: number) => {
    return {
        type: PresentationTypes.SET_START_MOUSE_Y,
        payload: startMouseY,
    }
}

const setStartWidth = (startWidth: number) => {
    return {
        type: PresentationTypes.SET_START_WIDTH,
        payload: startWidth,
    }
}

const setStartHeight = (startHeight: number) => {
    return {
        type: PresentationTypes.SET_START_HEIGHT,
        payload: startHeight,
    }
}

const setCurrMoveToX = (currMoveToX: number) => {
    return {
        type: PresentationTypes.SET_CURR_MOVE_TO_X,
        payload: currMoveToX,
    }
}

const setCurrMoveToY = (currMoveToY: number) => {
    return {
        type: PresentationTypes.SET_CURRENT_MOUSE_Y,
        payload: currMoveToY,
    }
}

const setIsDraw = (isDraw: boolean) => {
    return {
        type: PresentationTypes.SET_IS_DRAW,
        payload: isDraw,
    }
}

const setLineDirection = (lineDirection: 'right' | 'left') => {
    return {
        type: PresentationTypes.SET_LINE_DIRECTION,
        payload: lineDirection,
    }
}

const setStyleObj = (styleObj: DrawStyle) => {
    return {
        type: PresentationTypes.SET_STYLE_OBJ,
        payload: styleObj,
    }
}

const setMoveObjs = (moveObjs: MoveObj[]) => {
    return {
        type: PresentationTypes.SET_MOVE_OBJS,
        payload: moveObjs,
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
    setTextObjects,
    setTextObjectsBolded,
    setTextObjectsItalic,
    setTextObjectsUnderlined,
    setTextObjectFontColor,
    setTextObjectFontSize,
    setTextObjectFontFamily,
    setCurrentMouseX,
    setCurrentMouseY,
    setStartMouseX,
    setStartMouseY,
    setStartWidth,
    setStartHeight,
    setCurrMoveToX,
    setCurrMoveToY,
    setIsDraw,
    setLineDirection,
    setStyleObj,
    setMoveObjs,
}
