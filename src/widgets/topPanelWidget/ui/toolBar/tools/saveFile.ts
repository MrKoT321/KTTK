import { Selected, SlideType } from '../../../../../shared/types/types'

const saveFile = (
    slidesMap: Map<string, SlideType>,
    slidesOrder: string[],
    selected: Selected,
    presentationName: string,
) => {
    const jsonSlidesMap = Object.fromEntries(slidesMap)
    const editor = {
        document: {
            name: presentationName,
            slidesOrder: slidesOrder,
            slidesMap: jsonSlidesMap,
        },
        selected: selected,
    }
    const text = JSON.stringify(editor)
    const a = document.createElement('a')
    const file = new Blob([text], { type: 'application/json' })
    a.href = URL.createObjectURL(file)
    a.download = presentationName
    a.click()
}

export { saveFile }
