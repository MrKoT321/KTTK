import styles from './EditTools.module.css'
import { EditInputButton } from '../../../../../shared/ui/editInputButton/EditInputButton'
import { EditImgButton } from '../../../../../shared/ui/editImgButton/EditImgButton'
import boldTextIcon from '../../../../../shared/icons/boldTextIcon.svg'
import italicTextIcon from '../../../../../shared/icons/italicTextIcon.svg'
import underlineTextIcon from '../../../../../shared/icons/underlineTextIcon.svg'

const EditTools = () => (
    <div className={styles.editTools}>
        <EditInputButton type={'font'} />
        <EditInputButton type={'fontSize'} />
        <EditImgButton src={boldTextIcon} type={'bold'} />
        <EditImgButton src={italicTextIcon} type={'italic'} />
        <EditImgButton src={underlineTextIcon} type={'underline'} />
        <EditImgButton type={'textColor'} />
        {/*<EditImgButton src={addCircleIcon} />*/}
    </div>
)

export { EditTools }
