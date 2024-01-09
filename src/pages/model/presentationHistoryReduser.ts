import { ActionTypes, PresentationTypes } from '../../shared/redux/actionTypes'
import { HistoryPosDirectionType } from '../../shared/types/types'

type PresentationHistoryReduserType = {
    presentationHistory: string[]
    historyPosition: number
    historyPosDirection: HistoryPosDirectionType
}
const initialState: PresentationHistoryReduserType = {
    presentationHistory: [],
    historyPosition: 0,
    historyPosDirection: 'none',
}
const presentationHistoryReduser = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PresentationTypes.SET_PRESENTATION_HISTORY:
            return {
                ...state,
                presentationHistory: action.payload,
            }
        case PresentationTypes.SET_HISTORY_POSITION:
            return {
                ...state,
                historyPosition: action.payload,
            }
        case PresentationTypes.SET_HISTORY_POS_DIRECTION:
            return {
                ...state,
                historyPosDirection: action.payload,
            }
        default:
            return state
    }
}
export default presentationHistoryReduser
