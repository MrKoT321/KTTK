import { ObjectShapeType, Selected } from '../../../../types/types'
import styles from '../../Object.module.css'
import { createShapeObject } from './tools/createShapeObject'

type ShapeObjProps = ObjectShapeType & {
    selected: Selected
    setSelected(selected: Selected): void
    isSelected: boolean
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
    handleMouseDownResize: (arg: React.MouseEvent<HTMLDivElement>) => void
}

const ShapeObject = (props: ShapeObjProps) => {
    const styleChildObj = createShapeObject(props)
    const styleParentObj = {
        width: props.width + 2 * props.borderWidth,
        height: props.height + 2 * props.borderWidth,
        left: props.startX,
        top: props.startY,
    }

    const quadStyle = {
        left: props.width - 5,
        top: -5,
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
        >
            {props.isSelected && (
                <div
                    className={styles.quad}
                    style={quadStyle}
                    onMouseDown={(e) => props.handleMouseDownResize(e)}
                ></div>
            )}
            <div
                style={styleChildObj}
                onClick={handleClick}
                onMouseDown={(e) => props.handleMouseDown(e, props.isSelected)}
            ></div>
        </div>
    )
}

export { ShapeObject }
