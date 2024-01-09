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
    direction?: 'right' | 'left'
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
    direction = 'right',
}: AddObjectParams) => {
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide

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
                borderWidth: borderWidth,
                borderColor: '#000000',
                caption: '',
                imageSrcType: 'imageLink',
                imageSrc: imageSrc,
                oType: 'ObjectImageType',
                rotate: 0,
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
                rotate: 0,
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
                rotate: 0,
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
                borderColor: '#000000',
                type: 'rect',
                shapeBgColor: '#FFFF00',
                oType: 'ObjectShapeType',
                rotate: 0,
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
                borderColor: '#000000',
                type: 'circle',
                radius: Math.abs(currentMouseX - startMouseX / 2),
                shapeBgColor: '#00FF00',
                oType: 'ObjectShapeType',
                rotate: 0,
            }
            currentSlide.objects.push(object)
            break
        case 'creatingLine':
            object = {
                id: createObjectId(),
                width: width,
                height: height,
                startX: startX,
                startY: startY,
                direction,
                borderStyle: 'none',
                borderWidth: borderWidth,
                borderColor: 'black',
                type: 'line',
                shapeBgColor: '#000000',
                lineWidth: 2,
                oType: 'ObjectShapeType',
                rotate: 0,
            }
            currentSlide.objects.push(object)
            break
    }
    slidesMap.set(currentSlideId, currentSlide)
    setSlides(slidesMap)
}

export { addObject }
