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
        //TODO: bold, italic... тут ниже ничего не работает
        bold: props.bold,
        italic: props.italic,
        underline: props.underlined,
        highlighter: props.highlighter,
        underlineColor: props.underlineColor,
    }
    return (
        <div style={styleObj} className={styles.object}>
            <span>{props.value}</span>
        </div>
    )
}

export { TextObject }
