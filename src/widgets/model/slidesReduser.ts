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

const setStyleCurrentSlideObjects = (
    currentSlide: SlideType,
    selectedObjectIds: number[],
    paramToChange = '',
    color = '',
): SlideType => {
    currentSlide.objects.forEach((object) => {
        if (object.oType == 'ObjectTextType' && selectedObjectIds.includes(object.id)) {
            if (paramToChange == 'bold') {
                object.bold = !object.bold
            }
            if (paramToChange == 'italic') {
                object.italic = !object.italic
            }
            if (paramToChange == 'underlined') {
                object.underlined = !object.underlined
            }
            if (paramToChange == 'color') {
                object.fontColor = color
            }
        }
    })
    return currentSlide
}

const SlidesReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PresentationTypes.ADD_SLIDE:
            return {
                ...state,
                slides: [...action.payload],
            }
        case PresentationTypes.SET_SLIDES:
            return {
                ...state,
                slides: [...action.payload],
            }
        case PresentationTypes.SET_CURRENT_SLIDE:
            return {
                ...state,
                currentSlide: { ...action.payload },
            }
        // case PresentationTypes.SET_TEXT_OBJECTS:
        //     return {
        //         ...state,
        //         currentSlide: [...action.payload],
        //     }
        case PresentationTypes.SET_SLIDE_OBJECTS_BOLDED:
            return {
                ...state,
                currentSlide: setStyleCurrentSlideObjects({ ...state.currentSlide }, action.payload.objectIds, 'bold'),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_ITALIC:
            return {
                ...state,
                currentSlide: setStyleCurrentSlideObjects(
                    { ...state.currentSlide },
                    action.payload.objectIds,
                    'italic',
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_UNDERLINED:
            return {
                ...state,
                currentSlide: setStyleCurrentSlideObjects(
                    { ...state.currentSlide },
                    action.payload.objectIds,
                    'underlined',
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_COLOR:
            return {
                ...state,
                currentSlide: setStyleCurrentSlideObjects(
                    { ...state.currentSlide },
                    action.payload.objectIds,
                    'color',
                    action.payload.color,
                ),
            }
        default:
            return state
    }
}
export default SlidesReducer
