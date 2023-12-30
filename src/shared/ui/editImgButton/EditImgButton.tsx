import styles from './EditImgButton.module.css'
import { useAppActions, useAppSelector } from '../../redux/store'
import { useState } from 'react'

type EditInputStyleType = 'bold' | 'italic' | 'underline' | 'textColor'

type EditImgButtonType = {
    src?: string
    type: EditInputStyleType
}

const EditImgButton = ({ src, type }: EditImgButtonType) => {
    const [textColor, setTextColor] = useState('#000000')
    const currentSlide = useAppSelector((state) => state.slides.currentSlide)
    const selectedItems = useAppSelector((state) => state.selected.selectedObjectIds)
    const { setTextObjectsBolded, setTextObjectsItalic, setTextObjectsUnderlined, setTextObjectFontColor } =
        useAppActions()
    return (
        <>
            {type === 'bold' && (
                <label
                    className={styles.editImgButton}
                    onClick={() => {
                        setTextObjectsBolded(selectedItems, currentSlide)
                    }}
                >
                    <img src={src} className={styles.image} />
                </label>
            )}
            {type === 'italic' && (
                <label
                    className={styles.editImgButton}
                    onClick={() => {
                        setTextObjectsItalic(selectedItems, currentSlide)
                    }}
                >
                    <img src={src} className={styles.image} />
                </label>
            )}
            {type === 'underline' && (
                <label
                    className={styles.editImgButton}
                    onClick={() => {
                        setTextObjectsUnderlined(selectedItems, currentSlide)
                    }}
                >
                    <img src={src} className={styles.image} />
                </label>
            )}
            {type === 'textColor' && (
                <input
                    className={styles.editImgButton}
                    type={'color'}
                    value={textColor}
                    onChange={(event) => {
                        // setTextObjectFontColor(event.target.value, selectedItems, currentSlide)
                        setTextColor(event.target.value)
                    }}
                />
            )}
        </>
    )
}

export { EditImgButton }
