import styles from './AddElementButton.module.css'

type AddElementButtonProps = {
    icon: string
    onClickChange(): void
}

const AddElementButton = ({ icon, onClickChange }: AddElementButtonProps) => {
    // const styleObj = {
    //     background: icon,
    // }

    return (
        <button
            // style={styleObj}
            onClick={() => {
                onClickChange()
            }}
        >
            <img src={icon} className={styles.image} />
        </button>
    )
}

export { AddElementButton }
