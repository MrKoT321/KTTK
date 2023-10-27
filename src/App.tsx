import { EditorWidget } from './widgets/editorWidget'
import { maxEditor } from '../src/shared/testData'

const App = () => (
    <EditorWidget document={maxEditor.document} selected={maxEditor.selected} />
)

export default App
