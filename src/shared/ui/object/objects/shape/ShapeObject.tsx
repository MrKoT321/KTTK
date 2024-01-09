import { ObjectShapeType } from '../../../../types/types'
import styles from '../../Object.module.css'
import { createShapeObject } from './tools/createShapeObject'
import { useAppActions, useAppSelector } from '../../../../redux/store'
import React, { CSSProperties } from 'react'
import { handleObjectClick, getQuadStyles } from '../../tools'

type ShapeObjProps = ObjectShapeType & {
    isSelected: boolean
    handleMouseDown?: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean, borderWidth: number) => void
    handleMouseDownResize?: (
        e: React.MouseEvent<HTMLDivElement>,
        quadPos: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight',
    ) => void
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
    }

    return (
        <div
            style={styleParentObj}
            className={`${styles.object} ${props.isSelected ? styles.selected : styles.nonSelected}`}
        >
            {props.isSelected && (
                <div
                    className={styles.quad}
                    style={getQuadStyles(props.width + 2 * props.borderWidth, 0)}
                    onMouseDown={(e) => {
                        if (props.handleMouseDownResize) {
                            props.handleMouseDownResize(e, 'topRight')
                        }
                    }}
                ></div>
            )}
            {props.isSelected && (
                <div
                    className={styles.quad}
                    style={getQuadStyles(0, 0)}
                    onMouseDown={(e) => {
                        if (props.handleMouseDownResize) {
                            props.handleMouseDownResize(e, 'topLeft')
                        }
                    }}
                ></div>
            )}
            {props.isSelected && (
                <div
                    className={styles.quad}
                    style={getQuadStyles(0, props.height + 2 * props.borderWidth)}
                    onMouseDown={(e) => {
                        if (props.handleMouseDownResize) {
                            props.handleMouseDownResize(e, 'bottomLeft')
                        }
                    }}
                ></div>
            )}
            {props.isSelected && (
                <div
                    className={styles.quad}
                    style={getQuadStyles(props.width + 2 * props.borderWidth, props.height + 2 * props.borderWidth)}
                    onMouseDown={(e) => {
                        if (props.handleMouseDownResize) {
                            props.handleMouseDownResize(e, 'bottomRight')
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
                        props.handleMouseDown(e, props.isSelected, props.borderWidth)
                    }
                }}
            ></div>
        </div>
    )
}

export { ShapeObject }
