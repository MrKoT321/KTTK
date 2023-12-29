import styles from './ToolBar.module.css'
import { ChangeEvent } from 'react'
import { openFile } from '../tools/openFile'
import { saveFile } from '../tools/saveFile'
import { Editor } from '../../../../../shared/types/types'
import { useAppActions, useAppSelector } from '../../../../../shared/redux/store'

type ToolBarProps = {
    presentationsObjTools: {
        setPresentation(presentation: Editor): void
        presentation: Editor
    }
}

const ToolBar = ({ presentationsObjTools }: ToolBarProps) => {
    const slides = useAppSelector((state) => state.slides.slides)
    const selected = useAppSelector((state) => state.selected)
    const presentationName = useAppSelector((state) => state.presentationName.name)
    const { setSlides, setSelected, setPresentationName, setCurrentSlide } = useAppActions()

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
                    onInput={(event: ChangeEvent<HTMLInputElement>) =>
                        openFile(event, setSlides, setSelected, setPresentationName, setCurrentSlide)
                    }
                />
            </button>
        </div>
    )
}

export { ToolBar }
