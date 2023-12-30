import styles from './EditImgButton.module.css'
import { useAppActions, useAppSelector } from '../../redux/store'
import { setTextObjectsBolded, setTextObjectsItalic } from '../../redux/actionCreators'

type EditInputStyleType = 'bold' | 'italic' | 'underline' | 'textColor'

type EditImgButtonType = {
    src?: string
    type: EditInputStyleType
    editTools: {
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

const EditImgButton = ({ src, type }: EditImgButtonType) => {
    const selectedItems = useAppSelector((state) => state.selected.selectedObjectIds)
    const { setTextObjectsBolded, setTextObjectsItalic, setTextObjectsUnderlined, setTextObjectColor } = useAppActions()
    console.log(selectedItems)
    return (
        <>
            {type === 'bold' && (
                <label
                    className={styles.editImgButton}
                    onClick={() => {
                        setTextObjectsBolded(selectedItems)
                    }}
                >
                    <img src={src} className={styles.image} />
                </label>
            )}
            {type === 'italic' && (
                <label
                    className={styles.editImgButton}
                    onClick={() => {
                        setTextObjectsItalic(selectedItems)
                    }}
                >
                    <img src={src} className={styles.image} />
                </label>
            )}
            {type === 'underline' && (
                <label
                    className={styles.editImgButton}
                    onClick={() => {
                        // setTextObjectsUnderlined(!underlined)
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
                    onChange={(event) => {
                        // setTextObjectColor(event.target.value)
                    }}
                />
            )}
        </>
    )
}

export { EditImgButton }
