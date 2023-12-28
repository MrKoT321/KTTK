import styles from './PresentationName.module.css'
import { useAppActions, useAppSelector } from '../../../../../shared/redux/store'

const PresentationName = () => {
    const { setPresentationName } = useAppActions()
    const presentationName = useAppSelector((state) => state.presentationName.name)
    return (
        <input
            className={styles.presentationNameInput}
            placeholder={'Назавание презентации'}
            value={presentationName}
            type={'text'}
            onChange={(event) => {
                setPresentationName(event.target.value)
            }}
        />
    )
}

export { PresentationName }
