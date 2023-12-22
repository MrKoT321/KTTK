import { ObjectTextType, Selected } from './types'

type DrawStyle = {
    opacity: number
    left: number
    top: number
    width: number
    height: number
    borderColor: string
    borderRadius: number
    borderWidth: number
    borderStyle: string
}

type MoveObj = {
    style: {
        width: number
        height: number
        left: number
        top: number
    }
    id: number
}

type TextObjProps = ObjectTextType & {
    selected: Selected
    setSelected(selected: Selected): void
    isSelected?: boolean
    selectedTextFonts: string
    selectedTextSize: number
    bolded: boolean
    underlined: boolean
    textColor: string
}

export type { DrawStyle, TextObjProps, MoveObj }
