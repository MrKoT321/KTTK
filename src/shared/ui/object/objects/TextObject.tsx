import { ObjectTextType } from '../../../types/types'
import styles from '../Object.module.css'

const TextObject = (props: ObjectTextType) => {
    const styleObj = {
        width: props.width,
        height: props.height,
        left: props.startX,
        top: props.startY,
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
        styleObj.fontStyle = 'italic'
    }
    if (props.bold) {
        styleObj.fontWeight = 'bold'
    }
    if (props.underlined) {
        styleObj.textDecoration = 'underline'
    }
    return (
        <div style={styleObj} className={styles.object}>
            <span>{props.value}</span>
        </div>
    )
}

export { TextObject }
