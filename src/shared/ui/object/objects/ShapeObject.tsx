import { ObjectShapeType, Selected } from '../../../types/types'
import styles from '../Object.module.css'
import { createShapeObject } from '../../../tools/CreateShapeObject'

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
