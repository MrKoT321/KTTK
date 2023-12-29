import { Editor, Selected, SlideType } from '../../../../../shared/types/types'

const saveFile = (slides: SlideType[], selected: Selected, presentationName: string) => {
    const editor: Editor = {
        document: {
            name: presentationName,
            slides: slides,
        },
        selected: selected,
    }
    console.log('editor = ', editor)
    const text = JSON.stringify(editor)
    const a = document.createElement('a')
    const file = new Blob([text], { type: 'application/json' })
    a.href = URL.createObjectURL(file)
    a.download = presentationName
    a.click()
}

export { saveFile }
