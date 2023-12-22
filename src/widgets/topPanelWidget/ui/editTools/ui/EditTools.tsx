import styles from './EditTools.module.css'
import { EditInputButton } from '../../../../../shared/ui/editInputButton/EditInputButton'
import { EditImgButton } from '../../../../../shared/ui/editImgButton/EditImgButton'
import addCircleIcon from '../../../../../shared/icons/addShapeIcon.svg'

const EditTools = () => (
    <div className={styles.editTools}>
        <EditInputButton />
        <EditImgButton src={addCircleIcon} />
        <EditImgButton src={addCircleIcon} />
        <EditImgButton src={addCircleIcon} />
        <EditImgButton src={addCircleIcon} />
        <EditImgButton src={addCircleIcon} />
    </div>
)

export { EditTools }
