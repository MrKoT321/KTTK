import styles from './InputField.module.css'
import { SlideType } from '../../../../../../shared/types/types'
import { useAppActions, useAppSelector } from '../../../../../../shared/redux/store'
import { defaultCurrentSlide } from '../../../../../../shared/tools/defaultCurrentSlide'

const InputField = () => {
    const { slidesMap, currentSlideId } = useAppSelector((state) => state.slides)
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const { setSlideObjectsRotation } = useAppActions()
    const getSelectedObjectsCommonRotation = (currentSlide: SlideType, selectedObjectIds: number[]) => {
        const emptyRotation = 0
        let commonRotation = emptyRotation
        for (const object of currentSlide.objects) {
            if (selectedObjectIds.includes(object.id)) {
                if (commonRotation == emptyRotation) {
                    commonRotation = object.rotate
                } else if (commonRotation != object.rotate) {
                    return emptyRotation
                }
            }
        }
        return commonRotation == emptyRotation ? emptyRotation : commonRotation
    }

    return (
        <div>
            <input
                className={styles.rotationInput}
                type={'number'}
                min={0}
                max={359}
                value={getSelectedObjectsCommonRotation(currentSlide, selectedObjectIds)}
                onChange={(e) => setSlideObjectsRotation(Number(e.target.value), selectedObjectIds)}
            />
        </div>
    )
}

export { InputField }
