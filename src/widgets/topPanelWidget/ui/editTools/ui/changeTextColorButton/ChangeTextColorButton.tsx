import styles from './ChangeTextColorButton.module.css'
import { useAppActions, useAppSelector } from '../../../../../../shared/redux/store'
import { SlideType } from '../../../../../../shared/types/types'
import { defaultCurrentSlide } from '../../../../../../shared/defaultCurrentSlide'

type ColorButtonTypes = {
    type: 'textColor' | 'borderColor'
}
const ChangeTextColorButton = ({ type }: ColorButtonTypes) => {
    const { slidesMap, currentSlideId } = useAppSelector((state) => state.slides)

    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const { setTextObjectFontColor, setSlideObjectsBorderColor } = useAppActions()
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide

    const getSelectedObjectsCommonFontColor = (currentSlide: SlideType, selectedObjectIds: number[]) => {
        const defaultFontColor = '#000000'
        let commonFontColor = defaultFontColor
        for (const object of currentSlide.objects) {
            if (object.oType == 'ObjectTextType' && selectedObjectIds.includes(object.id)) {
                if (commonFontColor == defaultFontColor) {
                    commonFontColor = object.fontColor
                } else if (commonFontColor != object.fontColor) {
                    return defaultFontColor
                }
            }
        }
        return commonFontColor == defaultFontColor ? defaultFontColor : commonFontColor
    }

    const getSelectedObjectsCommonBorderColor = (currentSlide: SlideType, selectedObjectIds: number[]) => {
        const defaultBorderColor = '#000000'
        let commonBorderColor = defaultBorderColor
        for (const object of currentSlide.objects) {
            if (object.oType == 'ObjectTextType' && selectedObjectIds.includes(object.id)) {
                if (commonBorderColor == defaultBorderColor) {
                    commonBorderColor = object.borderColor
                } else if (commonBorderColor != object.borderColor) {
                    return defaultBorderColor
                }
            }
        }
        return commonBorderColor == defaultBorderColor ? defaultBorderColor : commonBorderColor
    }

    return (
        <>
            {type === 'textColor' && (
                <input
                    className={styles.button}
                    type={'color'}
                    value={getSelectedObjectsCommonFontColor(currentSlide, selectedObjectIds)}
                    onChange={(event) => {
                        setTextObjectFontColor(event.target.value, selectedObjectIds)
                    }}
                />
            )}

            {type === 'borderColor' && (
                <input
                    className={styles.button}
                    type={'color'}
                    value={getSelectedObjectsCommonBorderColor(currentSlide, selectedObjectIds)}
                    onChange={(event) => {
                        setSlideObjectsBorderColor(event.target.value, selectedObjectIds)
                    }}
                />
            )}
        </>
    )
}

export { ChangeTextColorButton }
