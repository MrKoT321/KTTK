import { EditorWidget } from './widgets/editorWidget'
import { maxEditor } from './shared/types/testData'

const App = () => (
    <EditorWidget document={maxEditor.document} selected={maxEditor.selected} />
)

export default App
