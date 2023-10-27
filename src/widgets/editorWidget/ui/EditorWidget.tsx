import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'

const EditorWidget = () => (
    <div>
        <TopPanelWidget />
        <div>
            <SideBarWidget />
            <WorkSpaceWidget />
        </div>
    </div>
)

export { EditorWidget }
