import { ObjectShapeType } from '../../../types/types'
import styles from '../Object.module.css'

const ShapeObject = (props: ObjectShapeType) => {
    let styleChildObj
    const styleParentObj = {
        width: props.width + props.borderWidth,
        height: props.height + props.borderWidth,
        left: props.startX,
        top: props.startY,
    }
    switch (props.type) {
        case 'rect':
            styleChildObj = {
                background: props.shapeBgColor,
                width: props.width,
                height: props.height,
                borderStyle: props.borderStyle,
                borderWidth: props.borderWidth,
                borderColor: props.borderColor,
            }
            break
        case 'circle':
            styleChildObj = {
                background: props.shapeBgColor,
                width: props.width,
                height: props.height,
                borderStyle: props.borderStyle,
                borderWidth: props.borderWidth,
                borderColor: props.borderColor,
                borderRadius: props.radius,
            }
            break
        case 'triangle':
        case 'line':
            break
    }
    return (
        <div style={styleParentObj} className={styles.object}>
            <div style={styleChildObj}></div>
        </div>
    )
}

export { ShapeObject }
