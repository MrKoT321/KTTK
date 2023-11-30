import styles from './ToolBar.module.css'
import { ChangeEvent } from 'react'
import { Editor, Selected, SlideType } from '../../../shared/types/types'

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
    const saveFile = () => {
        const editor: Editor = {
            document: {
                name: presentationNameTools.name,
                slides: toolMenuTools.slides,
            },
            selected: {
                objectsIds: toolMenuTools.selected.objectsIds,
                slidesIds: toolMenuTools.selected.slidesIds,
            },
        }
        const text = JSON.stringify(editor)
        const a = document.createElement('a')
        const file = new Blob([text], { type: 'application/json' })
        a.href = URL.createObjectURL(file)
        a.download = presentationNameTools.name + '.json'
        a.click()
    }

    const openFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return null
        }
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.addEventListener(
            'load',
            () => {
                const result = reader.result
                console.log('result = ', result)
                if (typeof result === 'string') {
                    const parsedResult = JSON.parse(result)
                    console.log('parsedResult = ', parsedResult)
                    presentationsObjTools.setPresentation(parsedResult)
                } else {
                    console.log('Ошибка декодирования')
                }
            },
            false,
        )
        reader.readAsText(file)
    }

    return (
        <div>
            <button>Сохранить</button>
            <button
                style={{
                    padding: 10,
                    backgroundColor: '#FF603D',
                    marginLeft: 50,
                }}
                onClick={saveFile}
            >
                Скачать
            </button>
            <label htmlFor={'open'}>Открыть</label>
            <input type={'file'} accept={'.json'} id={'open'} className={styles.hidden} onInput={openFile} />
        </div>
    )
}

export { ToolBar }
