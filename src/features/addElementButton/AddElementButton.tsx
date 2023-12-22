import styles from './AddElementButton.module.css'

type AddElementButtonProps = {
    icon: string
    onClick(): void
    label?: string
}

const AddElementButton = ({ icon, onClick, label }: AddElementButtonProps) => {
    return (
        <label
            className={label === undefined ? styles.button_withoutText : styles.button_withText}
            onClick={() => {
                onClick()
            }}
        >
            <img src={icon} className={styles.image} />
            <span className={label === undefined ? styles.hidden : styles.text}>{label}</span>
        </label>
    )
}

export { AddElementButton }
