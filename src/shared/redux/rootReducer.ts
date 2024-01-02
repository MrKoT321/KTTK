import { combineReducers } from 'redux'
import presentationNameReducer from '../../widgets/topPanelWidget/ui/presentationName/model/presentationNameReducer'
import slidesReducer from '../../widgets/model/slidesReducer'
import selectedReducer from '../../widgets/model/selectedReducer'
import mouseStateReducer from '../../widgets/model/mouseStatesReducer'

const rootReducer = combineReducers({
    presentationName: presentationNameReducer,
    slides: slidesReducer,
    selected: selectedReducer,
    mouseState: mouseStateReducer,
})

export { rootReducer }
