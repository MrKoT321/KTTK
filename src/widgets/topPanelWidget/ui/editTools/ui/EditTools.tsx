import styles from './EditTools.module.css'
import { EditInputButton } from './editInputButton/EditInputButton'
import boldTextIcon from '../../../../../shared/icons/boldTextIcon.svg'
import italicTextIcon from '../../../../../shared/icons/italicTextIcon.svg'
import underlineTextIcon from '../../../../../shared/icons/underlineTextIcon.svg'
import { ChangeTextDecorationSetupButton } from './changeTextDecorationSetupButton'
import { ChangeColorButton } from './changeColorButton'
import { useAppSelector } from '../../../../../shared/redux/store'
import { defaultCurrentSlide } from '../../../../../shared/tools/defaultCurrentSlide'
import { InputField } from './inputField/InputField'

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

    const isSelectedLineObjectOnly = () => {
        let isLineObjectOnly = false
        for (const object of currentSlide.objects) {
            if (selectedObjectIds.includes(object.id)) {
                if (object.oType === 'ObjectShapeType' && object.type === 'line') {
                    isLineObjectOnly = true
                } else {
                    return false
                }
            }
        }
        return isLineObjectOnly
    }
    const isLineObjectOnlySelected = isSelectedLineObjectOnly()

    return (
        <div className={styles.editTools}>
            {isTextObjectSelected && (
                <>
                    <EditInputButton type={'font'} />
                    <EditInputButton type={'fontSize'} />
                    <ChangeTextDecorationSetupButton imageSrc={boldTextIcon} type={'bold'} />
                    <ChangeTextDecorationSetupButton imageSrc={italicTextIcon} type={'italic'} />
                    <ChangeTextDecorationSetupButton imageSrc={underlineTextIcon} type={'underline'} />
                    <ChangeColorButton type={'textColor'} />
                </>
            )}
            {isLineObjectOnlySelected && (
                <>
                    <EditInputButton type={'borderWidth'} />
                    <ChangeColorButton type={'objectColor'} />
                    <InputField />
                </>
            )}
            {isObjectSelected && !isLineObjectOnlySelected && (
                <>
                    <EditInputButton type={'borderWidth'} />
                    <EditInputButton type={'borderStyle'} />
                    <ChangeColorButton type={'borderColor'} />
                    <ChangeColorButton type={'objectColor'} />
                    <InputField />
                </>
            )}
        </div>
    )
}
export { EditTools }
