import { EditorWidget } from '../../../widgets/editorWidget'
import { maxEditor } from '../../../shared/types/testData'

const PresentationMaker = () => (
    <EditorWidget document={maxEditor.document} selected={maxEditor.selected} />
)

export { PresentationMaker }
