import styles from './WorkSpaceWidget.module.css'
import { CurrentSlide } from '../../../features/currentSlide'
import React, { useEffect, useState } from 'react'
import { drawPotentialObject } from '../tools/drawPotentialObject'
import { addObject } from '../../../shared/tools/addObject'
import { changeObjects } from '../tools/changeObjects'
import { layoutParams as lp } from 'shared/tools/layoutParams'
import { useAppActions, useAppSelector } from '../../../shared/redux/store'
import { defaultCurrentSlide } from '../../../shared/tools/defaultCurrentSlide'


const WorkSpaceWidget = () => {
    const { slidesMap, currentSlideId } = useAppSelector((state) => state.slides)
    const slides = Array.from(slidesMap.values())
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const { selectedSlideIds, selectedObjectIds } = useAppSelector((state) => state.selected)
    const { mouseState, mouseLocation } = useAppSelector((state) => state.mouse)
    const selected = useAppSelector((state) => state.selected)
    const {
        currentMouseX,
        currentMouseY,
        startMouseX,
        startMouseY,
        startWidth,
        startHeight,
        currMoveToX,
        currMoveToY,
        isDraw,
        lineDirection,
        styleObj,
        moveObjs,
    } = useAppSelector((state) => state.editObject)

    const lastSlideId = selectedSlideIds[selectedSlideIds.length - 1]
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide
    const {
        setCurrentSlide,
        setSlides,
        setSelected,
        setIsDraw,
        setStartMouseX,
        setStartMouseY,
        setCurrentMouseX,
        setCurrentMouseY,
        setStyleObj,
        setLineDirection,
        setCurrMoveToX,
        setCurrMoveToY,
        setMoveObjs,
        setStartWidth,
        setStartHeight,
        setMouseState,
    } = useAppActions()
    const allSlides = [...slides]

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
        if (
            mouseState === 'creatingRect' ||
            mouseState === 'creatingText' ||
            mouseState === 'creatingCircle' ||
            mouseState === 'creatingLine'
        ) {
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
        if (mouseState === 'creatingLine' && isDraw) {
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
                direction: lineDirection,
                setDirection: setLineDirection,
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
        if (mouseState === 'creatingLine' && isDraw) {
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
                direction: lineDirection,
            })
            setStyleObj({
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                borderColor: 'black',
                borderRadius: 10,
                borderWidth: 2,
                borderStyle: 'solid',
            })
            console.log(currentSlide)
        }
        if (mouseState === 'move') {
            setMouseState('cursor')
            changeObjects({ moveObjs, currentSlide })
            slidesMap.set(currentSlideId, currentSlide)
            setSlides(slidesMap)
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
            currentSlide.objects = newObjects
            slidesMap.set(currentSlideId, currentSlide)
            setSlides(slidesMap)
            setStyleObj({
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
        <div
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseUp={() => handleMouseUp()}
            // onClick={(e) => handleClick(e)}
        >
            <CurrentSlide handleMouseDownResize={handleMouseDownResize} currentSlideBg={currentSlideBg} />
            {(mouseState === 'creatingCircle' ||
                mouseState === 'creatingRect' ||
                mouseState === 'creatingText' ||
                mouseState === 'resize') && <div style={styleObj} className={styles.drawPotentialObject} />}
            {mouseState === 'creatingLine' && (
                <div
                    style={styleObj}
                    className={lineDirection === 'right' ? styles.lineTopRight : styles.lineTopLeft}
                />
            )}
            {mouseState === 'move' &&
                currMoveToX !== 0 &&
                currMoveToY !== 0 &&
                moveObjs.map((object, index) => {
                    return <div style={object.style} className={styles.moveObjs} key={index} />
                })}
        </div>
    )
}

export { WorkSpaceWidget }
