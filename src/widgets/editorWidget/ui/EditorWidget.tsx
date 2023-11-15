import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import styles from './EditorWidget.module.css'
import { Editor } from '../../../shared/types/types'
import { useState } from 'react'

const EditorWidget = ({ document, selected }: Editor) => {
    const [sel, setSel] = useState(selected)

    return (
        <div>
            <TopPanelWidget />
            <div className={styles.mainContent}>
                <SideBarWidget
                    slides={document.slides}
                    selected={sel}
                    setSelected={setSel}
                />
                <WorkSpaceWidget slides={document.slides} selected={sel} />
            </div>
        </div>
    )
}

export { EditorWidget }
