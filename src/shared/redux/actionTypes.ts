import { ObjectType, Selected, SlideType } from '../types/types'

enum PresentationTypes {
    SET_PRESENTATION_NAME = 'SET_PRESENTATION_NAME',
    ADD_SLIDE = 'ADD_SLIDE',
    SET_SLIDES = 'SET_SLIDES',
    SET_SLIDE_OBJECTS_BOLDED = 'SET_SLIDE_OBJECTS_BOLDED',
    SET_SLIDE_OBJECTS_ITALIC = 'SET_SLIDE_OBJECTS_ITALIC',
    SET_SLIDE_OBJECTS_UNDERLINED = 'SET_SLIDE_OBJECTS_UNDERLINED',
    SET_SLIDE_OBJECTS_COLOR = 'SET_SLIDE_OBJECTS_COLOR',
    SET_SELECTED_SLIDE_IDS = 'SET_SELECTED_SLIDE_IDS',
    SET_SELECTED_OBJECT_IDS = 'SET_SELECTED_OBJECT_IDS',
    SET_SELECTED = 'SET_SELECTED',
    SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE',
    SET_TEXT_OBJECTS = 'SET_TEXT_OBJECTS',
}

type SetPresentationNameAction = {
    type: PresentationTypes.SET_PRESENTATION_NAME
    payload: string
}

type AddSlideAction = {
    type: PresentationTypes.ADD_SLIDE
    payload: SlideType[]
}

type SetSlidesAction = {
    type: PresentationTypes.SET_SLIDES
    payload: SlideType[]
}

type SetSlideObjectsBoldedAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_BOLDED
    payload: {
        objectIds: number[]
    }
}

type SetSlideObjectsItalicAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_ITALIC
    payload: {
        objectIds: number[]
    }
}

type SetSlideObjectsUnderlinedAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_UNDERLINED
    payload: {
        objectIds: number[]
    }
}

type SetSlideObjectsColorAction = {
    type: PresentationTypes.SET_SLIDE_OBJECTS_COLOR
    payload: {
        objectIds: number[]
        color: string
    }
}

type SetSelectedSlidesAction = {
    type: PresentationTypes.SET_SELECTED_SLIDE_IDS
    payload: number[]
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
    payload: SlideType
}

type setTextObjectsAction = {
    type: PresentationTypes.SET_TEXT_OBJECTS
    payload: ObjectType[]
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

export { PresentationTypes, type ActionTypes, type SetSlidesAction }
