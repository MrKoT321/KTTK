import styles from './EditInputButton.module.css'
import { useAppActions, useAppSelector } from '../../../../../../shared/redux/store'
import { SlideType } from '../../../../../../shared/types/types'
import { defaultCurrentSlide } from '../../../../../../shared/defaultCurrentSlide'

type EditInputType = 'font' | 'fontSize'

type EditInputButtonProps = {
    type: EditInputType
}

const EditInputButton = ({ type }: EditInputButtonProps) => {
    const { slidesMap, currentSlideId } = useAppSelector((state) => state.slides)
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const { setTextObjectFontSize, setTextObjectFontFamily } = useAppActions()
    const availableFonts = ['FuturaPT', 'Arial', 'Times New Roman', 'Comic Sans MS']
    const availableFontsSizes = [10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80]

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

    // let textFontFamily = getSelectedObjectsCommonFontFamily(currentSlide, selectedObjectIds)
    // let textFontSize = getSelectedObjectsCommonFontSize(currentSlide, selectedObjectIds)
    // useEffect(() => {
    //     textFontFamily = getSelectedObjectsCommonFontFamily(currentSlide, selectedObjectIds)
    //     textFontSize = getSelectedObjectsCommonFontSize(currentSlide, selectedObjectIds)
    // }, [selectedObjectIds])

    return (
        <div className={styles.editInputButton}>
            {type === 'font' && (
                <select
                    value={getSelectedObjectsCommonFontFamily(currentSlide, selectedObjectIds)}
                    className={styles.fontFamily}
                    onChange={(e) => setTextObjectFontFamily(e.target.value, selectedObjectIds, currentSlide)}
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
                    onChange={(e) => setTextObjectFontSize(parseInt(e.target.value), selectedObjectIds, currentSlide)}
                >
                    {availableFontsSizes.map((fontSize, index) => (
                        <option key={index} value={fontSize}>
                            {fontSize}
                        </option>
                    ))}
                    <option key={0} value={0} hidden={true}></option>
                </select>
            )}
        </div>
    )
}

export { EditInputButton }
