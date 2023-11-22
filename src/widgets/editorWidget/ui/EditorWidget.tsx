import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import styles from './EditorWidget.module.css'
import { Doc, Selected } from '../../../shared/types/types'
import { useState } from 'react'

// type EditorProps = {
//     presentation: Editor
//     setPresentation: (presentation: Editor) => void
// }

type EditorProps = {
    document: Doc
    selected: Selected
}

type MouseStates =
    | 'cursor'
    | 'creatingText'
    | 'creatingRect'
    | 'creatingCircle'
    | 'creatingTriangle'

const EditorWidget = ({ document, selected }: EditorProps) => {
    const [sel, setSel] = useState(selected)
    const [slides, setSlides] = useState(document.slides)
    const [presentationName, setPresentationName] = useState(document.name)
    const [mouseState, setMouseState] = useState<MouseStates>('cursor')

    const toolMenuTools = {
        //TODO: разобраться че передавать
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
                setMouseState={setMouseState}
            />
            <div className={styles.mainContent}>
                <SideBarWidget
                    slides={slides}
                    selected={sel}
                    setSelected={setSel}
                />
                <WorkSpaceWidget
                    slides={slides}
                    selected={sel}
                    setSlides={setSlides}
                    mouseState={mouseState}
                    setMouseState={setMouseState}
                />
            </div>
        </div>
    )
}

export { EditorWidget }
export type { MouseStates }
