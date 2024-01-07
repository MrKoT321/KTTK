import { ObjectType, Selected, SlideType } from '../types/types'

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
    SET_SELECTED_SLIDE_IDS = 'SET_SELECTED_SLIDE_IDS',
    SET_SELECTED_OBJECT_IDS = 'SET_SELECTED_OBJECT_IDS',
    SET_SELECTED = 'SET_SELECTED',
    SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE',
    SET_TEXT_OBJECTS = 'SET_TEXT_OBJECTS',
    SET_SLIDES_ORDER = 'SET_SLIDES_ORDER',
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

type SetSlideObjectsColorAction = {
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

type SetTextObjectsAction = {
    type: PresentationTypes.SET_TEXT_OBJECTS
    payload: ObjectType[]
}

type SetSlidesOrderAction = {
    type: PresentationTypes.SET_SLIDES_ORDER
    payload: string[]
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
    | SetTextObjectsAction
    | SetSlideObjectsBoldedAction
    | SetSlideObjectsItalicAction
    | SetSlideObjectsUnderlinedAction
    | SetSlideObjectsColorAction
    | SetSlideObjectsFontSizeAction
    | SetSlideObjectsFontFamilyAction
    | SetSlideObjectsBorderWidthAction
    | SetSlideObjectsBorderStyleAction
    | SetSlideObjectsBorderColorAction
    | SetSlidesOrderAction

export { PresentationTypes, type ActionTypes, type SetSlidesAction }
