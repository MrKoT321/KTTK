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

type ParamToChangeType = 'bold' | 'italic' | 'underlined' | 'fontColor' | 'fontSize' | 'fontFamily'

const setStyleCurrentSlideObjects = (
    currentSlide: SlideType,
    selectedObjectIds: number[],
    paramToChange: ParamToChangeType,
    stringParamToChange?: string,
    numberParamToChange?: number,
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
            if (paramToChange == 'fontColor') {
                object.fontColor = stringParamToChange || '#000000'
            }
            if (paramToChange == 'fontSize') {
                object.fontSize = numberParamToChange || 14
            }
            if (paramToChange == 'fontFamily') {
                object.fontFamily = stringParamToChange || 'FuturaPT'
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
        case PresentationTypes.SET_SLIDE_OBJECTS_BOLDED:
            return {
                ...state,
                currentSlide: setStyleCurrentSlideObjects(
                    { ...action.payload.currentSlide },
                    [...action.payload.selectedObjectIds],
                    'bold',
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_ITALIC:
            return {
                ...state,
                currentSlide: setStyleCurrentSlideObjects(
                    { ...action.payload.currentSlide },
                    [...action.payload.selectedObjectIds],
                    'italic',
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_UNDERLINED:
            return {
                ...state,
                currentSlide: setStyleCurrentSlideObjects(
                    { ...action.payload.currentSlide },
                    [...action.payload.selectedObjectIds],
                    'underlined',
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_FONT_COLOR:
            return {
                ...state,
                currentSlide: setStyleCurrentSlideObjects(
                    { ...action.payload.currentSlide },
                    [...action.payload.selectedObjectIds],
                    'fontColor',
                    action.payload.color,
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_FONT_SIZE:
            return {
                ...state,
                currentSlide: setStyleCurrentSlideObjects(
                    { ...action.payload.currentSlide },
                    [...action.payload.selectedObjectIds],
                    'fontSize',
                    '',
                    action.payload.size,
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_FONT_FAMILY:
            return {
                ...state,
                currentSlide: setStyleCurrentSlideObjects(
                    { ...action.payload.currentSlide },
                    [...action.payload.selectedObjectIds],
                    'fontSize',
                    action.payload.family,
                ),
            }
        default:
            return state
    }
}
export default SlidesReducer
