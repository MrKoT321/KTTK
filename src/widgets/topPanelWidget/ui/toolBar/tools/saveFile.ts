import { Editor } from '../../../../../shared/types/types'
import { useAppSelector } from '../../../../../shared/redux/store'

const saveFile = () => {
    const slides = useAppSelector((state) => state.slides.slides)
    const { selectedSlideIds, selectedObjectIds } = useAppSelector((state) => state.selected)
    const presentationName = useAppSelector((state) => state.presentationName.name)
    const editor: Editor = {
        document: {
            name: presentationName,
            slides: slides,
        },
        selected: {
            selectedObjectIds: selectedObjectIds,
            selectedSlideIds: selectedSlideIds,
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
