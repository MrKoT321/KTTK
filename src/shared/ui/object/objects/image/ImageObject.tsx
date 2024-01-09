import { ObjectImageType } from '../../../../types/types'
import styles from '../../Object.module.css'
import { useAppActions, useAppSelector } from '../../../../redux/store'
import React, { CSSProperties } from 'react'
import { handleObjectClick, getQuadStyles } from '../../tools'

type ImageObjProps = ObjectImageType & {
    isSelected: boolean
    handleMouseDown?: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean, borderWidth: number) => void
    handleMouseDownResize?: (
        e: React.MouseEvent<HTMLDivElement>,
        quadPos: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight',
    ) => void
}

const ImageObject = (props: ImageObjProps) => {
    const { setSelectedObjectIds } = useAppActions()
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const styleParentObj: CSSProperties = {
        width: props.width + 2 * props.borderWidth,
        height: props.height + 2 * props.borderWidth,
        left: props.startX,
        top: props.startY,
    }
    const styleChildObj: CSSProperties = {
        width: props.width,
        height: props.height,
        borderStyle: props.borderStyle,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        transform: `rotate(${props.rotate}deg)`,
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
                onClick={(e) =>
                    handleObjectClick(e, props.isSelected, props.id, selectedObjectIds, setSelectedObjectIds)
                }
                onMouseDown={(e) => {
                    if (props.handleMouseDown) {
                        props.handleMouseDown(e, props.isSelected, props.borderWidth)
                    }
                }}
            >
                <img style={styleChildObj} alt={props.caption} src={props.imageSrc} draggable="false" />
            </div>
        </div>
    )
}

export { ImageObject }
