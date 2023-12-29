import { ActionTypes, PresentationTypes } from '../../shared/redux/actionTypes'
import { SlideType } from '../../shared/types/types'

type SlidesReducerType = {
    slides: SlideType[]
    currentSlide: SlideType
}

const initialState: SlidesReducerType = {
    slides: [{ id: 1, order: 1, background: 'color', backgroundValue: '#FFFFFF', objects: [] }],
    currentSlide: { id: 1, order: 1, background: 'color', backgroundValue: '#FFFFFF', objects: [] },
}

const SlidesReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PresentationTypes.ADD_SLIDE:
            return {
                ...state,
                slides: action.payload,
            }
        case PresentationTypes.SET_SLIDES:
            return {
                ...state,
                slides: action.payload,
            }
        case PresentationTypes.SET_CURRENT_SLIDE:
            return {
                ...state,
                currentSlide: action.payload,
            }
        default:
            return state
    }
}
export default SlidesReducer
