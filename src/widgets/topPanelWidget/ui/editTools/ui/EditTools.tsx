import styles from './EditTools.module.css'
import { EditInputButton } from './editInputButton/EditInputButton'
import boldTextIcon from '../../../../../shared/icons/boldTextIcon.svg'
import italicTextIcon from '../../../../../shared/icons/italicTextIcon.svg'
import underlineTextIcon from '../../../../../shared/icons/underlineTextIcon.svg'
import { ChangeTextDecorationSetupButton } from './changeTextDecorationSetupButton'
import { ChangeTextColorButton } from './changeTextColorButton'

const EditTools = () => (
    <div className={styles.editTools}>
        <EditInputButton type={'font'} />
        <EditInputButton type={'fontSize'} />
        <ChangeTextDecorationSetupButton imageSrc={boldTextIcon} type={'bold'} />
        <ChangeTextDecorationSetupButton imageSrc={italicTextIcon} type={'italic'} />
        <ChangeTextDecorationSetupButton imageSrc={underlineTextIcon} type={'underline'} />
        <ChangeTextColorButton />
        <EditInputButton type={'borderWidth'} />
    </div>
)

export { EditTools }
