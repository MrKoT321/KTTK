import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import styles from './EditorWidget.module.css'
import { Editor } from '../../../shared/types/types'

const EditorWidget = ({ document, selected }: Editor) => (
    <div>
        <TopPanelWidget />
        <div className={styles.mainContent}>
            <SideBarWidget slides={document.slides} />
            <WorkSpaceWidget slides={document.slides} selected={selected} />
        </div>
    </div>
)

export { EditorWidget }
