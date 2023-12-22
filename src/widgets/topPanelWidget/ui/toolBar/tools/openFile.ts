import { ChangeEvent } from 'react'
import { Editor } from '../../../../../shared/types/types'

type OpenFileParams = {
    event: ChangeEvent<HTMLInputElement>
    presentationsObjTools: {
        setPresentation(presentation: Editor): void
        presentation: Editor
    }
}

const openFile = ({ event, presentationsObjTools }: OpenFileParams) => {
    if (!event.target.files) {
        return null
    }
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.addEventListener(
        'load',
        () => {
            const result = reader.result
            if (typeof result === 'string') {
                try {
                    JSON.parse(result)
                } catch {
                    alert('Невозможно открыть файл')
                    return
                }
                const parsedResult: Editor = JSON.parse(result)
                if (
                    'document' in parsedResult &&
                    'selected' in parsedResult &&
                    'name' in parsedResult.document &&
                    'slides' in parsedResult.document &&
                    'slidesIds' in parsedResult.selected &&
                    'objectsIds' in parsedResult.selected
                ) {
                    presentationsObjTools.setPresentation(parsedResult)
                } else {
                    alert('Невозможно открыть файл')
                }
            } else {
                alert('Ошибка декодирования')
            }
        },
        false,
    )
    reader.readAsText(file)
}

export { openFile }
