import { Editor } from '../../../shared/types/types'
import { EditorWidget } from '../../../widgets/editorWidget'
import { useState } from 'react'

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

const PresentationMaker = () => {
    const [presentation, setPresentation] = useState<Editor>()
    //TODO: нужно доделать передачу в пропсах из PresentationMaker в конечные компоненты меню

    return (
        <EditorWidget
            document={defaultEditor.document}
            selected={defaultEditor.selected}
        />
    )
}

export { PresentationMaker }
