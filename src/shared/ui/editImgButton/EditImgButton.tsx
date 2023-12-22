import styles from './EditImgButton.module.css'

type EditImgButtonType = {
    src: string
}

const EditImgButton = ({ src }: EditImgButtonType) => (
    <label className={styles.editImgButton}>
        <img src={src} className={styles.image} />
    </label>
)

export { EditImgButton }
