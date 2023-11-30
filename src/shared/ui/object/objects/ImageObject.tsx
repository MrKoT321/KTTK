import { ObjectImageType } from '../../../types/types'
import styles from '../Object.module.css'

const ImageObject = (props: ObjectImageType) => {
    const styleParentObj = {
        width: props.width + props.borderWidth,
        height: props.height + props.borderWidth,
        borderStyle: props.borderStyle,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
    }
    const styleChildObj = {
        width: props.width,
        height: props.height,
        left: props.startX,
        top: props.startY,
    }
    return (
        <div style={styleParentObj} className={styles.object}>
            <img style={styleChildObj} alt={props.caption} src={props.imageSrc} />
        </div>
    )
}

export { ImageObject }
