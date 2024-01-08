import { ChangeEvent } from 'react'
import { SlideType } from '../../../../../shared/types/types'

type OpenFileParams = {
    event: ChangeEvent<HTMLInputElement>
    openPresentation: (slidesMap: Map<string, SlideType>, slideOrder: string[]) => void
}

const openFile = ({ event, openPresentation }: OpenFileParams) => {
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
                const parsedResult = JSON.parse(result)
                console.log('parsedResult = ', parsedResult)
                if (
                    'document' in parsedResult &&
                    'selected' in parsedResult &&
                    'name' in parsedResult.document &&
                    'slidesMap' in parsedResult.document &&
                    'slidesOrder' in parsedResult.document
                ) {
                    if (parsedResult.document.slidesMap) {
                        const newSlidesMap = new Map<string, SlideType>()
                        for (const keyOfSlidesMap in parsedResult.document.slidesMap) {
                            newSlidesMap.set(keyOfSlidesMap, parsedResult.document.slidesMap[keyOfSlidesMap])
                        }
                        openPresentation(newSlidesMap, parsedResult.document.slidesOrder)
                    }
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
