import { ObjectTextType, Selected } from '../../../types/types'
import styles from '../Object.module.css'

type TextObjProps = ObjectTextType & {
    selected: Selected
    setSelected(selected: Selected): void
    isSelected: boolean
}

const TextObject = (props: TextObjProps) => {
    const parentObj = {
        left: props.startX,
        top: props.startY,
    }
    const childObj = {
        width: props.width + props.borderWidth,
        height: props.height + props.borderWidth,
        borderStyle: props.borderStyle,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        fontSize: props.fontSize,
        color: props.fontColor,
        fontFamily: props.fontFamily,
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
        background: props.highlighter,
        textDecorationColor: props.underlineColor,
    }
    if (props.italic) {
        childObj.fontStyle = 'italic'
    }
    if (props.bold) {
        childObj.fontWeight = 'bold'
    }
    if (props.underlined) {
        childObj.textDecoration = 'underline'
    }

    const handleClick = () => {
        const sel: Selected = {
            slidesIds: [...props.selected.slidesIds],
            objectsIds: [props.id],
        }
        props.setSelected(sel)
    }

    return (
        <div
            className={`${styles.object} ${props.isSelected ? styles.selected : styles.nonSelected}`}
            style={parentObj}
            onClick={handleClick}
        >
            <div style={childObj}>
                <span>{props.value}</span>
            </div>
        </div>
    )
}

export { TextObject }
