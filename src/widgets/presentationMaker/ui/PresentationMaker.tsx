import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import styles from './PresentationMaker.module.css'
import { useEffect, useState } from 'react'
import { Editor, MouseStates } from '../../../shared/types/types'
import { minEditor } from '../../../shared/types/testData'

const PresentationMaker = () => {
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

    return (
        <div>
            <TopPanelWidget
                toolMenuTools={toolMenuTools}
                presentationNameTools={presentationNameTools}
                setMouseState={setMouseState}
                presentationsObjTools={presentationsObjTools}
            />
            <div className={styles.mainContent}>
                <SideBarWidget slides={slides} selected={sel} setSelected={setSel} setSlides={setSlides} />
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

export { PresentationMaker }
