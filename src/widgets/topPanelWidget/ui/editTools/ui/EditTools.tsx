import styles from './EditTools.module.css'
import { EditInputButton } from '../../../../../shared/ui/editInputButton/EditInputButton'
import { EditImgButton } from '../../../../../shared/ui/editImgButton/EditImgButton'
import boldTextIcon from '../../../../../shared/icons/boldTextIcon.svg'
import italicTextIcon from '../../../../../shared/icons/italicTextIcon.svg'
import underlineTextIcon from '../../../../../shared/icons/underlineTextIcon.svg'

type EditToolsProps = {
    editTools: {
        selectedTextFonts: string
        setSelectedTextFonts: (selectedTextFonts: string) => void
        selectedTextSize: number
        setSelectedTextSize: (selectedTextSize: number) => void
        bolded: boolean
        setBolded: (bolded: boolean) => void
        italic: boolean
        setItalic: (italic: boolean) => void
        underlined: boolean
        setUnderlined: (underlined: boolean) => void
        textColor: string
        setTextColor: (textColor: string) => void
    }
}

const EditTools = ({ editTools }: EditToolsProps) => (
    <div className={styles.editTools}>
        <EditInputButton editTools={editTools} type={'font'} />
        <EditInputButton editTools={editTools} type={'fontSize'} />
        <EditImgButton editTools={editTools} src={boldTextIcon} type={'bold'} />
        <EditImgButton editTools={editTools} src={italicTextIcon} type={'italic'} />
        <EditImgButton editTools={editTools} src={underlineTextIcon} type={'underline'} />
        <EditImgButton editTools={editTools} type={'textColor'} />
        {/*<EditImgButton src={addCircleIcon} />*/}
    </div>
)

export { EditTools }
