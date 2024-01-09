import { ChangeEvent } from 'react'
import { SlideType } from '../../../../../shared/types/types'

const openFile = (
    event: ChangeEvent<HTMLInputElement>,
    setSlides: (slidesMap: Map<string, SlideType>) => void,
    setSlidesOrder: (slidesOrder: string[]) => void,
    setCurrentSlide: (currentSlideId: string) => void,
    setPresentationName: (name: string) => void,
    setSelectedSlideIds: (newSelectedSlideIds: string[]) => void,
) => {
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
                        const newOrder = parsedResult.document.slidesOrder
                        setSlides(newSlidesMap)
                        setCurrentSlide(newOrder[0])
                        setSelectedSlideIds([newOrder[0]])
                        setSlidesOrder(newOrder)
                    }
                    setPresentationName(parsedResult.document.name || '')
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
    event.target.value = ''
}

export { openFile }
