// import { ActionTypes, PresentationTypes } from '../../shared/redux/actionTypes'
// import { Editor } from '../../shared/types/types'
//
// type SlidesReducerType = {
//     presentation: Editor
// }
//
// const initialState: SlidesReducerType = {
//     presentation: {
//         document: {
//             name: '',
//             slides: [],
//         },
//         selected: {
//             selectedSlideIds: [1],
//         },
//     },
// }
//
// const SlidesReducer = (state = initialState, action: ActionTypes) => {
//     switch (action.type) {
//         case PresentationTypes.ADD_SLIDE:
//             return {
//                 ...state,
//                 slides: [...action.payload],
//             }
//         case PresentationTypes.SET_SLIDES:
//             return {
//                 ...state,
//                 slides: [...action.payload],
//             }
//         case PresentationTypes.SET_CURRENT_SLIDE:
//             return {
//                 ...state,
//                 currentSlide: { ...action.payload },
//             }
//         case PresentationTypes.SET_SLIDE_OBJECTS_BOLDED:
//             return {
//                 ...state,
//                 currentSlide: setStyleCurrentSlideObjects(
//                     { ...action.payload.currentSlide },
//                     [...action.payload.selectedObjectIds],
//                     'bold',
//                 ),
//             }
//         case PresentationTypes.SET_SLIDE_OBJECTS_ITALIC:
//             return {
//                 ...state,
//                 currentSlide: setStyleCurrentSlideObjects(
//                     { ...action.payload.currentSlide },
//                     [...action.payload.selectedObjectIds],
//                     'italic',
//                 ),
//             }
//         case PresentationTypes.SET_SLIDE_OBJECTS_UNDERLINED:
//             return {
//                 ...state,
//                 currentSlide: setStyleCurrentSlideObjects(
//                     { ...action.payload.currentSlide },
//                     [...action.payload.selectedObjectIds],
//                     'underlined',
//                 ),
//             }
//         case PresentationTypes.SET_SLIDE_OBJECTS_FONT_COLOR:
//             return {
//                 ...state,
//                 currentSlide: setStyleCurrentSlideObjects(
//                     { ...action.payload.currentSlide },
//                     [...action.payload.selectedObjectIds],
//                     'fontColor',
//                     action.payload.color,
//                 ),
//             }
//         case PresentationTypes.SET_SLIDE_OBJECTS_FONT_SIZE:
//             return {
//                 ...state,
//                 currentSlide: setStyleCurrentSlideObjects(
//                     { ...action.payload.currentSlide },
//                     [...action.payload.selectedObjectIds],
//                     'fontSize',
//                     '',
//                     action.payload.size,
//                 ),
//             }
//         case PresentationTypes.SET_SLIDE_OBJECTS_FONT_FAMILY:
//             return {
//                 ...state,
//                 currentSlide: setStyleCurrentSlideObjects(
//                     { ...action.payload.currentSlide },
//                     [...action.payload.selectedObjectIds],
//                     'fontFamily',
//                     action.payload.family,
//                 ),
//             }
//         default:
//             return state
//     }
// }
const presentationReduser = () => {
    const i = 9
}
export default presentationReduser
