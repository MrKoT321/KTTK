import { ObjectType, Selected, SlideType } from '../types/types'
import { MouseStates } from '../../widgets/editorWidget/ui/EditorWidget'

type AddObjectParams = {
    mouseState: MouseStates
    currentMouseX: number
    currentMouseY: number
    startMouseX: number
    startMouseY: number
    slides: SlideType[]
    selected: Selected
    allSlides: SlideType[]
    setSlides: (slides: SlideType[]) => void
    createPosition: (startMousePos: number, currentMousePos: number) => number
}

const addObject = ({
    mouseState,
    currentMouseX,
    startMouseX,
    startMouseY,
    currentMouseY,
    slides,
    selected,
    allSlides,
    setSlides,
    createPosition,
}: AddObjectParams) => {
    let object: ObjectType

    const borderWidth = 15
    const startX = createPosition(startMouseX, currentMouseX) - 240
    const startY = createPosition(startMouseY, currentMouseY) - 80
    const width = Math.abs(currentMouseX - startMouseX) + borderWidth
    const height = Math.abs(currentMouseY - startMouseY)

    const createObjectId = () => {
        if (slides[selected.slidesIds[selected.slidesIds.length - 1] - 1].objects.length != 0) {
            return (
                slides[selected.slidesIds[selected.slidesIds.length - 1] - 1].objects[
                    slides[selected.slidesIds[selected.slidesIds.length - 1] - 1].objects.length - 1
                ].id + 1
            )
        }
        return 1
    }

    switch (mouseState) {
        case 'creatingText':
            object = {
                id: createObjectId(),
                width: width,
                height: height,
                startX: startX,
                startY: startY,
                borderStyle: 'none',
                borderWidth: 15,
                //TODO: бордер не отображается поэтому нужно починить
                borderColor: '#000000',
                fontSize: 14,
                fontColor: 'green',
                fontFamily: 'FuturaPT',
                bold: true,
                italic: false,
                underlined: true,
                highlighter: 'blue',
                underlineColor: 'purple',
                value: `House of Tom's cat`,
                oType: 'ObjectTextType',
            }
            break
        case 'creatingRect':
            object = {
                id: createObjectId(),
                width: width,
                height: height,
                startX: startX,
                startY: startY,
                borderStyle: 'solid',
                borderWidth: 15,
                borderColor: 'black',
                type: 'rect',
                shapeBgColor: 'yellow',
                oType: 'ObjectShapeType',
            }
            break
        case 'creatingCircle':
            object = {
                id: createObjectId(),
                width: width,
                height: height,
                startX: startX,
                startY: startY,
                borderStyle: 'solid',
                borderWidth: 15,
                borderColor: 'blue',
                type: 'circle',
                radius: Math.abs(currentMouseX - startMouseX / 2),
                shapeBgColor: 'green',
                oType: 'ObjectShapeType',
            }
            break
        case 'creatingTriangle':
            object = {
                id: createObjectId(),
                width: width,
                height: height,
                startX: startX,
                startY: startY,
                borderStyle: 'none',
                borderWidth: 15,
                borderColor: 'black',
                type: 'line',
                shapeBgColor: 'yellow',
                oType: 'ObjectShapeType',
            }
            break
    }
    allSlides.forEach((slide) => {
        if (slide.id === selected.slidesIds[selected.slidesIds.length - 1]) {
            slide.objects.push(object)
        }
    })
    setSlides(allSlides)
}

export { addObject }
