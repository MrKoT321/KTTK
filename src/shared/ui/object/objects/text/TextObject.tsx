import { MouseStates, ObjectTextType, Selected, SlideType } from '../../../../types/types'
import styles from '../../Object.module.css'
import { createTextObject } from './tools/createTextObject'
import React from 'react'
import { useAppActions, useAppSelector } from '../../../../redux/store'

type TextObjProps = ObjectTextType & {
    isSelected: boolean
    setMouseState: (mouseState: MouseStates) => void
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
    handleMouseDownResize: (arg: React.MouseEvent<HTMLDivElement>) => void
    selectedTextFonts: string
    selectedTextSize: number
    bolded: boolean
    italic: boolean
    underlined: boolean
    textColor: string
    isBlocked?: boolean
    setSlides?: (slides: SlideType[]) => void
    slides?: SlideType[]
}

const TextObject = (props: TextObjProps) => {
    const styleParentObj = {
        width: props.width + 2 * props.borderWidth,
        height: props.height + 2 * props.borderWidth,
        left: props.startX,
        top: props.startY,
    }

    const { setSelected } = useAppActions()
    const { selectedSlideIds, selectedObjectIds } = useAppSelector((state) => state.selected)
    const childObj = createTextObject(props)
    const sel: Selected = {
        selectedSlideIds: [...selectedSlideIds],
        selectedObjectIds: [...selectedObjectIds],
    }

    const quadStyle = {
        left: props.width - 5,
        top: -5,
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!props.isSelected) {
            if (e.ctrlKey) {
                sel.objectsIds.push(props.id)
            } else {
                sel.objectsIds = [props.id]
            }
            props.setSelected(sel)
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
                        className={`${styles.text} ${props.isBlocked ? styles.textBlocked : styles.textNotBlocked}`}
                        readOnly={true}
                        style={createTextObject(props)}
                    ></textarea>
                )}
                {!props.isBlocked && (
                    <textarea
                        value={props.value}
                        placeholder="Введите текст"
                        className={`${styles.text} ${props.isBlocked ? styles.textBlocked : styles.textNotBlocked}`}
                        style={createTextObject(props)}
                        onChange={(e) => {
                            if (props.setSlides && props.slides) {
                                const allSlides = [...props.slides]
                                for (const object of allSlides[props.selected.slidesIds.length - 1].objects) {
                                    if (object.id === props.id && object.oType === 'ObjectTextType') {
                                        object.value = e.target.value
                                    }
                                }
                                props.setSlides(allSlides)
                            }
                        }}
                    ></textarea>
                )}
            </div>
        </div>
    )
}

export { TextObject }
