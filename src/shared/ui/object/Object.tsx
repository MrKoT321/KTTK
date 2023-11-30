import { TextObject, ShapeObject, ImageObject } from './objects'
import { ObjectImageType, ObjectShapeType, ObjectTextType, Selected } from '../../types/types'

type ObjectProps = {
    object: ObjectImageType | ObjectTextType | ObjectShapeType
    isSideSlide?: boolean
    selected: Selected
    setSelected: (selected: Selected) => void
    isObjectSelected: boolean
}

const scaleSideSlide = 220 / 1080

const Object = ({ object, isSideSlide, selected, setSelected, isObjectSelected }: ObjectProps) => {
    switch (object.oType) {
        case 'ObjectTextType':
            if (isSideSlide) {
                return (
                    <TextObject
                        id={object.id}
                        width={scaleSideSlide * object.width}
                        height={scaleSideSlide * object.height}
                        startX={scaleSideSlide * object.startX}
                        startY={scaleSideSlide * object.startY}
                        borderStyle={object.borderStyle}
                        borderWidth={scaleSideSlide * object.borderWidth}
                        borderColor={object.borderColor}
                        fontSize={scaleSideSlide * object.fontSize}
                        fontColor={object.fontColor}
                        fontFamily={object.fontFamily}
                        bold={object.bold}
                        italic={object.italic}
                        underlined={object.underlined}
                        highlighter={object.highlighter}
                        underlineColor={object.underlineColor}
                        value={object.value}
                        oType={object.oType}
                        selected={selected}
                        setSelected={setSelected}
                        isSelected={isObjectSelected}
                    />
                )
            }
            return (
                <TextObject
                    id={object.id}
                    width={object.width}
                    height={object.height}
                    startX={object.startX}
                    startY={object.startY}
                    borderStyle={object.borderStyle}
                    borderWidth={object.borderWidth}
                    borderColor={object.borderColor}
                    fontSize={object.fontSize}
                    fontColor={object.fontColor}
                    fontFamily={object.fontFamily}
                    bold={object.bold}
                    italic={object.italic}
                    underlined={object.underlined}
                    highlighter={object.highlighter}
                    underlineColor={object.underlineColor}
                    value={object.value}
                    oType={object.oType}
                    selected={selected}
                    setSelected={setSelected}
                    isSelected={isObjectSelected}
                />
            )
        case 'ObjectShapeType':
            if (isSideSlide) {
                switch (object.type) {
                    case 'circle':
                        return (
                            <ShapeObject
                                id={object.id}
                                width={scaleSideSlide * object.width}
                                height={scaleSideSlide * object.height}
                                startX={scaleSideSlide * object.startX}
                                startY={scaleSideSlide * object.startY}
                                borderStyle={object.borderStyle}
                                borderWidth={scaleSideSlide * object.borderWidth}
                                borderColor={object.borderColor}
                                type={object.type}
                                radius={object.radius}
                                shapeBgColor={object.shapeBgColor}
                                oType={object.oType}
                                selected={selected}
                                setSelected={setSelected}
                                isSelected={isObjectSelected}
                            />
                        )
                    case 'rect':
                    case 'line':
                    case 'triangle':
                        return (
                            <ShapeObject
                                id={object.id}
                                width={scaleSideSlide * object.width}
                                height={scaleSideSlide * object.height}
                                startX={scaleSideSlide * object.startX}
                                startY={scaleSideSlide * object.startY}
                                borderStyle={object.borderStyle}
                                borderWidth={scaleSideSlide * object.borderWidth}
                                borderColor={object.borderColor}
                                type={object.type}
                                shapeBgColor={object.shapeBgColor}
                                oType={object.oType}
                                selected={selected}
                                setSelected={setSelected}
                                isSelected={isObjectSelected}
                            />
                        )
                }
            }
            switch (object.type) {
                case 'circle':
                    return (
                        <ShapeObject
                            id={object.id}
                            width={object.width}
                            height={object.height}
                            startX={object.startX}
                            startY={object.startY}
                            borderStyle={object.borderStyle}
                            borderWidth={object.borderWidth}
                            borderColor={object.borderColor}
                            type={object.type}
                            radius={object.radius}
                            shapeBgColor={object.shapeBgColor}
                            oType={object.oType}
                            selected={selected}
                            setSelected={setSelected}
                            isSelected={isObjectSelected}
                        />
                    )
                case 'rect':
                case 'line':
                case 'triangle':
                    return (
                        <ShapeObject
                            id={object.id}
                            width={object.width}
                            height={object.height}
                            startX={object.startX}
                            startY={object.startY}
                            borderStyle={object.borderStyle}
                            borderWidth={object.borderWidth}
                            borderColor={object.borderColor}
                            type={object.type}
                            shapeBgColor={object.shapeBgColor}
                            oType={object.oType}
                            selected={selected}
                            setSelected={setSelected}
                            isSelected={isObjectSelected}
                        />
                    )
            }
        case 'ObjectImageType':
            if (isSideSlide) {
                return (
                    <ImageObject
                        id={object.id}
                        width={scaleSideSlide * object.width}
                        height={scaleSideSlide * object.height}
                        startX={scaleSideSlide * object.startX}
                        startY={scaleSideSlide * object.startY}
                        borderStyle={object.borderStyle}
                        borderWidth={scaleSideSlide * object.borderWidth}
                        borderColor={object.borderColor}
                        caption={object.caption}
                        imageSrc={object.imageSrc}
                        imageSrcType={object.imageSrcType}
                        oType={object.oType}
                        selected={selected}
                        setSelected={setSelected}
                        isSelected={isObjectSelected}
                    />
                )
            }
            return (
                <ImageObject
                    id={object.id}
                    width={object.width}
                    height={object.height}
                    startX={object.startX}
                    startY={object.startY}
                    borderStyle={object.borderStyle}
                    borderWidth={object.borderWidth}
                    borderColor={object.borderColor}
                    caption={object.caption}
                    imageSrc={object.imageSrc}
                    imageSrcType={object.imageSrcType}
                    oType={object.oType}
                    selected={selected}
                    setSelected={setSelected}
                    isSelected={isObjectSelected}
                />
            )
    }
}

export { Object }
