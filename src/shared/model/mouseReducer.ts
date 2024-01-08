import { MouseLocations, MouseStates } from 'shared/types/types'
import { ActionTypes, PresentationTypes } from '../../shared/redux/actionTypes'

type mouseReducerType = {
    mouseState: MouseStates
    mouseLocation: MouseLocations
}

const initialState: mouseReducerType = {
    mouseState: 'cursor',
    mouseLocation: 'workSpace',
}
const mouseReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PresentationTypes.SET_MOUSE_STATE:
            return {
                ...state,
                mouseState: action.payload,
            }
        case PresentationTypes.SET_MOUSE_LOCATION:
            return {
                ...state,
                mouseLocation: action.payload,
            }
        default:
            return state
    }
}
export default mouseReducer
