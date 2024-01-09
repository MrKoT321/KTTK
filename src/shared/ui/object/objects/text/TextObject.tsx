import { ObjectLocationType, ObjectTextType } from '../../../../types/types'
import styles from '../../Object.module.css'
import { createTextObject } from './tools/createTextObject'
import React, { CSSProperties } from 'react'
import { useAppActions, useAppSelector } from '../../../../redux/store'
import { defaultCurrentSlide } from '../../../../tools/defaultCurrentSlide'
import { handleObjectClick, getQuadStyles } from '../../tools'

type TextObjProps = ObjectTextType & {
    isSelected: boolean
    objectLocation: ObjectLocationType
    handleMouseDown?: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
    handleMouseDownResize?: (arg: React.MouseEvent<HTMLDivElement>) => void
    isBlocked?: boolean
}

const TextObject = (props: TextObjProps) => {
    const { slidesMap, currentSlideId } = useAppSelector((state) => state.slides)
    const { setSlides, setSelectedObjectIds } = useAppActions()
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide

    const styleParentObj: CSSProperties = {
        width: props.width + 2 * props.borderWidth,
        height: props.height + 2 * props.borderWidth,
        left: props.startX,
        top: props.startY,
    }

    return (
        <div
            className={`${styles.object} ${props.isSelected ? styles.selected : styles.nonSelected}`}
            style={{ left: props.startX, top: props.startY }}
        >
            {props.isSelected && (
                <div
                    className={styles.quad}
                    style={getQuadStyles(props.width)}
                    onMouseDown={(e) => {
                        if (props.handleMouseDownResize) {
                            props.handleMouseDownResize(e)
                        }
                    }}
                ></div>
            )}
            <div
                style={styleParentObj}
                onClick={(e) =>
                    handleObjectClick(e, props.isSelected, props.id, selectedObjectIds, setSelectedObjectIds)
                }
                onMouseDown={(e) => {
                    if (props.handleMouseDown) {
                        props.handleMouseDown(e, props.isSelected)
                    }
                }}
            >
                {props.isBlocked && props.objectLocation === 'sideSlide' && (
                    <textarea
                        value={props.value}
                        placeholder=""
                        className={`${styles.text} ${styles.textGrabbed}`}
                        readOnly={true}
                        style={createTextObject(props)}
                    ></textarea>
                )}
                {props.isBlocked && props.objectLocation === 'slideShowSlide' && (
                    <textarea
                        value={props.value}
                        placeholder=""
                        className={`${styles.text} ${styles.textBlocked}`}
                        readOnly={true}
                        style={createTextObject(props)}
                    ></textarea>
                )}
                {!props.isBlocked && props.isSelected && (
                    <textarea
                        value={props.value}
                        placeholder="Введите текст"
                        className={`${styles.text} ${styles.textNotBlocked} ${styles.textSelected}`}
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
                {!props.isBlocked && !props.isSelected && (
                    <textarea
                        value={props.value}
                        placeholder="Введите текст"
                        className={`${styles.text} ${styles.textNotBlocked} ${styles.textNonSelected}`}
                        readOnly={true}
                        style={createTextObject(props)}
                    ></textarea>
                )}
            </div>
        </div>
    )
}

export { TextObject }
