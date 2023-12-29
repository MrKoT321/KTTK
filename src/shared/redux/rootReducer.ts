import { combineReducers } from 'redux'
import presentationNameReducer from '../../widgets/presentationNameWidget/model/presentationNameReducer'
import slidesReducer from '../../widgets/model/slidesReduser'
import selectedReducer from '../../widgets/model/selectedReducer'

const rootReducer = combineReducers({
    presentationName: presentationNameReducer,
    slides: slidesReducer,
    selected: selectedReducer,
})

export { rootReducer }
