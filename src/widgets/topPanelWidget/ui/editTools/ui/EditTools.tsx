import styles from './EditTools.module.css'
import { EditInputButton } from './editInputButton/EditInputButton'
import boldTextIcon from '../../../../../shared/icons/boldTextIcon.svg'
import italicTextIcon from '../../../../../shared/icons/italicTextIcon.svg'
import underlineTextIcon from '../../../../../shared/icons/underlineTextIcon.svg'
import { ChangeTextDecorationSetupButton } from './changeTextDecorationSetupButton'
import { ChangeTextColorButton } from './changeTextColorButton'
import { useAppSelector } from '../../../../../shared/redux/store'
import { defaultCurrentSlide } from '../../../../../shared/tools/defaultCurrentSlide'

const EditTools = () => {
    const { slidesMap, currentSlideId } = useAppSelector((state) => state.slides)
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide

    const isObjectSelected = selectedObjectIds.length !== 0
    const isSelectedTextObject = () => {
        for (const object of currentSlide.objects) {
            if (object.oType === 'ObjectTextType' && selectedObjectIds.includes(object.id)) {
                return true
            }
        }
        return false
    }
    const isTextObjectSelected = isSelectedTextObject()

    return (
        <div className={styles.editTools}>
            {isTextObjectSelected && (
                <>
                    <EditInputButton type={'font'} />
                    <EditInputButton type={'fontSize'} />
                    <ChangeTextDecorationSetupButton imageSrc={boldTextIcon} type={'bold'} />
                    <ChangeTextDecorationSetupButton imageSrc={italicTextIcon} type={'italic'} />
                    <ChangeTextDecorationSetupButton imageSrc={underlineTextIcon} type={'underline'} />
                    <ChangeTextColorButton type={'textColor'} />
                </>
            )}
            {isObjectSelected && (
                <>
                    <EditInputButton type={'borderWidth'} />
                    <EditInputButton type={'borderStyle'} />
                    <ChangeTextColorButton type={'borderColor'} />
                </>
            )}
        </div>
    )
}
export { EditTools }
