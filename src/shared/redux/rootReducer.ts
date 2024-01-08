import { combineReducers } from 'redux'
import presentationNameReducer from '../../widgets/topPanelWidget/ui/presentationName/model/presentationNameReducer'
import slidesReducer from '../../widgets/model/slidesReduser'
import selectedReducer from '../../widgets/model/selectedReducer'
import editObjectReducer from 'widgets/model/editObjectReduser'
import mouseReducer from 'widgets/model/mouseReducer'
import selectImagePopUpReducer from '../../features/selectImagePopUp/model/selectImagePopUpReducer'

const rootReducer = combineReducers({
    presentationName: presentationNameReducer,
    slides: slidesReducer,
    selected: selectedReducer,
    imagePopUp: selectImagePopUpReducer,
    editObject: editObjectReducer,
    mouse: mouseReducer,
})

export { rootReducer }
