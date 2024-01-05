type BackgroundType = 'color' | 'imageLink' | 'imageBase64'

type MouseStates =
    | 'cursor'
    | 'creatingText'
    | 'creatingRect'
    | 'creatingCircle'
    | 'creatingTriangle'
    | 'creatingBase64Img'
    | 'creatingLinkImg'
    | 'move'
    | 'resize'

type MouseLocations = 'workSpace' | 'sideBar' | 'topPanel'

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
    width?: number
    height: number
    oType: 'ObjectImageType'
}

type ObjectType = ObjectImageType | ObjectTextType | ObjectShapeType

type SlideType = {
    id?: string
    order?: number
    background: BackgroundType
    backgroundValue: string
    objects: ObjectType[]
}

type Doc = {
    name: string
    slidesMap: Map<string, SlideType>
    slidesOrder: string[]
}

type Selected = {
    selectedSlideIds: string[]
    selectedObjectIds: number[]
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
    MouseStates,
    MouseLocations,
}
