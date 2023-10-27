import styles from './PresentationName.module.css'
import { Doc } from '../../../shared/types/types'
type PresentationNameProps = {
    name: string
}

const PresentationName = (props: PresentationNameProps) => (
    <div className={styles.presentationName}>
        <input className={styles.presentationNameInput} value={props.name} />
    </div>
)

export { PresentationName }
