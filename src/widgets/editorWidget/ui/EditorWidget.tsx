import { PresentationName } from '../../presentationNameWidget'
import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import styles from './EditorWidget.module.css'
import { minEditor } from '../../../page/testPage/ui/testData'

const EditorWidget = () => (
    <div className={styles.topPanel}>
        <PresentationName name={minEditor.document.name} />
        <TopPanelWidget />
        <div className={styles.slides}>
            <SideBarWidget />
            <WorkSpaceWidget />
        </div>
    </div>
)

export { EditorWidget }
