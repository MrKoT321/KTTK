import { MouseStates, ObjectTextType, Selected } from '../../../../types/types'
import styles from '../../Object.module.css'
import { createTextObject } from './tools/createTextObject'
import React from 'react'
import { useAppActions, useAppSelector } from '../../../../redux/store'

type TextObjProps = ObjectTextType & {
    // selected: Selected
    // setSelected(selected: Selected): void
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
}

const TextObject = (props: TextObjProps) => {
    // TODO разобраться в типах
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

    const handleClick = () => {
        if (!props.isSelected) {
            const sel: Selected = {
                selectedSlideIds: [...selectedSlideIds],
                selectedObjectIds: [props.id],
            }
        }
        setSelected(sel)
    }

    return (
        <div
            className={`${styles.object} ${props.isSelected ? styles.selected : styles.nonSelected}`}
            style={{ left: props.startX, top: props.startY, userSelect: 'text' }}
        >
            {props.isSelected && (
                <div
                    className={styles.quad}
                    style={quadStyle}
                    onMouseDown={(e) => props.handleMouseDownResize(e)}
                ></div>
            )}
            <div style={childObj} onClick={handleClick} onMouseDown={(e) => props.handleMouseDown(e, props.isSelected)}>
                <textarea placeholder="Введите текст" className={styles.text} style={childObj}></textarea>
            </div>
        </div>
    )
}

export { TextObject }
