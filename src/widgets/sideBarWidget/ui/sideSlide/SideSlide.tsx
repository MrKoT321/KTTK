import styles from './SideSlide.module.css'
import { SlideType } from '../../../../shared/types/types'
import { Object } from '../../../../shared/ui/object'

const SideSlide = ({ objects }: SlideType) => (
    <div className={styles.sideSlide}>
        <div className={styles.container}>
            <div className={styles.content}>
                {objects.map((object, index) => (
                    <Object key={index} object={object} />
                ))}
            </div>
        </div>
    </div>
)

export { SideSlide }
