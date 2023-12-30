import { ObjectTextType } from './types'

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
    isSelected?: boolean
    selectedTextFonts: string
    selectedTextSize: number
}

export type { DrawStyle, TextObjProps, MoveObj }
