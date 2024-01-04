import styles from './EditImgButton.module.css'
import { useAppActions, useAppSelector } from '../../redux/store'
import { SlideType } from '../../types/types'

type EditInputStyleType = 'bold' | 'italic' | 'underline' | 'textColor'

type EditImgButtonType = {
    src?: string
    type: EditInputStyleType
}

const EditImgButton = ({ src, type }: EditImgButtonType) => {
    const currentSlide = useAppSelector((state) => state.slides.currentSlide)
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const { setTextObjectsBolded, setTextObjectsItalic, setTextObjectsUnderlined, setTextObjectFontColor } =
        useAppActions()

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

    return (
        <>
            {type === 'bold' && (
                <label
                    className={styles.editImgButton}
                    onClick={() => {
                        setTextObjectsBolded(selectedObjectIds, currentSlide)
                    }}
                >
                    <img src={src} className={styles.image} />
                </label>
            )}
            {type === 'italic' && (
                <label
                    className={styles.editImgButton}
                    onClick={() => {
                        setTextObjectsItalic(selectedObjectIds, currentSlide)
                    }}
                >
                    <img src={src} className={styles.image} />
                </label>
            )}
            {type === 'underline' && (
                <label
                    className={styles.editImgButton}
                    onClick={() => {
                        setTextObjectsUnderlined(selectedObjectIds, currentSlide)
                    }}
                >
                    <img src={src} className={styles.image} />
                </label>
            )}
            {type === 'textColor' && (
                <input
                    className={styles.editImgButton}
                    type={'color'}
                    // value={textColor}
                    value={getSelectedObjectsCommonFontColor(currentSlide, selectedObjectIds)}
                    onChange={(event) => {
                        setTextObjectFontColor(event.target.value, selectedObjectIds, currentSlide)
                        // setTextColor(event.target.value)
                    }}
                />
            )}
        </>
    )
}

export { EditImgButton }
