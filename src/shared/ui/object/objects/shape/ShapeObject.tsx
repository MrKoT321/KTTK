import { ObjectShapeType, Selected } from '../../../../types/types'
import styles from '../../Object.module.css'
import { createShapeObject } from './tools/createShapeObject'

type ShapeObjProps = ObjectShapeType & {
    selected: Selected
    setSelected(selected: Selected): void
    isSelected: boolean
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
}

const ShapeObject = (props: ShapeObjProps) => {
    const styleChildObj = createShapeObject(props)
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
            onMouseDown={(e) => props.handleMouseDown(e, props.isSelected)}
        >
            <div style={styleChildObj}></div>
        </div>
    )
}

export { ShapeObject }
