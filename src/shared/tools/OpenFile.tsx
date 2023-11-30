import { ChangeEvent } from 'react'
import { Editor } from '../types/types'

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

export { openFile }
