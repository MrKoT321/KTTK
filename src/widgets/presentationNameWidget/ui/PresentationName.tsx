import styles from './PresentationName.module.css'
import { Doc } from '../../../shared/types/types'
import { useState } from 'react'
type PresentationNameProps = {
    name: string
}

const PresentationName = (props: PresentationNameProps) => {
    const [presentationName, setPresentationName] = useState('')
    return (
        <div className={styles.presentationName}>
            <input
                className={styles.presentationNameInput}
                placeholder={'Назавание презентации'}
                value={presentationName}
                type={'text'}
                onChange={(event) => {
                    setPresentationName(event.target.value)
                }}
            />
        </div>
    )
}

export { PresentationName }
