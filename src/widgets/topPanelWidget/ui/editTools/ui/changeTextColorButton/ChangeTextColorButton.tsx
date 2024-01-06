import styles from './ChangeTextColorButton.module.css'
import { useState } from 'react'

const ChangeTextColorButton = () => {
    const [textColor, setTextColor] = useState('#000000')
    return (
        <input
            className={styles.button}
            type={'color'}
            value={textColor}
            onChange={(event) => {
                setTextColor(event.target.value)
            }}
        />
    )
}

export { ChangeTextColorButton }
