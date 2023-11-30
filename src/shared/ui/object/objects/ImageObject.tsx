import { ObjectImageType, Selected } from '../../../types/types'
import styles from '../Object.module.css'

type ImageObjProps = ObjectImageType & {
    selected: Selected
    setSelected(selected: Selected): void
    isSelected: boolean
}

const ImageObject = (props: ImageObjProps) => {
    const styleObj = {
        left: props.startX,
        top: props.startY,
    }
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
        <div style={styleObj} className={`${styles.object} ${props.isSelected ? styles.selected : styles.nonSelected}`}>
            <div style={styleParentObj}>
                <img style={styleChildObj} alt={props.caption} src={props.imageSrc} />
            </div>
        </div>
    )
}

export { ImageObject }
