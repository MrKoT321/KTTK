import { EditorWidget } from '../../../widgets/editorWidget'
import { minEditor } from '../../../shared/types/testData'

const PresentationMaker = () => (
    <EditorWidget document={minEditor.document} selected={minEditor.selected} />
)

export { PresentationMaker }
