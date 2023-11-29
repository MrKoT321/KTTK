import styles from './WorkSpaceWidget.module.css'
import { ObjectType, Selected, SlideType } from '../../../shared/types/types'
import { CurrentSlide } from './currentSlide/CurrentSlide'
import { MouseStates } from '../../editorWidget/ui/EditorWidget'
import { useState } from 'react'

type WorkSpaceWidgetProps = {
    slides: SlideType[]
    selected: Selected
    setSelected: (selected: Selected) => void
    setSlides: (slides: SlideType[]) => void
    mouseState: MouseStates
    setMouseState: (mouseState: MouseStates) => void
}

const WorkSpaceWidget = ({
    slides,
    selected,
    setSelected,
    setSlides,
    mouseState,
    setMouseState,
}: WorkSpaceWidgetProps) => {
    const lastSlideId = selected.slidesIds[selected.slidesIds.length - 1]
    const currentSlide = slides.find((slide) => slide.id === lastSlideId)

    const [currentMouseX, setCurrentMouseX] = useState(0)
    const [currentMouseY, setCurrentMouseY] = useState(0)
    const [startMouseX, setStartMouseX] = useState(0)
    const [startMouseY, setStartMouseY] = useState(0)

    const allSlides = [...slides]

    const [isDraw, setIsDraw] = useState(false)

    const [styleObj, setStyleObj] = useState({
        opacity: 0,
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'solid',
    })

    const createIdObjectId = () => {
        if (slides[selected.slidesIds[selected.slidesIds.length - 1] - 1].objects.length != 0) {
            return (
                slides[selected.slidesIds[selected.slidesIds.length - 1] - 1].objects[
                    slides[selected.slidesIds[selected.slidesIds.length - 1] - 1].objects.length - 1
                ].id + 1
            )
        }
        return 1
    }

    const addObject = (
        mouseState: MouseStates,
        startX: number,
        startY: number,
        width: number,
        height: number,
        imageSrc?: string,
    ) => {
        let object: ObjectType
        console.log(allSlides)
        switch (mouseState) {
            case 'creatingLinkImg':
                if (!imageSrc) break
                object = {
                    id: createIdObjectId(),
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
                    id: createIdObjectId(),
                    width: width,
                    height: height,
                    startX: startX,
                    startY: startY,
                    borderStyle: 'none',
                    borderWidth: 0,
                    borderColor: '#000000',
                    caption: '',
                    imageSrcType: 'imageBase64',
                    imageSrc: imageSrc,
                    oType: 'ObjectImageType',
                }
                break
            case 'creatingText':
                object = {
                    id: createIdObjectId(),
                    width: width,
                    height: height,
                    startX: startX,
                    startY: startY,
                    borderStyle: 'none',
                    borderWidth: 2,
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
                    id: createIdObjectId(),
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
                    id: createIdObjectId(),
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
                    id: createIdObjectId(),
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

    const createPosition = (startMousePos: number, currentMousePos: number) => {
        if (startMousePos >= currentMousePos) {
            return currentMousePos
        } else {
            return startMousePos
        }
    }

    const drawPotentialObject = (mouseState: MouseStates) => {
        switch (mouseState) {
            case 'creatingText':
            case 'creatingRect':
                setStyleObj({
                    opacity: 100,
                    top: createPosition(startMouseY, currentMouseY),
                    left: createPosition(startMouseX, currentMouseX),
                    width: Math.abs(currentMouseX - startMouseX),
                    height: Math.abs(currentMouseY - startMouseY),
                    borderColor: 'gray',
                    borderRadius: 0,
                    borderWidth: 2,
                    borderStyle: 'solid',
                })
                break
            case 'creatingCircle':
                setStyleObj({
                    opacity: 100,
                    top: createPosition(startMouseY, currentMouseY),
                    left: createPosition(startMouseX, currentMouseX),
                    width: Math.abs(currentMouseX - startMouseX),
                    height: Math.abs(currentMouseY - startMouseY),
                    borderColor: 'gray',
                    borderRadius: Math.abs(currentMouseX - startMouseX / 2),
                    borderWidth: 2,
                    borderStyle: 'solid',
                })
                break
            case 'creatingTriangle':
                break
        }
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (mouseState != 'cursor') {
            setIsDraw(true)
            setStartMouseX(e.clientX - 275)
            setStartMouseY(e.clientY - 225)
            console.log(e.clientX, e.clientY, '1')
        }
    }
    const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        if (mouseState != 'cursor') {
            setIsDraw(false)
            addObject(
                mouseState,
                createPosition(startMouseX, currentMouseX) - 240,
                createPosition(startMouseY, currentMouseY) - 80,
                Math.abs(currentMouseX - startMouseX),
                Math.abs(currentMouseY - startMouseY),
            )
            setMouseState('cursor')
            setStyleObj({
                opacity: 0,
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                borderColor: 'black',
                borderRadius: 10,
                borderWidth: 2,
                borderStyle: 'solid',
            })
        }
    }
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (mouseState != 'cursor' && isDraw) {
            setCurrentMouseX(e.clientX - 275)
            setCurrentMouseY(e.clientY - 225)
            drawPotentialObject(mouseState)
        }
    }

    return (
        <div
            className={styles.workSpace}
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseUp={(e) => handleMouseUp(e)}
        >
            <CurrentSlide slide={currentSlide ?? slides[0]} selected={selected} setSelected={setSelected} />
            <div style={styleObj} className={styles.drawPotentialObject}>
                {' '}
            </div>
        </div>
    )
}

export { WorkSpaceWidget }
