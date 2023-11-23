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
    console.log('WorkSpace')
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

    const addObject = (mouseState: MouseStates, startX: number, startY: number, width: number, height: number) => {
        let object: ObjectType
        console.log(allSlides)
        switch (mouseState) {
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
            // case 'image':
            //     object = {
            //         id: createIdObjectId(),
            //         width: 50,
            //         height: 70,
            //         startX: 20,
            //         startY: 0,
            //         borderStyle: 'none',
            //         borderWidth: 2,
            //         borderColor: '#000000',
            //         caption: 'table',
            //         imageSrcType: 'imageLink',
            //         imageSrc:
            //             'https://yandex.ru/images/search?pos=2&from=tabbar&img_url=https%3A%2F%2Fsun9-43.userapi.com%2FiqwD9yUoXMZZGVcRP3Hg5bCfZYX8oJvAm7Obiw%2FQdTgOWe9YlE.jpg&text=rfhnbrf&rpt=simage&lr=41',
            //         oType: 'ObjectImageType',
            //     }
            //     break
            case 'creatingRect':
            case 'creatingCircle':
            case 'creatingTriangle':
                object = {
                    id: createIdObjectId(),
                    width: 20,
                    height: 30,
                    startX: 180,
                    startY: 20,
                    borderStyle: 'none',
                    borderWidth: 2,
                    borderColor: '#000000',
                    type: 'line',
                    endX: 200,
                    endY: 40,
                    shapeBgColor: '#c22dd0',
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
                    top: currentMouseY,
                    left: currentMouseX,
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
