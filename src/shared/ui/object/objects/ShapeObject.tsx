import { ObjectShapeType } from '../../../types/types'
import styles from '../Object.module.css'
import { createShapeObject } from '../../../tools/CreateShapeObject'

const ShapeObject = (props: ObjectShapeType) => {
    const styleChildObj = createShapeObject(props)
    const styleParentObj = {
        width: props.width + props.borderWidth,
        height: props.height + props.borderWidth,
        left: props.startX,
        top: props.startY,
    }

    return (
        <div style={styleParentObj} className={styles.object}>
            <div style={styleChildObj}></div>
        </div>
    )
}

export { ShapeObject }
