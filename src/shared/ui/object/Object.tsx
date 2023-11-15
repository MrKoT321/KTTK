import { TextObject, ShapeObject, ImageObject } from './objects'
import {
    ObjectImageType,
    ObjectShapeType,
    ObjectTextType,
} from '../../types/types'

type ObjectProps = {
    object: ObjectImageType | ObjectTextType | ObjectShapeType
    isSideSlide?: boolean
}

const scaleSideSlide = 220 / 1080

const Object = ({ object, isSideSlide }: ObjectProps) => {
    if (object.oType === 'ObjectTextType') {
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
            />
        )
    }
    if (object.oType === 'ObjectShapeType') {
        if (isSideSlide) {
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
                    endX={scaleSideSlide * object.endX}
                    endY={scaleSideSlide * object.endY}
                    shapeBgColor={object.shapeBgColor}
                    oType={object.oType}
                />
            )
        }
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
                endX={object.endX}
                endY={object.endY}
                shapeBgColor={object.shapeBgColor}
                oType={object.oType}
            />
        )
    }
    if (object.oType === 'ObjectImageType') {
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
            />
        )
    }
    return <></>
}

export { Object }
