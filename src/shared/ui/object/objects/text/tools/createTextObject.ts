import { TextObjProps } from '../../../../../types/TextObjProps'

const createTextObject = (props: TextObjProps) => {
    let fontStyle = 'normal'
    let fontWeight = 'normal'
    let textDecoration = 'normal'

    if (props.italic) {
        fontStyle = 'italic'
    }
    if (props.bold) {
        fontWeight = 'bold'
    }
    if (props.underlined) {
        textDecoration = 'underline'
    }

    return {
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
}

export { createTextObject }
