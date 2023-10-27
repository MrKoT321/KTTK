import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import styles from './EditorWidget.module.css'

const EditorWidget = () => (
    <div>
        <TopPanelWidget />
        <div className={styles.slides}>
            <SideBarWidget />
            <WorkSpaceWidget />
        </div>
    </div>
)

export { EditorWidget }
