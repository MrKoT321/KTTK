import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import styles from './EditorWidget.module.css'
import { Editor, SlideType } from '../../../shared/types/types'
import { useEffect, useState } from 'react'
import { minEditor } from '../../../shared/types/testData'

type MouseStates = 'cursor' | 'creatingText' | 'creatingRect' | 'creatingCircle' | 'creatingTriangle'

const EditorWidget = () => {
    const [presentation, setPresentation] = useState<Editor>(minEditor)
    const [sel, setSel] = useState(presentation.selected)
    const [slides, setSlides] = useState(presentation.document.slides)
    const [presentationName, setPresentationName] = useState(presentation.document.name)
    const [mouseState, setMouseState] = useState<MouseStates>('cursor')

    const toolMenuTools = {
        setSlides: setSlides,
        slides: slides,
        selected: sel,
    }
    const presentationNameTools = {
        setName: setPresentationName,
        name: presentationName,
    }
    const presentationsObjTools = {
        setPresentation: setPresentation,
        presentation: presentation,
    }

    useEffect(() => {
        setSel(presentation.selected)
        setSlides(presentation.document.slides)
        setPresentationName(presentation.document.name)
    }, [presentation])

    console.log('sel = ', sel)

    return (
        <div>
            <TopPanelWidget
                toolMenuTools={toolMenuTools}
                presentationNameTools={presentationNameTools}
                setMouseState={setMouseState}
                presentationsObjTools={presentationsObjTools}
            />
            <div className={styles.mainContent}>
                <SideBarWidget
                    slides={slides}
                    setSlides={setSlides}
                    selected={sel}
                    setSelected={setSel}
                />
                <WorkSpaceWidget
                    slides={slides}
                    selected={sel}
                    setSelected={setSel}
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
