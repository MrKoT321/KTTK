import { TextObjProps } from '../../../../../types/devTypes'

const createTextObject = (props: TextObjProps) => {
    return {
        width: props.width + props.borderWidth,
        height: props.height + props.borderWidth,
        borderStyle: props.borderStyle,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        fontSize: props.selectedTextSize,
        color: props.textColor,
        fontFamily: props.selectedTextFonts,
        fontWeight: props.bolded ? 'bold' : 'normal',
        fontStyle: props.italic ? 'italic' : 'normal',
        textDecorationLine: props.underlined ? 'underline' : 'none',
        background: props.highlighter,
        textDecorationColor: props.underlineColor,
    }
}

export { createTextObject }
