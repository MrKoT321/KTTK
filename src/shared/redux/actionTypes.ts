import { DrawStyle, MoveObj } from 'shared/types/devTypes'
import { MouseLocations, MouseStates, Selected, SlideType } from '../types/types'

enum PresentationTypes {
    SET_PRESENTATION_NAME = 'SET_PRESENTATION_NAME',
    ADD_SLIDE = 'ADD_SLIDE',
    SET_SLIDES = 'SET_SLIDES',
    SET_BACKGROUND = 'SET_BACKGROUND',
    SET_SLIDE_OBJECTS_BOLDED = 'SET_SLIDE_OBJECTS_BOLDED',
    SET_SLIDE_OBJECTS_ITALIC = 'SET_SLIDE_OBJECTS_ITALIC',
    SET_SLIDE_OBJECTS_UNDERLINED = 'SET_SLIDE_OBJECTS_UNDERLINED',
    SET_SLIDE_OBJECTS_FONT_COLOR = 'SET_SLIDE_OBJECTS_FONT_COLOR',
    SET_SLIDE_OBJECTS_FONT_SIZE = 'SET_SLIDE_OBJECTS_FONT_SIZE',
    SET_SLIDE_OBJECTS_FONT_FAMILY = 'SET_SLIDE_OBJECTS_FONT_FAMILY',
    SET_SLIDE_OBJECTS_BORDER_WIDTH = 'SET_SLIDE_OBJECTS_BORDER_WIDTH',
    SET_SLIDE_OBJECTS_BORDER_STYLE = 'SET_SLIDE_OBJECTS_BORDER_STYLE',
    SET_SLIDE_OBJECTS_BORDER_COLOR = 'SET_SLIDE_OBJECTS_BORDER_COLOR',
    SET_SLIDE_OBJECTS_COLOR = 'SET_SLIDE_OBJECTS_COLOR',
    SET_SLIDE_OBJECTS_ROTATION = 'SET_SLIDE_OBJECTS_ROTATION',
    SET_SELECTED_SLIDE_IDS = 'SET_SELECTED_SLIDE_IDS',
    SET_SELECTED_OBJECT_IDS = 'SET_SELECTED_OBJECT_IDS',
    SET_SELECTED = 'SET_SELECTED',
    SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE',
    SET_SLIDES_ORDER = 'SET_SLIDES_ORDER',
    SET_SELECT_IMAGE_POPUP_STATE = 'SET_SELECT_IMAGE_POPUP_STATE',
    SET_IS_SLIDE_SHOW = 'SET_IS_SLIDE_SHOW',
    SET_CURRENT_SLIDE_NUMBER = 'SET_CURRENT_SLIDE_NUMBER',
    SET_IS_FULLSCREEN = 'SET_IS_FULLSCREEN',
    SET_CURRENT_MOUSE_X = 'SET_CURRENT_MOUSE_X',
    SET_CURRENT_MOUSE_Y = 'SET_CURRENT_MOUSE_Y',
    SET_START_MOUSE_X = 'SET_START_MOUSE_X',
    SET_START_MOUSE_Y = 'SET_START_MOUSE_Y',
    SET_START_WIDTH = 'SET_START_WIDTH',
    SET_START_HEIGHT = 'SET_START_HEIGHT',
    SET_CURR_MOVE_TO_X = 'SET_CURR_MOVE_TO_X',
    SET_CURR_MOVE_TO_Y = 'SET_CURR_MOVE_TO_Y',
    SET_IS_DRAW = 'SET_IS_DRAW',
    SET_LINE_DIRECTION = 'SET_LINE_DIRECTION',
    SET_STYLE_OBJ = 'SET_STYLE_OBJ',
    SET_MOVE_OBJS = 'SET_MOVE_OBJS',
    SET_MOUSE_STATE = 'SET_MOUSE_STATE',
    SET_MOUSE_LOCATION = 'SET_MOUSE_LOCATION',
}

type SetPresentationNameAction = {
    type: PresentationTypes.SET_PRESENTATION_NAME
    payload: string
}

type AddSlideAction = {
    type: PresentationTypes.ADD_SLIDE
    payload: {
        slidesMap: Map<string, SlideType>
        slidesOrder: string[]
    }
}

type SetSlidesAction = {
    type: PresentationTypes.SET_SLIDES
    payload: Map<string, SlideType>
}

type SetBackgroundAction = {
    type: PresentationTypes.SET_BACKGROUND
    payload: string
}

type SetSlideObjectsBoldedAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_BOLDED
    payload: {
        selectedObjectIds: number[]
    }
}

type SetSlideObjectsItalicAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_ITALIC
    payload: {
        selectedObjectIds: number[]
    }
}

type SetSlideObjectsUnderlinedAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_UNDERLINED
    payload: {
        selectedObjectIds: number[]
    }
}

type SetSlideObjectsFontColorAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_FONT_COLOR
    payload: {
        color: string
        selectedObjectIds: number[]
    }
}

type SetSlideObjectsFontSizeAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_FONT_SIZE
    payload: {
        size: number
        selectedObjectIds: number[]
    }
}

type SetSlideObjectsFontFamilyAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_FONT_FAMILY
    payload: {
        family: string
        selectedObjectIds: number[]
    }
}

type SetSlideObjectsBorderWidthAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_BORDER_WIDTH
    payload: {
        width: number
        selectedObjectIds: number[]
    }
}

type SetSlideObjectsBorderStyleAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_BORDER_STYLE
    payload: {
        style: string
        selectedObjectIds: number[]
    }
}

type SetSlideObjectsBorderColorAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_BORDER_COLOR
    payload: {
        color: string
        selectedObjectIds: number[]
    }
}

type SetSlideObjectsColorAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_COLOR
    payload: {
        color: string
        selectedObjectIds: number[]
    }
}

type SetSlideObjectsRotationAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_ROTATION
    payload: {
        degrees: number
        selectedObjectIds: number[]
    }
}

type SetSelectedSlidesAction = {
    type: PresentationTypes.SET_SELECTED_SLIDE_IDS
    payload: string[]
}

type SetSelectedObjectsAction = {
    type: PresentationTypes.SET_SELECTED_OBJECT_IDS
    payload: number[]
}

type SetSelectedAction = {
    type: PresentationTypes.SET_SELECTED
    payload: Selected
}

type SetCurrentSlideAction = {
    type: PresentationTypes.SET_CURRENT_SLIDE
    payload: string
}

type SetSlidesOrderAction = {
    type: PresentationTypes.SET_SLIDES_ORDER
    payload: string[]
}

type SetSelectImagePopUpStateAction = {
    type: PresentationTypes.SET_SELECT_IMAGE_POPUP_STATE
    payload: boolean
}

type SetIsSlideShow = {
    type: PresentationTypes.SET_IS_SLIDE_SHOW
    payload: boolean
}

type SetCurrentSlideNumber = {
    type: PresentationTypes.SET_CURRENT_SLIDE_NUMBER
    payload: number
}

type SetIsFullscreen = {
    type: PresentationTypes.SET_IS_FULLSCREEN
    payload: boolean
}

type SetCurrentMouseX = {
    type: PresentationTypes.SET_CURRENT_MOUSE_X
    payload: number
}

type SetCurrentMouseY = {
    type: PresentationTypes.SET_CURRENT_MOUSE_Y
    payload: number
}

type SetStartMouseX = {
    type: PresentationTypes.SET_START_MOUSE_X
    payload: number
}

type SetStartMouseY = {
    type: PresentationTypes.SET_START_MOUSE_Y
    payload: number
}

type SetStartWidth = {
    type: PresentationTypes.SET_START_WIDTH
    payload: number
}

type SetStartHeight = {
    type: PresentationTypes.SET_START_HEIGHT
    payload: number
}

type SetCurrMoveToX = {
    type: PresentationTypes.SET_CURR_MOVE_TO_X
    payload: number
}

type SetCurrMoveToY = {
    type: PresentationTypes.SET_CURR_MOVE_TO_Y
    payload: number
}

type SetIsDraw = {
    type: PresentationTypes.SET_IS_DRAW
    payload: boolean
}

type SetLineDirection = {
    type: PresentationTypes.SET_LINE_DIRECTION
    payload: 'right' | 'left'
}

type SetStyleObj = {
    type: PresentationTypes.SET_STYLE_OBJ
    payload: DrawStyle
}

type SetMoveObjs = {
    type: PresentationTypes.SET_MOVE_OBJS
    payload: MoveObj[]
}

type SetMouseState = {
    type: PresentationTypes.SET_MOUSE_STATE
    payload: MouseStates
}

type setMouseLocation = {
    type: PresentationTypes.SET_MOUSE_LOCATION
    payload: MouseLocations
}

type ActionTypes =
    | SetPresentationNameAction
    | AddSlideAction
    | SetSlidesAction
    | SetBackgroundAction
    | SetSelectedSlidesAction
    | SetSelectedObjectsAction
    | SetSelectedAction
    | SetCurrentSlideAction
    | SetSlideObjectsBoldedAction
    | SetSlideObjectsItalicAction
    | SetSlideObjectsUnderlinedAction
    | SetSlideObjectsFontColorAction
    | SetSlideObjectsFontSizeAction
    | SetSlideObjectsFontFamilyAction
    | SetSlideObjectsBorderWidthAction
    | SetSlideObjectsBorderStyleAction
    | SetSlideObjectsBorderColorAction
    | SetSlideObjectsColorAction
    | SetSlideObjectsRotationAction
    | SetSlidesOrderAction
    | SetSelectImagePopUpStateAction
    | SetIsSlideShow
    | SetCurrentSlideNumber
    | SetIsFullscreen
    | SetCurrentMouseX
    | SetCurrentMouseY
    | SetStartMouseX
    | SetStartMouseY
    | SetStartWidth
    | SetStartHeight
    | SetCurrMoveToX
    | SetCurrMoveToY
    | SetIsDraw
    | SetLineDirection
    | SetStyleObj
    | SetMoveObjs
    | SetMouseState
    | setMouseLocation

export { PresentationTypes, type ActionTypes, type SetSlidesAction }
