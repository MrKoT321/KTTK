import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import styles from './EditorWidget.module.css'
import { Editor } from '../../../shared/types/types'
import { useState } from 'react'

const EditorWidget = ({ document, selected }: Editor) => {
    const [sel, setSel] = useState(selected)
    const [slides, setSlides] = useState(document.slides)

    return (
        <div>
            <TopPanelWidget
                setSlides={setSlides}
                slides={slides}
                selected={sel}
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
