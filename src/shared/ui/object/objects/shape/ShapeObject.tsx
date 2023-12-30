import { ObjectShapeType, Selected } from '../../../../types/types'
import styles from '../../Object.module.css'
import { createShapeObject } from './tools/createShapeObject'
import { useAppActions, useAppSelector } from '../../../../redux/store'
import React from 'react'

type ShapeObjProps = ObjectShapeType & {
    isSelected: boolean
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
    handleMouseDownResize: (arg: React.MouseEvent<HTMLDivElement>) => void
}

const ShapeObject = (props: ShapeObjProps) => {
    const { setSelected } = useAppActions()
    const selected = useAppSelector((state) => state.selected)

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

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!props.isSelected) {
            if (e.ctrlKey) {
                selected.selectedObjectIds.push(props.id)
            } else {
                selected.selectedObjectIds = [props.id]
            }
            setSelected(selected)
        }
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
                onClick={(e) => handleClick(e)}
                onMouseDown={(e) => props.handleMouseDown(e, props.isSelected)}
            ></div>
        </div>
    )
}

export { ShapeObject }
