import styles from './WorkSpaceWidget.module.css'
import { MouseLocations, MouseStates } from '../../../shared/types/types'
import React, { useEffect, useState } from 'react'
import { drawPotentialObject } from '../tools/drawPotentialObject'
import { addObject } from '../../../shared/tools/addObject'
import { changeObjects } from '../tools/changeObjects'
import { layoutParams as lp } from 'shared/tools/layoutParams'
import { DrawStyle, MoveObj } from '../../../shared/types/devTypes'
import { useAppActions, useAppSelector } from '../../../shared/redux/store'
import { defaultCurrentSlide } from '../../../shared/tools/defaultCurrentSlide'
import { CurrentSlide } from '../../../features/currentSlide'

type WorkSpaceWidgetProps = {
    mouseState: MouseStates
    setMouseState: (mouseState: MouseStates) => void
    mouseLocation: MouseLocations
}

const WorkSpaceWidget = ({ mouseState, setMouseState, mouseLocation }: WorkSpaceWidgetProps) => {
    const { slidesMap, currentSlideId } = useAppSelector((state) => state.slides)
    const slides = Array.from(slidesMap.values())
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide
    const { setSlides, setSelectedObjectIds } = useAppActions()
    const allSlides = [...slides]

    const [currentMouseX, setCurrentMouseX] = useState(0)
    const [currentMouseY, setCurrentMouseY] = useState(0)
    const [startMouseX, setStartMouseX] = useState(0)
    const [startMouseY, setStartMouseY] = useState(0)

    const [startWidth, setStartWidth] = useState(0)
    const [startHeight, setStartHeight] = useState(0)

    const [isDraw, setIsDraw] = useState(false)

    const [styleObj, setStyleObj] = useState<DrawStyle>({
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
    const [moveObjs, setMoveObjs] = useState<MoveObj[]>([])

    const [currMoveToX, setCurrMoveToX] = useState(0)
    const [currMoveToY, setCurrMoveToY] = useState(0)

    const createMovePosition = (startMousePos: number, currentMousePos: number, currMoveTo: number) => {
        if (startMousePos >= currentMousePos) {
            return currentMousePos - startMousePos - currMoveTo
        } else {
            if (currMoveTo < 0) {
                return currentMousePos - startMousePos + currMoveTo
            } else {
                return currentMousePos - startMousePos - currMoveTo
            }
        }
    }

    const createPosition = (startMousePos: number, currentMousePos: number) => {
        if (startMousePos >= currentMousePos) {
            return currentMousePos
        } else {
            return startMousePos
        }
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (mouseState === 'creatingRect' || mouseState === 'creatingText' || mouseState === 'creatingCircle') {
            setIsDraw(true)
            setStartMouseX(e.clientX - lp.sideBarWidth)
            setStartMouseY(e.clientY - lp.topPanelHeight)
        }
    }
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (
            (mouseState === 'creatingRect' || mouseState === 'creatingText' || mouseState === 'creatingCircle') &&
            isDraw
        ) {
            setCurrentMouseX(e.clientX - lp.sideBarWidth)
            setCurrentMouseY(e.clientY - lp.topPanelHeight)
            drawPotentialObject({
                mouseState,
                currentMouseX,
                startMouseX,
                startMouseY,
                currentMouseY,
                setStyleObj,
                createPosition,
            })
        }
        if (mouseState === 'move') {
            setCurrentMouseX(e.clientX)
            setCurrentMouseY(e.clientY)
            setCurrMoveToX(currMoveToX + createMovePosition(startMouseX, currentMouseX, currMoveToX))
            setCurrMoveToY(currMoveToY + createMovePosition(startMouseY, currentMouseY, currMoveToY))
            moveObjs.map((object) => {
                object.style = {
                    left: object.style.left + createMovePosition(startMouseX, currentMouseX, currMoveToX),
                    top: object.style.top + createMovePosition(startMouseY, currentMouseY, currMoveToY),
                    width: object.style.width,
                    height: object.style.height,
                }
            })
            setMoveObjs(moveObjs)
        }
        if (mouseState === 'resize') {
            setCurrentMouseX(e.clientX - lp.sideBarWidth)
            setCurrentMouseY(e.clientY - lp.topPanelHeight)
            drawPotentialObject({
                mouseState: 'creatingRect',
                currentMouseX,
                startMouseX,
                startMouseY,
                currentMouseY,
                setStyleObj,
                createPosition,
            })
        }
    }
    const handleMouseUp = () => {
        if (
            (mouseState === 'creatingRect' || mouseState === 'creatingText' || mouseState === 'creatingCircle') &&
            isDraw
        ) {
            setIsDraw(false)
            setMouseState('cursor')
            addObject({
                currentSlideId,
                slidesMap,
                setSlides,
                mouseState,
                currentMouseX,
                startMouseX,
                startMouseY,
                currentMouseY,
                createPosition,
            })
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
        if (mouseState === 'move') {
            setMouseState('cursor')
            changeObjects(moveObjs, currentSlide)
            allSlides.map((slide) => {
                if (slide.id === currentSlide.id) {
                    slide = currentSlide
                }
            })
            setCurrMoveToX(0)
            setCurrMoveToY(0)
            setMoveObjs([])
        }
        if (mouseState === 'resize') {
            setMouseState('cursor')
            const newObjects = currentSlide.objects.map((object) => {
                if (selectedObjectIds.includes(object.id)) {
                    object.width = object.width * (styleObj.width / startWidth)
                    object.height = object.height * (styleObj.height / startHeight)
                    object.startX = startMouseX - lp.currentSlideIndentX
                    object.startY = startMouseY - styleObj.height - lp.currentSlideIndentY
                }
                return object
            })
            const newSlides = allSlides.map((slide) => {
                if (slide.id === currentSlide.id) {
                    slide.objects = newObjects
                }
                return slide
            })
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

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!e.ctrlKey) {
            const currObject = currentSlide.objects.find(
                (obj) =>
                    e.clientX - lp.sideBarWidth - lp.currentSlideIndentX > obj.startX &&
                    e.clientX - lp.sideBarWidth - lp.currentSlideIndentX < obj.startX + obj.width &&
                    e.clientY - lp.topPanelHeight - lp.currentSlideIndentY > obj.startY &&
                    e.clientY - lp.topPanelHeight - lp.currentSlideIndentY < obj.startY + obj.height,
            )
            let changedSelectedObjectIds = selectedObjectIds
            if (selectedObjectIds.length !== 0) {
                if (currObject) {
                    changedSelectedObjectIds = [currObject.id]
                } else {
                    changedSelectedObjectIds = []
                }
                setSelectedObjectIds(changedSelectedObjectIds)
            }
            if (currObject) {
                changedSelectedObjectIds = [currObject.id]
            }
        }
    }

    const handleMouseDownResize = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseState('resize')
        let minX = 1920
        let maxY = 0
        selectedObjectIds.map((id) => {
            const currobj = currentSlide.objects.find((object) => object.id === id) ?? {
                startX: minX,
                startY: maxY,
                height: 0,
            }
            if (minX > currobj.startX) {
                minX = currobj.startX
            }
            if (maxY < currobj.startY + currobj.height) {
                maxY = currobj.startY + currobj.height
            }
        })
        setStartMouseX(minX + lp.currentSlideIndentX)
        setStartMouseY(maxY + lp.currentSlideIndentY)
        setStartWidth(e.clientX - lp.sideBarWidth - lp.currentSlideIndentX - minX)
        setStartHeight(maxY - e.clientY + lp.topPanelHeight + lp.currentSlideIndentY)
    }

    const handleKeyDown = (e: KeyboardEvent, selectedObjectIds: number[]) => {
        if (mouseLocation === 'workSpace') {
            if (e.key === 'Delete') {
                e.preventDefault()
                const changedCurrentSlide = { ...currentSlide }
                changedCurrentSlide.objects = changedCurrentSlide.objects.filter(
                    (object) => !selectedObjectIds.includes(object.id),
                )
                slidesMap.set(currentSlideId, changedCurrentSlide)
                setSlides(slidesMap)
                setSelectedObjectIds([])
            }
        }
    }

    useEffect(() => {
        const handleDeleteObjects = (e: KeyboardEvent) => {
            handleKeyDown(e, selectedObjectIds)
        }
        document.addEventListener('keydown', handleDeleteObjects)
        return () => {
            document.removeEventListener('keydown', handleDeleteObjects)
        }
    }, [selectedObjectIds])

    return (
        <>
            <div
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseUp={() => handleMouseUp()}
                onClick={(e) => handleClick(e)}
            >
                <CurrentSlide
                    setMouseState={setMouseState}
                    mouseState={mouseState}
                    setMoveObjs={setMoveObjs}
                    moveObjs={moveObjs}
                    setStartMouseX={setStartMouseX}
                    setStartMouseY={setStartMouseY}
                    setCurrentMouseX={setCurrentMouseX}
                    setCurrentMouseY={setCurrentMouseY}
                    handleMouseDownResize={handleMouseDownResize}
                />
                <div style={styleObj} className={styles.drawPotentialObject} />
                {moveObjs.map((object, index) => {
                    return <div style={object.style} className={styles.moveObjs} key={index} />
                })}
            </div>
        </>
    )
}

export { WorkSpaceWidget }
