import styles from './ToolBar.module.css'
import { ChangeEvent } from 'react'
import { openFile } from '../tools/openFile'
import { saveFile } from '../tools/saveFile'
import { Editor, Selected, SlideType } from '../../../../../shared/types/types'

type ToolBarProps = {
    toolMenuTools: {
        slides: SlideType[]
        setSlides(slides: SlideType[]): void
        selected: Selected
    }
    presentationNameTools: {
        setName: (name: string) => void
        name: string
    }
    presentationsObjTools: {
        setPresentation(presentation: Editor): void
        presentation: Editor
    }
}

const ToolBar = ({ toolMenuTools, presentationNameTools, presentationsObjTools }: ToolBarProps) => {
    return (
        <div className={styles.toolBar}>
            <button className={styles.button} onClick={() => saveFile({ toolMenuTools, presentationNameTools })}>
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
