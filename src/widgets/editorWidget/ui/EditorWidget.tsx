import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import styles from './EditorWidget.module.css'
import { Doc, Editor, Selected } from '../../../shared/types/types'
import { useState } from 'react'

// type EditorProps = {
//     presentation: Editor
//     setPresentation: (presentation: Editor) => void
// }

type EditorProps = {
    document: Doc
    selected: Selected
}

const EditorWidget = ({ document, selected }: EditorProps) => {
    const [sel, setSel] = useState(selected)
    const [slides, setSlides] = useState(document.slides)
    const [presentationName, setPresentationName] = useState(document.name)
    const toolMenuTools = {
        setSlides: setSlides,
        slides: slides,
        selected: sel,
    }
    const presentationNameTools = {
        setName: setPresentationName,
        name: presentationName,
    }

    return (
        <div>
            <TopPanelWidget
                toolMenuTools={toolMenuTools}
                presentationNameTools={presentationNameTools}
            />
            <div className={styles.mainContent}>
                <SideBarWidget
                    slides={slides}
                    selected={sel}
                    setSelected={setSel}
                />
                <WorkSpaceWidget slides={slides} selected={sel} />
            </div>
        </div>
    )
}

export { EditorWidget }
