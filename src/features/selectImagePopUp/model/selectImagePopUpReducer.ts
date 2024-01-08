import { ActionTypes, PresentationTypes } from '../../../shared/redux/actionTypes'

type SelectImagePopUpType = {
    isPopUpOpen: boolean
}
const initialState: SelectImagePopUpType = {
    isPopUpOpen: false,
}

const selectImagePopUpReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PresentationTypes.SET_SELECT_IMAGE_POPUP_STATE:
            return {
                ...state,
                isPopUpOpen: action.payload,
            }
        default:
            return state
    }
}

export default selectImagePopUpReducer
