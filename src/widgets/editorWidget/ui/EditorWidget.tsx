import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import styles from './EditorWidget.module.css'
import { Editor } from '../../../shared/types/types'
import { useState, createElement } from 'react'

const EditorWidget = ({ document, selected }: Editor) => {
    const [sel, setSel] = useState(selected)
    const [slides, setSlides] = useState(document.slides)
    const save = () => {
        const editor: Editor = { document: document, selected: sel }
        const file = new Blob([JSON.stringify(editor)], {
            type: 'application/json',
        })

        // create element means how block should be changed
        createElement('a', {
            id: 'save',
            className: 'hidden',
            href: URL.createObjectURL(file),
            download: document.name,
        })
    }

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
