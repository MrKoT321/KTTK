import { ChangeEvent } from 'react'
import { Editor } from '../../../shared/types/types'

type OpenFileProps = {
    event: ChangeEvent<HTMLInputElement>
    presentationsObjTools: {
        setPresentation(presentation: Editor): void
        presentation: Editor
    }
}

const OpenFile = ({ event, presentationsObjTools }: OpenFileProps) => {
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

export { OpenFile }
