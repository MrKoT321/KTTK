import { MouseStates, ObjectType, SlideType } from '../types/types'
import { layoutParams as lp } from './layoutParams'
import { defaultCurrentSlide } from './defaultCurrentSlide'

type AddObjectParams = {
    currentSlideId: string
    slidesMap: Map<string, SlideType>
    setSlides: (slidesMap: Map<string, SlideType>) => void
    mouseState: MouseStates
    currentMouseX: number
    currentMouseY: number
    startMouseX: number
    startMouseY: number
    createPosition: (startMousePos: number, currentMousePos: number) => number
    imageSrc?: string
}

const addObject = ({
    currentSlideId,
    slidesMap,
    setSlides,
    mouseState,
    currentMouseX,
    startMouseX,
    startMouseY,
    currentMouseY,
    createPosition,
    imageSrc,
}: AddObjectParams) => {
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide

    let object: ObjectType

    const borderWidth = 0
    const startX = createPosition(startMouseX, currentMouseX) - lp.currentSlideIndentX
    const startY = createPosition(startMouseY, currentMouseY) - lp.currentSlideIndentY
    const width = Math.abs(currentMouseX - startMouseX)
    const height = Math.abs(currentMouseY - startMouseY)

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
                borderWidth: borderWidth,
                borderColor: '#000000',
                caption: '',
                imageSrcType: 'imageLink',
                imageSrc: imageSrc,
                oType: 'ObjectImageType',
            }
            currentSlide.objects.push(object)
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
            currentSlide.objects.push(object)
            break
        case 'creatingText':
            object = {
                id: createObjectId(),
                width: width,
                height: height,
                startX: startX,
                startY: startY,
                borderStyle: 'solid',
                borderWidth: borderWidth,
                //TODO: бордер не отображается поэтому нужно починить
                borderColor: '#000000',
                fontSize: 20,
                fontColor: '#000000',
                fontFamily: 'FuturaPT',
                bold: false,
                italic: false,
                underlined: false,
                highlighter: '#00000000',
                underlineColor: '#000000',
                value: '',
                oType: 'ObjectTextType',
            }
            currentSlide.objects.push(object)
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
            currentSlide.objects.push(object)
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
            currentSlide.objects.push(object)
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
            currentSlide.objects.push(object)
            break
    }
    slidesMap.set(currentSlideId, currentSlide)
    setSlides(slidesMap)
}

export { addObject }
