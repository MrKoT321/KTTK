import { ActionTypes, PresentationTypes } from '../redux/actionTypes'

type SlideShowReduserType = {
    isSlideShow: boolean
    isFullscreen: boolean
    isTest: boolean
    currentSlideNumber: number
}

const initialState: SlideShowReduserType = {
    isSlideShow: false,
    isFullscreen: false,
    isTest: false,
    currentSlideNumber: 0,
}
const slideShowReduser = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PresentationTypes.SET_IS_SLIDE_SHOW:
            return {
                ...state,
                isSlideShow: action.payload,
            }
        case PresentationTypes.SET_CURRENT_SLIDE_NUMBER:
            return {
                ...state,
                currentSlideNumber: action.payload,
            }
        case PresentationTypes.SET_IS_FULLSCREEN:
            return {
                ...state,
                isFullscreen: action.payload,
            }
        case PresentationTypes.SET_IS_TEST:
            return {
                ...state,
                isTest: action.payload,
            }
        default:
            return state
    }
}
export default slideShowReduser
