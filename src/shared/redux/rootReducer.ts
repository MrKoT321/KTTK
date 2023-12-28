import { combineReducers } from 'redux'
import presentationNameReducer from '../../widgets/presentationNameWidget/model/presentationNameReducer'

const rootReducer = combineReducers({
    presentationName: presentationNameReducer,
})

export { rootReducer }
