import { WorkSlide } from '../../workSlide'
import styles from './WorkSpaceWidget.module.css'

const WorkSpaceWidget = () => (
    <div className={styles.workSpace}>
        <WorkSlide />
    </div>
)

export { WorkSpaceWidget }
