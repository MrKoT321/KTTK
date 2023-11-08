import { ObjectTextType } from '../../../types/types'

const TextObject = (props: ObjectTextType) => {
    const styleObj = {
        width: props.width,
        height: props.height,
        //TODO: position
        marginLeft: props.startX,
        marginTop: props.startY,
        //
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
        <div style={styleObj}>
            <span>{props.value}</span>
        </div>
    )
}

export { TextObject }
