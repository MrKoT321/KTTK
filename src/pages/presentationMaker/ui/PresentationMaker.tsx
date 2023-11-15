import { Editor } from '../../../shared/types/types'
import { EditorWidget } from '../../../widgets/editorWidget'

const defaultEditor: Editor = {
    document: {
        name: 'Name',
        slides: [
            {
                id: 1,
                background: 'color',
                backgroundValue: '#FFFFFF',
                objects: [],
            },
        ],
    },
    selected: {
        slidesIds: [1],
        objectsIds: [],
    },
}

const PresentationMaker = () => (
    <EditorWidget
        document={defaultEditor.document}
        selected={defaultEditor.selected}
    />
)

export { PresentationMaker }
