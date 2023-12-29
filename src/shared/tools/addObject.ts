import { MouseStates, ObjectType, Selected, SlideType } from '../types/types'
import { layoutParams as lp } from './layoutParams'

type AddObjectParams = {
    mouseState: MouseStates
    currentMouseX: number
    currentMouseY: number
    startMouseX: number
    startMouseY: number
    selected: Selected
    allSlides: SlideType[]
    setSlides: (slides: SlideType[]) => void
    createPosition: (startMousePos: number, currentMousePos: number) => number
    imageSrc?: string
    currentSlide: SlideType
}

const addObject = ({
    mouseState,
    currentMouseX,
    startMouseX,
    startMouseY,
    currentMouseY,
    selected,
    allSlides,
    setSlides,
    createPosition,
    imageSrc,
    currentSlide,
}: AddObjectParams) => {
    let object: ObjectType

    const borderWidth = 0
    const startX = createPosition(startMouseX, currentMouseX) - lp.currentSlideIndentX - borderWidth
    const startY = createPosition(startMouseY, currentMouseY) - lp.currentSlideIndentY - 2 * borderWidth
    const width = Math.abs(currentMouseX - startMouseX) + borderWidth
    const height = Math.abs(currentMouseY - startMouseY) + borderWidth

    const createObjectId = () => {
        let maxId = 0
        if (currentSlide.objects.length > 0) {
            currentSlide.objects.map((object) => {
                if (object.id > maxId) {
                    maxId = object.id
                }
            })
        }
        return maxId + 1
    }

    switch (mouseState) {
        case 'creatingLinkImg':
            if (!imageSrc) break
            object = {
                id: createObjectId(),
                width: width,
                height: height,
                startX: startX,
                startY: startY,
                borderStyle: 'none',
                borderWidth: 0,
                borderColor: '#000000',
                caption: '',
                imageSrcType: 'imageLink',
                imageSrc: imageSrc,
                oType: 'ObjectImageType',
            }
            break
        case 'creatingBase64Img':
            if (!imageSrc) break
            object = {
                id: createObjectId(),
                width: width,
                height: height,
                startX: startX,
                startY: startY,
                borderStyle: 'none',
                borderWidth: borderWidth,
                borderColor: '#000000',
                caption: '123',
                imageSrcType: 'imageBase64',
                imageSrc: imageSrc,
                oType: 'ObjectImageType',
            }
            break
        case 'creatingText':
            object = {
                id: createObjectId(),
                width: width,
                height: height,
                startX: startX,
                startY: startY,
                borderStyle: 'none',
                borderWidth: borderWidth,
                //TODO: бордер не отображается поэтому нужно починить
                borderColor: '#000000',
                fontSize: 14,
                fontColor: 'green',
                fontFamily: 'FuturaPT',
                bold: true,
                italic: false,
                underlined: true,
                highlighter: '#00000000',
                underlineColor: 'purple',
                value: '',
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
                borderWidth: borderWidth,
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
                borderWidth: borderWidth,
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
                borderWidth: borderWidth,
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
