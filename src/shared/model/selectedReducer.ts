import { ActionTypes, PresentationTypes } from '../redux/actionTypes'
import { Selected } from '../types/types'

const initialState: Selected = {
    selectedSlideIds: ['1'],
    selectedObjectIds: [],
}
const selectedReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PresentationTypes.SET_SELECTED:
            return {
                ...state,
                selected: { ...action.payload },
            }
        case PresentationTypes.SET_SELECTED_SLIDE_IDS:
            return {
                ...state,
                selectedSlideIds: [...action.payload],
            }
        case PresentationTypes.SET_SELECTED_OBJECT_IDS:
            return {
                ...state,
                selectedObjectIds: [...action.payload],
            }
        default:
            return state
    }
}
export default selectedReducer
