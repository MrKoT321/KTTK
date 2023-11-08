import { ObjectImageType } from '../../../types/types'

const ImageObject = (props: ObjectImageType) => {
    const styleParentObj = {
        width: props.width,
        height: props.height,
        //TODO: position
        marginLeft: props.startX,
        marginTop: props.startY,
        //
        borderStyle: props.borderStyle,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
    }
    const styleChildObj = {
        width: props.width,
        height: props.height,
    }
    return (
        <div style={styleParentObj}>
            <img
                style={styleChildObj}
                alt={props.caption}
                src={props.imageSrc}
            />
        </div>
    )
}

export { ImageObject }
