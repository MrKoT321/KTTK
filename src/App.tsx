import { EditorWidget } from './widgets/editorWidget'
import { minEditor } from '../src/shared/testData'

const App = () => (
    <EditorWidget document={minEditor.document} selected={minEditor.selected} />
)

export default App
