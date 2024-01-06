import styles from './ToolBar.module.css'
import { ChangeEvent } from 'react'
import { openFile } from '../tools/openFile'
import { saveFile } from '../tools/saveFile'
import { Editor } from '../../../../../shared/types/types'
import { useAppSelector } from '../../../../../shared/redux/store'
import { defaultCurrentSlide } from '../../../../../shared/defaultCurrentSlide'

type ToolBarProps = {
    presentationsObjTools: {
        setPresentation(presentation: Editor): void
        presentation: Editor
    }
}

const ToolBar = ({ presentationsObjTools }: ToolBarProps) => {
    const slidesMap = useAppSelector((state) => state.slides.slidesMap)
    const slides = Array.from(slidesMap.values())
    const selected = useAppSelector((state) => state.selected)
    const presentationName = useAppSelector((state) => state.presentationName.name)

    return (
        <div className={styles.toolBar}>
            <button className={styles.button} onClick={() => saveFile(slides, selected, presentationName)}>
                Скачать
            </button>
            <button className={styles.button}>
                <label htmlFor={'open'}>Открыть</label>
                <input
                    type={'file'}
                    accept={'.json'}
                    id={'open'}
                    className={styles.hidden}
                    onInput={(event: ChangeEvent<HTMLInputElement>) => openFile({ event, presentationsObjTools })}
                />
            </button>
        </div>
    )
}

export { ToolBar }
