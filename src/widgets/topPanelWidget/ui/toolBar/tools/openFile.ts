import { Editor, Selected, SlideType } from '../../../../../shared/types/types'
import { ChangeEvent } from 'react'

const openFile = (
    event: ChangeEvent<HTMLInputElement>,
    setSlides: (slides: SlideType[]) => void,
    setSelected: (selected: Selected) => void,
    setPresentationName: (slides: string) => void,
    setCurrentSlide: (slide: SlideType) => void,
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
                    setCurrentSlide(parsedResult.document.slides[0])
                    setSlides(parsedResult.document.slides)
                    setSelected(parsedResult.selected)
                    setPresentationName(parsedResult.document.name)
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
