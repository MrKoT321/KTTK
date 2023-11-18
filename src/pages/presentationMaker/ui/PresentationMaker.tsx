import { EditorWidget } from '../../../widgets/editorWidget'
import { maxEditor } from '../../../shared/types/testData'
import { useState } from 'react'
import { Editor } from '../../../shared/types/types'

const PresentationMaker = () => {
    const [presentation, setPresentation] = useState<Editor>()
    //TODO: нужно доделать передачу в пропсах из PresentationMaker в конечные компоненты меню

    return (
        <EditorWidget
            document={maxEditor.document}
            selected={maxEditor.selected}
        />
    )
}

export { PresentationMaker }
