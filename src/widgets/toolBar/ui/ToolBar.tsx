import styles from './ToolBar.module.css'
import { ChangeEvent, useRef, useState } from 'react'

const ToolBar = () => {
    const [newPresentation, setNewPresentation] = useState('')

    const openFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return
        }
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.addEventListener(
            'load',
            () => {
                const result = reader.result
                console.log(result)
            },
            false,
        )
        reader.readAsText(file)
    }

    return (
        <div>
            <button
            // function save() from EditorWidget
            // change download and href params from next block
            >
                Сохранить
            </button>
            <a
                id={'download'}
                className={styles.saveButton}
                download={''}
                href={'/'}
            >
                Скачать
            </a>
            <label htmlFor={'open'}>Открыть</label>
            <input
                // in openResult result means json text
                type={'file'}
                accept={'.json'}
                id={'open'}
                className={styles.hidden}
                onInput={openFile}
            />
        </div>
    )
}

export { ToolBar }
