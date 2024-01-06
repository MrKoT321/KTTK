import { ActionTypes, PresentationTypes } from '../../../../../shared/redux/actionTypes'

type PresentationNameReducerType = {
    name: string
}

const initialState: PresentationNameReducerType = {
    name: '',
}
const presentationNameReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PresentationTypes.SET_PRESENTATION_NAME:
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state
    }
}
export default presentationNameReducer
