import { Editor, Selected, SlideType } from '../../../shared/types/types'

type SaveFileParameters = {
    toolMenuTools: {
        slides: SlideType[]
        setSlides(slides: SlideType[]): void
        selected: Selected
    }
    presentationNameTools: {
        setName: (name: string) => void
        name: string
    }
}

const saveFile = ({ toolMenuTools, presentationNameTools }: SaveFileParameters) => {
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
    console.log('editor = ', editor)
    const text = JSON.stringify(editor)
    const a = document.createElement('a')
    const file = new Blob([text], { type: 'application/json' })
    a.href = URL.createObjectURL(file)
    a.download = presentationNameTools.name
    a.click()
}

export { saveFile }
