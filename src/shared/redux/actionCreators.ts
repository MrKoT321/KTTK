import { PresentationTypes } from './actionTypes'
import { HistoryPosDirectionType, MouseLocations, MouseStates, Selected, SlideType } from '../types/types'
import { v4 as uuidV4 } from 'uuid'
import { DrawStyle, MoveObj } from 'shared/types/devTypes'

const setPresentationHistory = (newPresentationHistory: string[]) => {
    return {
        type: PresentationTypes.SET_PRESENTATION_HISTORY,
        payload: [...newPresentationHistory],
    }
}

const setHistoryPosition = (newHistoryPosition: number) => {
    return {
        type: PresentationTypes.SET_HISTORY_POSITION,
        payload: newHistoryPosition,
    }
}

const setHistoryPosDirection = (newHistoryPosDirection: HistoryPosDirectionType) => {
    return {
        type: PresentationTypes.SET_HISTORY_POS_DIRECTION,
        payload: newHistoryPosDirection,
    }
}

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
            slidesMap: slidesMap,
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

const setSlideObjectsColor = (color: string, selectedObjectIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_COLOR,
        payload: { color: color, selectedObjectIds: selectedObjectIds },
    }
}

const setSlideObjectsRotation = (degrees: number, selectedObjectIds: number[]) => {
    return {
        type: PresentationTypes.SET_SLIDE_OBJECTS_ROTATION,
        payload: { degrees: degrees, selectedObjectIds: selectedObjectIds },
    }
}

const setSlidesOrder = (slidesOrder: string[]) => {
    return {
        type: PresentationTypes.SET_SLIDES_ORDER,
        payload: [...slidesOrder],
    }
}

const setSelectImagePopUpState = (isPopIpOpen: boolean) => {
    return {
        type: PresentationTypes.SET_SELECT_IMAGE_POPUP_STATE,
        payload: isPopIpOpen,
    }
}

const setIsSlideShow = (isSlideShow: boolean) => {
    return {
        type: PresentationTypes.SET_IS_SLIDE_SHOW,
        payload: isSlideShow,
    }
}

const setCurrentSlideNumber = (newCurrentSlideNumber: number) => {
    return {
        type: PresentationTypes.SET_CURRENT_SLIDE_NUMBER,
        payload: newCurrentSlideNumber,
    }
}

const setIsFullscreen = (isFullscreen: boolean) => {
    return {
        type: PresentationTypes.SET_IS_FULLSCREEN,
        payload: isFullscreen,
    }
}

const setIsTest = (isTest: boolean) => {
    return {
        type: PresentationTypes.SET_IS_TEST,
        payload: isTest,
    }
}

const setCurrentMouseX = (currentMouseX: number) => {
    return {
        type: PresentationTypes.SET_CURRENT_MOUSE_X,
        payload: currentMouseX,
    }
}

const setCurrentMouseY = (currentMouseY: number) => {
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
        type: PresentationTypes.SET_CURR_MOVE_TO_Y,
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

const setMouseState = (mouseState: MouseStates) => {
    return {
        type: PresentationTypes.SET_MOUSE_STATE,
        payload: mouseState,
    }
}

const setMouseLocation = (mouseLocation: MouseLocations) => {
    return {
        type: PresentationTypes.SET_MOUSE_LOCATION,
        payload: mouseLocation,
    }
}

export {
    setPresentationName,
    addSlide,
    setSlides,
    setBackground,
    setSelectedSlideIds,
    setSelectedObjectIds,
    setSelected,
    setCurrentSlide,
    setTextObjectsBolded,
    setTextObjectsItalic,
    setTextObjectsUnderlined,
    setTextObjectFontColor,
    setTextObjectFontSize,
    setTextObjectFontFamily,
    setSlideObjectsBorderWidth,
    setSlideObjectsBorderStyle,
    setSlideObjectsBorderColor,
    setSlideObjectsColor,
    setSlideObjectsRotation,
    setSlidesOrder,
    setSelectImagePopUpState,
    setIsSlideShow,
    setCurrentSlideNumber,
    setIsFullscreen,
    setIsTest,
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
    setMouseState,
    setMouseLocation,
    setPresentationHistory,
    setHistoryPosition,
    setHistoryPosDirection,
}
