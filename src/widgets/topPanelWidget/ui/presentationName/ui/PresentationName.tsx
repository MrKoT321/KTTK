import styles from './PresentationName.module.css'

type PresentationNameProps = {
    setName(name: string): void
    name: string
}

const PresentationName = ({ setName, name }: PresentationNameProps) => (
    <input
        className={styles.presentationNameInput}
        placeholder={'Назавание презентации'}
        value={name}
        type={'text'}
        onChange={(event) => {
            setName(event.target.value)
        }}
    />
)

export { PresentationName }
