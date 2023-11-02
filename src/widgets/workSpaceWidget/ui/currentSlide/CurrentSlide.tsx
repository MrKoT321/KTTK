import styles from './CurrentSlide.module.css'
import { SlideType } from '../../../../shared/types/types'
import { ImageObject, ShapeObject, TextObject } from '../../../../shared/ui'

type CurrentSlideProps = {
    slide: SlideType
}

const CurrentSlide = ({ slide }: CurrentSlideProps) => {
    const background = { background: slide.background }

    return (
        <div className={styles.workSlide} style={background}>
            {slide.objects.map((object) => {
                if (object.oType === 'ObjectTextType') {
                    return (
                        <TextObject
                            id={object.id}
                            width={object.width}
                            height={object.height}
                            startX={object.startX}
                            startY={object.startX}
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
                    return (
                        <ShapeObject
                            id={object.id}
                            width={object.width}
                            height={object.height}
                            startX={object.startX}
                            startY={object.startX}
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
                    return (
                        <ImageObject
                            id={object.id}
                            width={object.width}
                            height={object.height}
                            startX={object.startX}
                            startY={object.startX}
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
            })}
        </div>
        //TODO: цвет не поставляется
    )
}

export { CurrentSlide }
