import { ActionTypes, PresentationTypes } from '../../shared/redux/actionTypes'
import { SlideType } from '../../shared/types/types'
import { v4 as uuidV4 } from 'uuid'

type slidesReducerType = {
    slidesOrder: string[]
    slidesMap: Map<string, SlideType>
    currentSlideId: string
}

const id = uuidV4()

const initialState: slidesReducerType = {
    slidesOrder: [id],
    slidesMap: new Map([[id, { background: 'color', backgroundValue: '#FFFFFF', objects: [] }]]),
    currentSlideId: id,
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

const slidesReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case PresentationTypes.ADD_SLIDE:
            return {
                ...state,
                slidesMap: action.payload.slidesMap,
                slidesOrder: action.payload.slidesOrder,
            }
        case PresentationTypes.SET_SLIDES:
            return {
                ...state,
                slidesMap: new Map(action.payload),
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
                    'fontFamily',
                    action.payload.family,
                ),
            }
        default:
            return state
    }
}
export default slidesReducer
