import { TextObjProps } from '../../../../../types/devTypes'

const createTextObject = (props: TextObjProps) => {
    return {
        width: props.width + props.borderWidth,
        height: props.height + props.borderWidth,
        borderStyle: props.borderStyle,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        fontSize: props.isSelected ? props.selectedTextSize : '18',
        color: props.fontColor,
        fontFamily: props.isSelected ? props.selectedTextFonts : 'Arial',
        fontWeight: props.bolded ? 'bold' : 'normal',
        fontStyle: props.italic ? 'italic' : 'normal',
        textDecoration: props.underlined ? 'underline' : 'normal',
        background: props.highlighter,
        textDecorationColor: props.underlineColor,
    }
}

export { createTextObject }
