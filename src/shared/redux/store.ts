import { bindActionCreators, createStore } from 'redux'
import { rootReducer } from './rootReducer'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import * as PresentationActionCreator from './actionCreators'

type RootState = ReturnType<typeof rootReducer>
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const useAppActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(PresentationActionCreator, dispatch)
}
const store = createStore(rootReducer)

export { useAppSelector, useAppActions, store }
