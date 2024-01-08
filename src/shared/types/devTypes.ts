import { ObjectTextType } from './types'

type DrawStyle = {
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
}

type BorderStyle =
    | 'none'
    | 'hidden'
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset'

export type { DrawStyle, TextObjProps, MoveObj, BorderStyle }
