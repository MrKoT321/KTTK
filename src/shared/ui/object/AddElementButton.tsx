import styles from './AddElementButton.module.css'

type AddElementButtonProps = {
    icon: string
    onClick(): void
}

const AddElementButton = ({ icon, onClick }: AddElementButtonProps) => {
    // const styleObj = {
    //     background: icon,
    // }

    return (
        <button
            // style={styleObj}
            onClick={() => {
                onClick()
            }}
        >
            <img src={icon} className={styles.image} />
        </button>
    )
}

export { AddElementButton }
