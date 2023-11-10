import { ObjectShapeType } from '../../../types/types'
import styles from '../Object.module.css'

const ShapeObject = (props: ObjectShapeType) => {
    const styleParentObj = {
        width: props.endX - props.startX,
        height: props.endY - props.startY,
        left: props.startX,
        top: props.startY,
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
        <div style={styleParentObj} className={styles.object}>
            <div style={styleChildObj}></div>
        </div>
    )
}

export { ShapeObject }
