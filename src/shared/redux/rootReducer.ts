import { combineReducers } from 'redux'
import presentationNameReducer from '../../widgets/topPanelWidget/ui/presentationName/model/presentationNameReducer'
import selectImagePopUpReducer from '../../features/selectImagePopUp/model/selectImagePopUpReducer'
import slidesReducer from '../model/slidesReduser'
import selectedReducer from '../model/selectedReducer'
import editObjectReducer from '../model/editObjectReduser'
import mouseReducer from '../model/mouseReducer'

const rootReducer = combineReducers({
    presentationName: presentationNameReducer,
    slides: slidesReducer,
    selected: selectedReducer,
    imagePopUp: selectImagePopUpReducer,
    editObject: editObjectReducer,
    mouse: mouseReducer,
})

export { rootReducer }
