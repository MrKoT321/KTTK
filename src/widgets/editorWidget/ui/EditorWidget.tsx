import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import styles from './EditorWidget.module.css'
import { Editor, SlideType } from '../../../shared/types/types'
import { useEffect, useState } from 'react'
import { minEditor } from '../../../shared/types/testData'

const EditorWidget = () => {
    const [presentation, setPresentation] = useState<Editor>(minEditor)
    const [sel, setSel] = useState(presentation.selected)
    const [slides, setSlides] = useState(presentation.document.slides)
    const [presentationName, setPresentationName] = useState(presentation.document.name)
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

    return (
        <div>
            <TopPanelWidget
                toolMenuTools={toolMenuTools}
                presentationNameTools={presentationNameTools}
                presentationsObjTools={presentationsObjTools}
            />
            <div className={styles.mainContent}>
                <SideBarWidget slides={slides} setSlides={setSlides} selected={sel} setSelected={setSel} />
                <WorkSpaceWidget slides={slides} selected={sel} setSelected={setSel} />
            </div>
        </div>
    )
}

export { EditorWidget }
