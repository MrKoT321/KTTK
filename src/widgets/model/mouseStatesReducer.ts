import { MouseStates } from 'shared/types/types'
import { ActionTypes, PresentationTypes } from '../../shared/redux/actionTypes'

type MouseStatesReducerType = {
    mouseState: MouseStates
}

const initialState: MouseStatesReducerType = {
    mouseState: 'cursor',
}

const MouseStatesReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PresentationTypes.SET_MOUSE_STATE:
            return {
                ...state,
                mouseState: action.payload,
            }
        default:
            return state
    }
}
export default MouseStatesReducer
