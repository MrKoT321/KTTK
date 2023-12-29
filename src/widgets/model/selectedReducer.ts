import { ActionTypes, PresentationTypes } from '../../shared/redux/actionTypes'
import { Selected } from '../../shared/types/types'

// type SlidesReducerType = {
//     selectedSlideIds: number[]
//     selectedObjectIds: number[]
// }

const initialState: Selected = {
    selectedSlideIds: [1],
    selectedObjectIds: [],
}
const SelectedReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PresentationTypes.SET_SELECTED:
            return {
                ...state,
                selected: action.payload,
            }
        case PresentationTypes.SET_SELECTED_SLIDE_IDS:
            return {
                ...state,
                selectedSlideIds: action.payload,
            }
        case PresentationTypes.SET_SELECTED_OBJECT_IDS:
            return {
                ...state,
                selectedObjectIds: action.payload,
            }
        default:
            return state
    }
}
export default SelectedReducer
