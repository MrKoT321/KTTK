import { Editor, Selected, SlideType } from '../../../../../shared/types/types'
import { useAppSelector } from '../../../../../shared/redux/store'

type SaveFileParams = {
    toolMenuTools: {
        slides: SlideType[]
        setSlides(slides: SlideType[]): void
        selected: Selected
    }
}

const saveFile = ({ toolMenuTools }: SaveFileParams) => {
    const presentationName = useAppSelector((state) => state.presentationName.name)
    const editor: Editor = {
        document: {
            name: presentationName,
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
    a.download = presentationName
    a.click()
}

export { saveFile }
