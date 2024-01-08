import { combineReducers } from 'redux'
import presentationNameReducer from '../../widgets/topPanelWidget/ui/presentationName/model/presentationNameReducer'
import slidesReducer from '../../widgets/model/slidesReduser'
import selectedReducer from '../../widgets/model/selectedReducer'
import editObjectReducer from 'widgets/model/editObjectReduser'

const rootReducer = combineReducers({
    presentationName: presentationNameReducer,
    slides: slidesReducer,
    selected: selectedReducer,
    editObject: editObjectReducer,
})

export { rootReducer }
