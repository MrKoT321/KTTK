import { createStore } from 'redux'

const rootReducer = combineReducers({
    title: titleReducer,
    slides: slidesReducer,
})

let store = createStore(rootReducer)
store.getState()

export { store }
