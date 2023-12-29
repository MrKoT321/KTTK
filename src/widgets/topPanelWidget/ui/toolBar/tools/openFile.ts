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
            console.log('result = ', result)
            if (typeof result === 'string') {
                try {
                    JSON.parse(result)
                } catch {
                    alert('Невозможно открыть файл')
                    return
                }
                const parsedResult: Editor = JSON.parse(result)
                console.log('parsedResult = ', parsedResult)
                if (
                    'document' in parsedResult &&
                    'selected' in parsedResult &&
                    'name' in parsedResult.document &&
                    'slides' in parsedResult.document &&
                    'selectedSlideIds' in parsedResult.selected &&
                    'selectedObjectIds' in parsedResult.selected
                ) {
                    presentationsObjTools.setPresentation(parsedResult)
                } else {
                    alert('Невозможно открыть файл')
                }
            } else {
                console.log('Ошибка декодирования')
            }
        },
        false,
    )
    reader.readAsText(file)
}

export { openFile }
