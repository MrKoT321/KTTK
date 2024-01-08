import { ObjectShapeType } from '../../../../types/types'
import styles from '../../Object.module.css'
import { createShapeObject } from './tools/createShapeObject'
import { useAppActions, useAppSelector } from '../../../../redux/store'
import React, { CSSProperties } from 'react'
import { getQuadStyles } from '../../../../tools/getQuadStyles'

type ShapeObjProps = ObjectShapeType & {
    isSelected: boolean
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
    handleMouseDownResize: (arg: React.MouseEvent<HTMLDivElement>) => void
}

const ShapeObject = (props: ShapeObjProps) => {
    const { setSelectedObjectIds } = useAppActions()
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const styleChildObj = createShapeObject(props)
    const styleParentObj: CSSProperties = {
        width: props.width + 2 * props.borderWidth,
        height: props.height + 2 * props.borderWidth,
        left: props.startX,
        top: props.startY,
        boxSizing: `border-box`,
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!props.isSelected) {
            let newSelected = selectedObjectIds
            if (e.ctrlKey) {
                newSelected.push(props.id)
            } else {
                newSelected = [props.id]
            }
            setSelectedObjectIds(newSelected)
        } else {
            if (e.ctrlKey) {
                const newSelected = selectedObjectIds.filter((id) => id != props.id)
                setSelectedObjectIds(newSelected)
            }
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
                    style={getQuadStyles(props.width)}
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
