type GeneralObjectType = {
  id: number
  width: number
  height: number
  startX: number
  startY: number
  borderStyle:
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
  borderWidth: number
  borderColor: string
}

type ObjectShapeType = GeneralObjectType & {
  type: 'rect' | 'triangle' | 'circle' | 'arrow' | 'line'
  endX: number
  endY: number
  shapeBgColor: string
}

type ObjectTextType = GeneralObjectType & {
  fontSize: number
  fontColor: string
  fontFamily: string
  bold: boolean
  italic: boolean
  underlined: boolean
  highlighter: string
  underlineColor: string
  value: string
}

type ObjectImageType = GeneralObjectType & {
  caption: string
  imageSrcType: 'imageLink' | 'imageBase64'
  imageSrc: string
}

type SlideType = {
  id: number
  background: 'color' | 'imageLink' | 'imageBase64'
  backgroundValue: string
  objects: Array<ObjectImageType | ObjectTextType | ObjectShapeType>
}

type Doc = {
  name: string
  slides: Array<SlideType>
}

type Selected = {
  slides: Array<number>
  objects: Array<number>
}

// type Cached = {
//     slides: Array<SlideType>,
//     objects: Array<ObjectImageType | ObjectTextType | ObjectShapeType>,
// }

type Editor = {
  document: Doc
  selected: Selected
  // cached: Cached,
}

export type { Editor }
