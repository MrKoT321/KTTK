import { DrawStyle, MoveObj } from 'shared/types/devTypes'
import { MouseLocations, MouseStates, ObjectType, Selected, SlideType } from '../types/types'

enum PresentationTypes {
    SET_PRESENTATION_NAME = 'SET_PRESENTATION_NAME',
    ADD_SLIDE = 'ADD_SLIDE',
    SET_SLIDES = 'SET_SLIDES',
    SET_SLIDE_OBJECTS_BOLDED = 'SET_SLIDE_OBJECTS_BOLDED',
    SET_SLIDE_OBJECTS_ITALIC = 'SET_SLIDE_OBJECTS_ITALIC',
    SET_SLIDE_OBJECTS_UNDERLINED = 'SET_SLIDE_OBJECTS_UNDERLINED',
    SET_SLIDE_OBJECTS_FONT_COLOR = 'SET_SLIDE_OBJECTS_FONT_COLOR',
    SET_SLIDE_OBJECTS_FONT_SIZE = 'SET_SLIDE_OBJECTS_FONT_SIZE',
    SET_SLIDE_OBJECTS_FONT_FAMILY = 'SET_SLIDE_OBJECTS_FONT_FAMILY',
    SET_SELECTED_SLIDE_IDS = 'SET_SELECTED_SLIDE_IDS',
    SET_SELECTED_OBJECT_IDS = 'SET_SELECTED_OBJECT_IDS',
    SET_SELECTED = 'SET_SELECTED',
    SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE',
    SET_TEXT_OBJECTS = 'SET_TEXT_OBJECTS',
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

type SetSlideObjectsBoldedAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_BOLDED
    payload: {
        selectedObjectIds: number[]
        currentSlide: SlideType
    }
}

type SetSlideObjectsItalicAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_ITALIC
    payload: {
        selectedObjectIds: number[]
        currentSlide: SlideType
    }
}

type SetSlideObjectsUnderlinedAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_UNDERLINED
    payload: {
        selectedObjectIds: number[]
        currentSlide: SlideType
    }
}

type SetSlideObjectsColorAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_FONT_COLOR
    payload: {
        color: string
        selectedObjectIds: number[]
        currentSlide: SlideType
    }
}

type SetSlideObjectsFontSizeAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_FONT_SIZE
    payload: {
        size: number
        selectedObjectIds: number[]
        currentSlide: SlideType
    }
}

type SetSlideObjectsFontFamilyAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_FONT_FAMILY
    payload: {
        family: string
        selectedObjectIds: number[]
        currentSlide: SlideType
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

type setTextObjectsAction = {
    type: PresentationTypes.SET_TEXT_OBJECTS
    payload: ObjectType[]
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
    | SetSelectedSlidesAction
    | SetSelectedObjectsAction
    | SetSelectedAction
    | SetCurrentSlideAction
    | setTextObjectsAction
    | SetSlideObjectsBoldedAction
    | SetSlideObjectsItalicAction
    | SetSlideObjectsUnderlinedAction
    | SetSlideObjectsColorAction
    | SetSlideObjectsFontSizeAction
    | SetSlideObjectsFontFamilyAction
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
