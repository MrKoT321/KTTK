import styles from './EditInputButton.module.css'
import { useState } from 'react'

const EditInputButton = () => {
    const [value, setValue] = useState<string>()

    return (
        <label className={styles.editInputButton}>
            <input type={'text'} value={value} className={styles.input} onChange={(e) => setValue(e.target.value)} />
        </label>
    )
}

export { EditInputButton }
