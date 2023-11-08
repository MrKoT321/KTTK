import { ObjectShapeType } from '../../../types/types'

const ShapeObject = (props: ObjectShapeType) => {
    const styleParentObj = {
        width: props.endX - props.startX,
        height: props.endY - props.startY,
        //TODO: position
        marginLeft: props.startX,
        marginTop: props.startY,
        //
        borderStyle: props.borderStyle,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
    }
    const styleChildObj = {
        background: props.shapeBgColor,
        width: props.endX - props.startX,
        height: props.endY - props.startY,
    }
    return (
        <div style={styleParentObj}>
            <div style={styleChildObj}></div>
        </div>
    )
}

export { ShapeObject }
