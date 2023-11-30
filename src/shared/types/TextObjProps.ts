import { ObjectTextType, Selected } from './types'

type TextObjProps = ObjectTextType & {
    selected: Selected
    setSelected(selected: Selected): void
    isSelected?: boolean
}

export type { TextObjProps }
