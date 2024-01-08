import styles from './ToolBar.module.css'
import { ChangeEvent } from 'react'
import { openFile } from '../tools/openFile'
import { saveFile } from '../tools/saveFile'
import { useAppActions, useAppSelector } from '../../../../../shared/redux/store'
import { exportPresentationAsPdf } from '../tools/saveFileAsPdf'

const ToolBar = () => {
    const { slidesMap, slidesOrder } = useAppSelector((state) => state.slides)
    const selected = useAppSelector((state) => state.selected)
    const presentationName = useAppSelector((state) => state.presentationName.name)
    const { openPresentation } = useAppActions()

    return (
        <div className={styles.toolBar}>
            <button
                className={styles.button}
                onClick={() => saveFile(slidesMap, slidesOrder, selected, presentationName)}
            >
                Скачать
            </button>
            <button className={styles.button}>
                <label htmlFor={'open'}>Открыть</label>
                <input
                    type={'file'}
                    accept={'.json'}
                    id={'open'}
                    className={styles.hidden}
                    onInput={(event: ChangeEvent<HTMLInputElement>) => openFile({ event, openPresentation })}
                />
            </button>
            <button className={styles.button} onClick={() => exportPresentationAsPdf(slidesMap, presentationName)}>
                Скачать как PDF
            </button>
        </div>
    )
}

export { ToolBar }
