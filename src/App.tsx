import { PresentationMaker } from './widgets/presentationMaker/ui'
import { Provider } from 'react-redux'
import { store } from './shared/redux/store'

const App = () => (
    <Provider store={store}>
        <PresentationMaker />
    </Provider>
)

export default App
