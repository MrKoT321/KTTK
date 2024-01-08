import { TopPanelWidget } from '../../../widgets/topPanelWidget'
import { SideBarWidget } from '../../../widgets/sideBarWidget'
import { WorkSpaceWidget } from '../../../widgets/workSpaceWidget'
import { Layout } from '../../../widgets/layoutWidget'

const PresentationMaker = () => (
    <Layout topPanel={<TopPanelWidget />} sideBar={<SideBarWidget />} workSpace={<WorkSpaceWidget />} footer={<></>} />
)

export { PresentationMaker }
