import styles from './ChangeColorButton.module.css'
import { useAppActions, useAppSelector } from '../../../../../../shared/redux/store'
import { SlideType } from '../../../../../../shared/types/types'
import { defaultCurrentSlide } from '../../../../../../shared/tools/defaultCurrentSlide'

type ColorButtonTypes = {
    type: 'textColor' | 'borderColor' | 'shapeColor'
}
const ChangeColorButton = ({ type }: ColorButtonTypes) => {
    const { slidesMap, currentSlideId } = useAppSelector((state) => state.slides)

    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const { setTextObjectFontColor, setSlideObjectsBorderColor, setSlideShapeObjectsColor } = useAppActions()
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
            if (selectedObjectIds.includes(object.id)) {
                if (commonBorderColor == defaultBorderColor) {
                    commonBorderColor = object.borderColor
                } else if (commonBorderColor != object.borderColor) {
                    return defaultBorderColor
                }
            }
        }
        return commonBorderColor == defaultBorderColor ? defaultBorderColor : commonBorderColor
    }

    const getSelectedObjectsCommonShapeColor = (currentSlide: SlideType, selectedObjectIds: number[]) => {
        const defaultShapeColor = '#000000'
        let commonShapeColor = defaultShapeColor
        for (const object of currentSlide.objects) {
            if (object.oType === 'ObjectShapeType' && selectedObjectIds.includes(object.id)) {
                if (commonShapeColor == defaultShapeColor) {
                    commonShapeColor = object.shapeBgColor
                } else if (commonShapeColor != object.shapeBgColor) {
                    return defaultShapeColor
                }
            }
        }
        return commonShapeColor == defaultShapeColor ? defaultShapeColor : commonShapeColor
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

            {type === 'shapeColor' && (
                <input
                    className={styles.button}
                    type={'color'}
                    value={getSelectedObjectsCommonShapeColor(currentSlide, selectedObjectIds)}
                    onChange={(event) => {
                        setSlideShapeObjectsColor(event.target.value, selectedObjectIds)
                    }}
                />
            )}
        </>
    )
}

export { ChangeColorButton }
