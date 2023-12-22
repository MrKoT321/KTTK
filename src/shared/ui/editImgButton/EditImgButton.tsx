import styles from './EditImgButton.module.css'

type EditInputStyleType = 'bold' | 'italic' | 'underline'

type EditImgButtonType = {
    src: string
    type: EditInputStyleType
    editTools: {
        bolded: boolean
        setBolded: (bolded: boolean) => void
        italic: boolean
        setItalic: (italic: boolean) => void
        underlined: boolean
        setUnderlined: (underlined: boolean) => void
    }
}

const EditImgButton = ({ src, type, editTools }: EditImgButtonType) => (
    <>
        {type === 'bold' && (
            <label
                className={styles.editImgButton}
                onClick={(e) => {
                    editTools.setBolded(!editTools.bolded)
                }}
            >
                <img src={src} className={styles.image} />
            </label>
        )}
        {type === 'italic' && (
            <label
                className={styles.editImgButton}
                onClick={(e) => {
                    editTools.setItalic(!editTools.italic)
                }}
            >
                <img src={src} className={styles.image} />
            </label>
        )}
        {type === 'underline' && (
            <label
                className={styles.editImgButton}
                onClick={(e) => {
                    editTools.setUnderlined(!editTools.underlined)
                }}
            >
                <img src={src} className={styles.image} />
            </label>
        )}
    </>
)

export { EditImgButton }
