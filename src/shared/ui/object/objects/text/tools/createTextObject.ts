import { TextObjProps } from '../../../../../types/devTypes'

const createTextObject = (props: TextObjProps) => {
    return {
        width: props.width,
        height: props.height,
        borderStyle: props.borderStyle,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        fontSize: props.fontSize,
        color: props.fontColor,
        fontFamily: props.fontFamily,
        fontWeight: props.bold ? 'bold' : 'normal',
        fontStyle: props.italic ? 'italic' : 'normal',
        textDecorationLine: props.underlined ? 'underline' : 'none',
        background: props.highlighter,
        textDecorationColor: props.fontColor,
        transform: `rotate(${props.rotate}deg)`,
    }
}

export { createTextObject }
