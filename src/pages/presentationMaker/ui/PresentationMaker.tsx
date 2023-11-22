import styles from './PresentationMaker.module.css'
import { Editor } from '../../../shared/types/types'
import { EditorWidget } from '../../../widgets/editorWidget'
import { maxEditor } from '../../../shared/types/testData'
import { useState } from 'react'

const defaultEditor: Editor = {
    document: {
        name: '',
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

// const PresentationMaker = () => (
//     <EditorWidget document={maxEditor.document} selected={maxEditor.selected} />
// )
const PresentationMaker = () => {
    const [presentation, setPresentation] = useState<Editor>()
    //TODO: нужно доделать передачу в пропсах из PresentationMaker в конечные компоненты меню

    return (
        <div className={styles.editor}>
            <EditorWidget
                document={defaultEditor.document}
                selected={defaultEditor.selected}
            />
        </div>
    )
}

export { PresentationMaker }
