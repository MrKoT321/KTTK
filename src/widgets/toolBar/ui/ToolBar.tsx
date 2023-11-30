import styles from './ToolBar.module.css'
import { ChangeEvent } from 'react'
import { Editor, Selected, SlideType } from '../../../shared/types/types'
import { saveFile } from './SaveFile'
import { openFile } from './OpenFile'

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
        <div>
            {/*TODO: здесть просто отправка данных из компонентов в главный <Editor>,*/}
            {/*то есть мы задерживаем стейты в самих компонентах, после нажатия кнопки => отправляется в слайс*/}
            <button>Сохранить</button>
            <button
                style={{
                    padding: 10,
                    backgroundColor: '#FF603D',
                    marginLeft: 50,
                }}
                onClick={() => {
                    saveFile({ toolMenuTools, presentationNameTools })
                }}
            >
                Скачать
            </button>
            <label htmlFor={'open'}>Открыть</label>
            <input
                type={'file'}
                accept={'.json'}
                id={'open'}
                className={styles.hidden}
                onInput={(event: ChangeEvent<HTMLInputElement>) => {
                    openFile({ event, presentationsObjTools })
                }}
            />
        </div>
    )
}

export { ToolBar }
