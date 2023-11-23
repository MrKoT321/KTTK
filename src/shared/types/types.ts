type BackgroundType = 'color' | 'imageLink' | 'imageBase64'

type GeneralObjectType = {
    id: number
    width: number
    height: number
    startX: number
    startY: number
    borderStyle: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
    borderWidth: number
    borderColor: string
}

type ShapeRectType = {
    type: 'rect'
}

type ShapeCircleType = {
    type: 'circle'
    radius: number
}

type ShapeTriangleType = {
    type: 'triangle'
}

type ShapeLineType = {
    type: 'line'
}

type ShapeType = ShapeRectType | ShapeCircleType | ShapeTriangleType | ShapeLineType

type ObjectShapeType = GeneralObjectType &
    ShapeType & {
        shapeBgColor: string
        oType: 'ObjectShapeType'
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
    oType: 'ObjectTextType'
}

type ObjectImageType = GeneralObjectType & {
    caption: string
    imageSrcType: 'imageLink' | 'imageBase64'
    imageSrc: string
    oType: 'ObjectImageType'
}

type ObjectType = ObjectImageType | ObjectTextType | ObjectShapeType

type SlideType = {
    id: number
    background: BackgroundType
    backgroundValue: string
    objects: Array<ObjectType>
}

type Doc = {
    name: string
    slides: Array<SlideType>
}

type Selected = {
    slidesIds: Array<number>
    objectsIds: Array<number>
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

export type {
    Editor,
    Doc,
    Selected,
    SlideType,
    ObjectImageType,
    ObjectShapeType,
    ObjectTextType,
    BackgroundType,
    ObjectType,
}
