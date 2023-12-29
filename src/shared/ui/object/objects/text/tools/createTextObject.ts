import { TextObjProps } from '../../../../../types/devTypes'

const createTextObject = (props: TextObjProps) => {
    return {
        width: props.width + props.borderWidth,
        height: props.height + props.borderWidth,
        borderStyle: props.borderStyle,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        fontSize: props.selectedTextSize,
        color: props.isSelected ? props.textColor : '0',
        fontFamily: props.isSelected ? props.selectedTextFonts : '0',
        fontWeight: props.bolded && props.isSelected ? 'bold' : '0',
        fontStyle: props.italic && props.isSelected ? 'italic' : '0',
        textDecoration: props.underlined && props.isSelected ? 'underline' : '0',
        background: props.highlighter,
        textDecorationColor: props.underlineColor,
    }
}

export { createTextObject }
