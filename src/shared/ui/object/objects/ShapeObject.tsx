import { ObjectShapeType, Selected } from '../../../types/types'
import styles from '../Object.module.css'

type ShapeObjProps = ObjectShapeType & {
    selected: Selected
    setSelected(selected: Selected): void
    isSelected: boolean
}

const ShapeObject = (props: ShapeObjProps) => {
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

    const handleClick = () => {
        const sel: Selected = {
            slidesIds: [...props.selected.slidesIds],
            objectsIds: [props.id],
        }
        props.setSelected(sel)
    }

    return (
        <div
            style={styleParentObj}
            className={`${styles.object} ${props.isSelected ? styles.selected : styles.nonSelected}`}
            onClick={handleClick}
        >
            <div style={styleChildObj}></div>
        </div>
    )
}

export { ShapeObject }
