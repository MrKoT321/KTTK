import { ObjectTextType, Selected } from '../../../types/types'
import styles from '../Object.module.css'

type TextObjProps = ObjectTextType & {
    selected: Selected
    setSelected(selected: Selected): void
    isSelected?: boolean
}

const TextObject = (props: TextObjProps) => {
    const styleObj = {
        width: props.width + props.borderWidth,
        height: props.height + props.borderWidth,
        left: props.startX,
        top: props.startY,
        borderStyle: props.borderStyle,
        borderWidth: props.isSelected ? 10 : props.borderWidth,
        borderColor: props.isSelected ? 'green' : props.borderColor,
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
        styleObj.fontStyle = 'italic'
    }
    if (props.bold) {
        styleObj.fontWeight = 'bold'
    }
    if (props.underlined) {
        styleObj.textDecoration = 'underline'
    }

    return (
        <div
            style={styleObj}
            className={styles.object}
            onClick={() => {
                const sel: Selected = {
                    slidesIds: [...props.selected.slidesIds],
                    objectsIds: [props.id],
                }
                props.setSelected(sel)
            }}
        >
            <span>{props.value}</span>
        </div>
    )
}

export { TextObject }
