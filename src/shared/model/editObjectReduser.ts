import { DrawStyle, MoveObj } from 'shared/types/devTypes'
import { ActionTypes, PresentationTypes } from '../../shared/redux/actionTypes'

type editObjectReducerType = {
    currentMouseX: number
    currentMouseY: number
    startMouseX: number
    startMouseY: number
    startWidth: number
    startHeight: number
    currMoveToX: number
    currMoveToY: number
    isDraw: boolean
    lineDirection: 'right' | 'left'
    styleObj: DrawStyle
    moveObjs: MoveObj[]
}

const initialState: editObjectReducerType = {
    currentMouseX: 0,
    currentMouseY: 0,
    startMouseX: 0,
    startMouseY: 0,
    startWidth: 0,
    startHeight: 0,
    currMoveToX: 0,
    currMoveToY: 0,
    isDraw: false,
    lineDirection: 'right',
    styleObj: {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'solid',
    },
    moveObjs: [],
}
const editObjectReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PresentationTypes.SET_CURRENT_MOUSE_X:
            return {
                ...state,
                currentMouseX: action.payload,
            }
        case PresentationTypes.SET_CURRENT_MOUSE_Y:
            return {
                ...state,
                currentMouseY: action.payload,
            }
        case PresentationTypes.SET_START_MOUSE_X:
            return {
                ...state,
                startMouseX: action.payload,
            }
        case PresentationTypes.SET_START_MOUSE_Y:
            return {
                ...state,
                startMouseY: action.payload,
            }
        case PresentationTypes.SET_START_WIDTH:
            return {
                ...state,
                startWidth: action.payload,
            }
        case PresentationTypes.SET_START_HEIGHT:
            return {
                ...state,
                startHeight: action.payload,
            }
        case PresentationTypes.SET_CURR_MOVE_TO_X:
            return {
                ...state,
                currMoveToX: action.payload,
            }
        case PresentationTypes.SET_CURR_MOVE_TO_Y:
            return {
                ...state,
                currMoveToY: action.payload,
            }
        case PresentationTypes.SET_IS_DRAW:
            return {
                ...state,
                isDraw: action.payload,
            }
        case PresentationTypes.SET_LINE_DIRECTION:
            return {
                ...state,
                lineDirection: action.payload,
            }
        case PresentationTypes.SET_STYLE_OBJ:
            return {
                ...state,
                styleObj: action.payload,
            }
        case PresentationTypes.SET_MOVE_OBJS:
            return {
                ...state,
                moveObjs: action.payload,
            }
        default:
            return state
    }
}
export default editObjectReducer
