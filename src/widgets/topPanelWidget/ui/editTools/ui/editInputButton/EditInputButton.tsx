import styles from './EditInputButton.module.css'
import { useAppActions, useAppSelector } from '../../../../../../shared/redux/store'
import { SlideType } from '../../../../../../shared/types/types'
import { defaultCurrentSlide } from '../../../../../../shared/defaultCurrentSlide'

type EditInputType = 'font' | 'fontSize' | 'borderWidth' | 'borderStyle'

type EditInputButtonProps = {
    type: EditInputType
}

const EditInputButton = ({ type }: EditInputButtonProps) => {
    const { slidesMap, currentSlideId } = useAppSelector((state) => state.slides)
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const { setTextObjectFontSize, setTextObjectFontFamily, setSlideObjectsBorderWidth, setSlideObjectsBorderStyle } =
        useAppActions()
    const availableFonts = ['FuturaPT', 'Arial', 'Times New Roman', 'Comic Sans MS']
    const availableFontsSizes = [10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80]
    const availableBorderWidth = [0, 1, 2, 3, 4, 8, 12, 16]

    const getSelectedObjectsCommonFontFamily = (currentSlide: SlideType, selectedObjectIds: number[]) => {
        const emptyFontFamily = ''
        const defaultFontFamily = 'FuturaPT'
        let commonFontFamily = emptyFontFamily
        for (const object of currentSlide.objects) {
            if (object.oType == 'ObjectTextType' && selectedObjectIds.includes(object.id)) {
                if (commonFontFamily == emptyFontFamily) {
                    commonFontFamily = object.fontFamily
                } else if (commonFontFamily != object.fontFamily) {
                    return emptyFontFamily
                }
            }
        }
        return commonFontFamily == emptyFontFamily ? defaultFontFamily : commonFontFamily
    }

    const getSelectedObjectsCommonFontSize = (currentSlide: SlideType, selectedObjectIds: number[]) => {
        const emptyFontSize = 0
        const defaultFontSize = 20
        let commonFontSize = emptyFontSize
        for (const object of currentSlide.objects) {
            if (object.oType == 'ObjectTextType' && selectedObjectIds.includes(object.id)) {
                if (commonFontSize == emptyFontSize) {
                    commonFontSize = object.fontSize
                } else if (commonFontSize != object.fontSize) {
                    return emptyFontSize
                }
            }
        }
        return commonFontSize == emptyFontSize ? defaultFontSize : commonFontSize
    }

    const getSelectedObjectsCommonBorderWidth = (currentSlide: SlideType, selectedObjectIds: number[]) => {
        const emptyBorderWidth = 0
        let commonBorderWidth = emptyBorderWidth
        for (const object of currentSlide.objects) {
            if (object.oType == 'ObjectTextType' && selectedObjectIds.includes(object.id)) {
                if (commonBorderWidth == emptyBorderWidth) {
                    commonBorderWidth = object.borderWidth
                } else if (commonBorderWidth != object.borderWidth) {
                    return emptyBorderWidth
                }
            }
        }
        return commonBorderWidth == emptyBorderWidth ? emptyBorderWidth : commonBorderWidth
    }

    return (
        <>
            {type === 'font' && (
                <select
                    value={getSelectedObjectsCommonFontFamily(currentSlide, selectedObjectIds)}
                    className={styles.fontFamily}
                    onChange={(e) => setTextObjectFontFamily(e.target.value, selectedObjectIds)}
                >
                    {availableFonts.map((font, index) => (
                        <option key={index} value={font}>
                            {font}
                        </option>
                    ))}
                    <option key={''} value={''} hidden={true}></option>
                </select>
            )}

            {type === 'fontSize' && (
                <select
                    value={getSelectedObjectsCommonFontSize(currentSlide, selectedObjectIds)}
                    className={styles.fontSize}
                    onChange={(e) => setTextObjectFontSize(parseInt(e.target.value), selectedObjectIds)}
                >
                    {availableFontsSizes.map((fontSize, index) => (
                        <option key={index} value={fontSize}>
                            {fontSize}
                        </option>
                    ))}
                    <option key={0} value={0} hidden={true}></option>
                </select>
            )}

            {type === 'borderWidth' && (
                <select
                    value={getSelectedObjectsCommonBorderWidth(currentSlide, selectedObjectIds)}
                    className={styles.fontSize}
                    onChange={(e) => setSlideObjectsBorderWidth(parseInt(e.target.value), selectedObjectIds)}
                >
                    {availableBorderWidth.map((borderWidth, index) => (
                        <option key={index} value={borderWidth}>
                            {borderWidth}
                        </option>
                    ))}
                </select>
            )}
        </>
    )
}

export { EditInputButton }
