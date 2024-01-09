import { ObjectShapeType } from '../../../../types/types'
import styles from '../../Object.module.css'
import { createShapeObject } from './tools/createShapeObject'
import { useAppActions, useAppSelector } from '../../../../redux/store'
import React, { CSSProperties } from 'react'
import { handleObjectClick, getQuadStyles } from '../../tools'

type ShapeObjProps = ObjectShapeType & {
    isSelected: boolean
    handleMouseDown?: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
    handleMouseDownResize?: (arg: React.MouseEvent<HTMLDivElement>) => void
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

    return (
        <div
            style={styleParentObj}
            className={`${styles.object} ${props.isSelected ? styles.selected : styles.nonSelected}`}
        >
            {props.isSelected && (
                <div
                    className={styles.quad}
                    style={getQuadStyles(props.width)}
                    onMouseDown={(e) => {
                        if (props.handleMouseDownResize) {
                            props.handleMouseDownResize(e)
                        }
                    }}
                ></div>
            )}
            <div
                style={styleChildObj}
                onClick={(e) =>
                    handleObjectClick(e, props.isSelected, props.id, selectedObjectIds, setSelectedObjectIds)
                }
                onMouseDown={(e) => {
                    if (props.handleMouseDown) {
                        props.handleMouseDown(e, props.isSelected)
                    }
                }}
            ></div>
        </div>
    )
}

export { ShapeObject }
