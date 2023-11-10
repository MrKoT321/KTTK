import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import styles from './EditorWidget.module.css'
import { Editor } from '../../../shared/types/types'

const EditorWidget = (props: Editor) => (
    <div>
        <TopPanelWidget />
        <div className={styles.slides}>
            <SideBarWidget slides={props.document.slides} />
            <WorkSpaceWidget />
        </div>
    </div>
)

export { EditorWidget }
