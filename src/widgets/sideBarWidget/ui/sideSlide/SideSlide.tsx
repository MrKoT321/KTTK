import styles from './SideSlide.module.css'
import { SlideType } from '../../../../shared/types/types'

const SideSlide = (props: SlideType) => (
    <div className={styles.sideSlide}>
        <div className={styles.sideSlideContent}></div>
    </div>
)

export { SideSlide }
