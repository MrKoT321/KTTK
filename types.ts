type GeneralObjectType = {
    id: number,
    width: number,
    height: number,
    startX: number,
    startY: number,
    borderStyle: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset',
    borderWidth: string,
    borderColor: string,
}

type ObjectShapeType = GeneralObjectType & {
    type: 'rect' | 'triangle' | 'circle' | 'arrow' | 'line',
    endX: number,
    endY: number,
    shapeBgColor: string,
}

type ObjectTextType = GeneralObjectType & {
    fontSize: number,
    fontColor: string,
    fontFamily: string,
    bold: boolean,
    italic: boolean,
    underlined: boolean,
    fillColor: string,
    underlineColor: string,
}

type ObjectImageType = GeneralObjectType & {
    alt: string,
    imageSrcType: 'imageLink' | 'imageBase64',
    imageSrc: string,
}

type BGImageType = BGFillColorType

type BGFillColorType = {
    value: string,
}

type SlideType = {
    id: number,
    background: BGFillColorType | BGImageType,
    objects: Array<ObjectImageType | ObjectTextType | ObjectShapeType>,
}

type Doc = {
    name: string,
    slides: Array<SlideType>,
}

type ChosenSlide = {
    slideId: number,
}

type Selected = {
    slides: Array<SlideType>,
    objects: Array<ObjectImageType | ObjectTextType | ObjectShapeType>,
}

// type Cached = {
//     slides: Array<SlideType>,
//     objects: Array<ObjectImageType | ObjectTextType | ObjectShapeType>,
// }

type Editor = {
    document: Doc,
    selected: Selected,
    chosenSlide: ChosenSlide,
    // cached: Cached,
}

export {
    Editor,
}