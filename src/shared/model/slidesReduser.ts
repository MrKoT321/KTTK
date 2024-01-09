import { ActionTypes, PresentationTypes } from '../redux/actionTypes'
import { SlideType } from '../types/types'
import { v4 as uuidV4 } from 'uuid'
import { defaultCurrentSlide } from '../tools/defaultCurrentSlide'
import { BorderStyle } from '../types/devTypes'

type slidesReducerType = {
    slidesOrder: string[]
    slidesMap: Map<string, SlideType>
    currentSlideId: string
}

const firstSlideId = uuidV4()

const initialState: slidesReducerType = {
    slidesOrder: [firstSlideId],
    slidesMap: new Map([[firstSlideId, { background: 'color', backgroundValue: '#FFFFFF', objects: [] }]]),
    currentSlideId: firstSlideId,
}

type ParamToChangeType =
    | 'bold'
    | 'italic'
    | 'underlined'
    | 'fontColor'
    | 'fontSize'
    | 'fontFamily'
    | 'borderWidth'
    | 'borderStyle'
    | 'borderColor'
    | 'objectColor'
    | 'rotation'

const setBackgroundCurrentSlide = (color: string, slidesMap: Map<string, SlideType>, currentSlideId: string) => {
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide
    currentSlide.backgroundValue = color
    return slidesMap.set(currentSlideId, currentSlide)
}

const remapBorderStyle = (style?: string): BorderStyle => {
    if (style === 'dotted') return 'dotted'
    if (style === 'dashed') return 'dashed'
    if (style === 'solid') return 'solid'
    if (style === 'double') return 'double'
    if (style === 'groove') return 'groove'
    if (style === 'ridge') return 'ridge'
    if (style === 'inset') return 'inset'
    if (style === 'outset') return 'outset'
    return 'none'
}

const setStyleCurrentSlideObjects = (
    currentSlideId: string,
    slidesMap: Map<string, SlideType>,
    selectedObjectIds: number[],
    paramToChange: ParamToChangeType,
    stringParamToChange?: string | BorderStyle,
    numberParamToChange?: number,
): Map<string, SlideType> => {
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide
    currentSlide.objects.forEach((object) => {
        if (selectedObjectIds.includes(object.id)) {
            if (object.oType === 'ObjectTextType') {
                if (paramToChange === 'bold') {
                    object.bold = !object.bold
                }
                if (paramToChange === 'italic') {
                    object.italic = !object.italic
                }
                if (paramToChange === 'underlined') {
                    object.underlined = !object.underlined
                }
                if (paramToChange === 'fontColor') {
                    object.fontColor = stringParamToChange || '#000000'
                }
                if (paramToChange === 'fontSize') {
                    object.fontSize = numberParamToChange || 14
                }
                if (paramToChange === 'fontFamily') {
                    object.fontFamily = stringParamToChange || 'FuturaPT'
                }
                if (paramToChange === 'objectColor') {
                    object.highlighter = stringParamToChange || '#00000000'
                }
            }
            if (object.oType === 'ObjectShapeType') {
                if (paramToChange === 'objectColor') {
                    object.shapeBgColor = stringParamToChange || '#FFFF00'
                }
                if (paramToChange === 'borderWidth' && object.type === 'line') {
                    object.lineWidth = numberParamToChange || 1
                }
            }
            if (paramToChange === 'borderWidth') {
                if (object.oType === 'ObjectShapeType' && object.type === 'line') return
                object.borderWidth = numberParamToChange || 0
            }
            if (paramToChange === 'borderStyle') {
                object.borderStyle = remapBorderStyle(stringParamToChange)
            }
            if (paramToChange === 'borderColor') {
                object.borderColor = stringParamToChange || '#000000'
            }
            if (paramToChange === 'rotation') {
                if (numberParamToChange && numberParamToChange < 0) {
                    object.rotate = 0
                } else if (numberParamToChange && numberParamToChange > 359) {
                    object.rotate = 359
                } else {
                    object.rotate = numberParamToChange || 0
                }
            }
        }
    })
    slidesMap.set(currentSlideId, currentSlide)
    return slidesMap
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
        case PresentationTypes.SET_BACKGROUND:
            return {
                ...state,
                slidesMap: setBackgroundCurrentSlide(action.payload, state.slidesMap, state.currentSlideId),
            }
        case PresentationTypes.SET_CURRENT_SLIDE:
            return {
                ...state,
                currentSlideId: action.payload,
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_BOLDED:
            return {
                ...state,
                slidesMap: setStyleCurrentSlideObjects(
                    state.currentSlideId,
                    state.slidesMap,
                    action.payload.selectedObjectIds,
                    'bold',
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_ITALIC:
            return {
                ...state,
                slidesMap: setStyleCurrentSlideObjects(
                    state.currentSlideId,
                    state.slidesMap,
                    action.payload.selectedObjectIds,
                    'italic',
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_UNDERLINED:
            return {
                ...state,
                slidesMap: setStyleCurrentSlideObjects(
                    state.currentSlideId,
                    state.slidesMap,
                    action.payload.selectedObjectIds,
                    'underlined',
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_FONT_COLOR:
            return {
                ...state,
                slidesMap: setStyleCurrentSlideObjects(
                    state.currentSlideId,
                    state.slidesMap,
                    action.payload.selectedObjectIds,
                    'fontColor',
                    action.payload.color,
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_FONT_SIZE:
            return {
                ...state,
                slidesMap: setStyleCurrentSlideObjects(
                    state.currentSlideId,
                    state.slidesMap,
                    action.payload.selectedObjectIds,
                    'fontSize',
                    '',
                    action.payload.size,
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_FONT_FAMILY:
            return {
                ...state,
                slidesMap: setStyleCurrentSlideObjects(
                    state.currentSlideId,
                    state.slidesMap,
                    action.payload.selectedObjectIds,
                    'fontFamily',
                    action.payload.family,
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_BORDER_WIDTH:
            return {
                ...state,
                slidesMap: setStyleCurrentSlideObjects(
                    state.currentSlideId,
                    state.slidesMap,
                    action.payload.selectedObjectIds,
                    'borderWidth',
                    '',
                    action.payload.width,
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_BORDER_STYLE:
            return {
                ...state,
                slidesMap: setStyleCurrentSlideObjects(
                    state.currentSlideId,
                    state.slidesMap,
                    action.payload.selectedObjectIds,
                    'borderStyle',
                    action.payload.style,
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_BORDER_COLOR:
            return {
                ...state,
                slidesMap: setStyleCurrentSlideObjects(
                    state.currentSlideId,
                    state.slidesMap,
                    action.payload.selectedObjectIds,
                    'borderColor',
                    action.payload.color,
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_COLOR:
            return {
                ...state,
                slidesMap: setStyleCurrentSlideObjects(
                    state.currentSlideId,
                    state.slidesMap,
                    action.payload.selectedObjectIds,
                    'objectColor',
                    action.payload.color,
                ),
            }
        case PresentationTypes.SET_SLIDE_OBJECTS_ROTATION:
            return {
                ...state,
                slidesMap: setStyleCurrentSlideObjects(
                    state.currentSlideId,
                    state.slidesMap,
                    action.payload.selectedObjectIds,
                    'rotation',
                    '',
                    action.payload.degrees,
                ),
            }
        case PresentationTypes.SET_SLIDES_ORDER:
            return {
                ...state,
                slidesOrder: action.payload,
            }
        default:
            return state
    }
}
export default slidesReducer
