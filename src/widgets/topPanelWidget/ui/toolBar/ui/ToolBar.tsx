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
    const {
        setSlides,
        setSlidesOrder,
        setPresentationName,
        setCurrentSlide,
        setSelectedSlideIds,
        setIsSlideShow,
        setIsFullscreen,
    } = useAppActions()

    return (
        <div className={styles.toolBar}>
            <button
                className={styles.button}
                onClick={() => saveFile(slidesMap, slidesOrder, selected, presentationName)}
            >
                Скачать
            </button>
            <button className={styles.button} onClick={() => exportPresentationAsPdf(slidesMap, presentationName)}>
                Скачать как PDF
            </button>
            <button className={styles.button}>
                <label htmlFor={'open'} className={styles.label}>
                    Открыть
                </label>
                <input
                    type={'file'}
                    accept={'.json'}
                    id={'open'}
                    className={styles.hidden}
                    onInput={(event: ChangeEvent<HTMLInputElement>) =>
                        openFile(
                            event,
                            setSlides,
                            setSlidesOrder,
                            setCurrentSlide,
                            setPresentationName,
                            setSelectedSlideIds,
                        )
                    }
                />
            </button>
            <button
                className={styles.button}
                onClick={() => {
                    setIsSlideShow(true)
                    setIsFullscreen(true)
                }}
            >
                Слайд-шоу
            </button>
        </div>
    )
}

export { ToolBar }
