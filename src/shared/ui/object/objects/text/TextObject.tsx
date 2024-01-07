import { MouseStates, ObjectTextType } from '../../../../types/types'
import styles from '../../Object.module.css'
import { createTextObject } from './tools/createTextObject'
import React from 'react'
import { useAppActions, useAppSelector } from '../../../../redux/store'
import { defaultCurrentSlide } from '../../../../defaultCurrentSlide'

type TextObjProps = ObjectTextType & {
    isSelected: boolean
    setMouseState: (mouseState: MouseStates) => void
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
    handleMouseDownResize: (arg: React.MouseEvent<HTMLDivElement>) => void
    isBlocked?: boolean
}

const TextObject = (props: TextObjProps) => {
    const styleParentObj = {
        width: props.width + 2 * props.borderWidth,
        height: props.height + 2 * props.borderWidth,
        left: props.startX,
        top: props.startY,
    }
    const { slidesMap, currentSlideId } = useAppSelector((state) => state.slides)
    const { setSlides, setSelectedObjectIds } = useAppActions()
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide

    const quadStyle = {
        left: props.width - 5,
        top: -5,
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!props.isSelected) {
            let newSelected = selectedObjectIds
            if (e.ctrlKey) {
                newSelected.push(props.id)
            } else {
                newSelected = [props.id]
            }
            setSelectedObjectIds(newSelected)
        } else {
            if (e.ctrlKey) {
                const newSelected = selectedObjectIds.filter((id) => id != props.id)
                setSelectedObjectIds(newSelected)
            }
        }
    }

    return (
        <div
            className={`${styles.object} ${props.isSelected ? styles.selected : styles.nonSelected}`}
            style={{ left: props.startX, top: props.startY }}
        >
            {props.isSelected && (
                <div
                    className={styles.quad}
                    style={quadStyle}
                    onMouseDown={(e) => props.handleMouseDownResize(e)}
                ></div>
            )}
            <div
                style={styleParentObj}
                onClick={(e) => handleClick(e)}
                onMouseDown={(e) => props.handleMouseDown(e, props.isSelected)}
            >
                {props.isBlocked && (
                    <textarea
                        value={props.value}
                        placeholder="Введите текст"
                        className={`${styles.text} ${styles.textBlocked}`}
                        readOnly={true}
                        style={createTextObject(props)}
                    ></textarea>
                )}
                {!props.isBlocked && (
                    <textarea
                        value={props.value}
                        placeholder="Введите текст"
                        className={`${styles.text} ${styles.textNotBlocked}`}
                        style={createTextObject(props)}
                        onChange={(e) => {
                            for (const object of currentSlide.objects) {
                                if (object.id === props.id && object.oType === 'ObjectTextType') {
                                    object.value = e.target.value
                                }
                            }
                            slidesMap.set(currentSlideId, currentSlide)
                            setSlides(slidesMap)
                        }}
                    ></textarea>
                )}
            </div>
        </div>
    )
}

export { TextObject }
