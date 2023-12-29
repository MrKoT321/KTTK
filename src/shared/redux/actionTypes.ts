import { Selected, SlideType } from '../types/types'

enum PresentationTypes {
    SET_PRESENTATION_NAME = 'SET_PRESENTATION_NAME',
    ADD_SLIDE = 'ADD_SLIDE',
    SET_SLIDES = 'SET_SLIDES',
    SET_SELECTED_SLIDE_IDS = 'SET_SELECTED_SLIDE_IDS',
    SET_SELECTED_OBJECT_IDS = 'SET_SELECTED_OBJECT_IDS',
    SET_SELECTED = 'SET_SELECTED',
    SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE',
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

type ActionTypes =
    | SetPresentationNameAction
    | AddSlideAction
    | SetSlidesAction
    | SetSelectedSlidesAction
    | SetSelectedObjectsAction
    | SetSelectedAction
    | SetCurrentSlideAction

export { PresentationTypes, type ActionTypes, type SetSlidesAction }
