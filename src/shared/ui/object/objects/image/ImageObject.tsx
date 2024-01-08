import { ObjectImageType } from '../../../../types/types'
import styles from '../../Object.module.css'
import { useAppActions, useAppSelector } from '../../../../redux/store'
import React, { CSSProperties } from 'react'
import { handleObjectClick, getQuadStyles } from '../../tools'

type ImageObjProps = ObjectImageType & {
    isSelected: boolean
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
    handleMouseDownResize: (arg: React.MouseEvent<HTMLDivElement>) => void
}

const ImageObject = (props: ImageObjProps) => {
    const { setSelectedObjectIds } = useAppActions()
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const styleObj: CSSProperties = {
        left: props.startX,
        top: props.startY,
        boxSizing: `border-box`,
    }
    const styleParentObj: CSSProperties = {
        width: props.width + props.borderWidth,
        height: props.height + props.borderWidth,
        borderStyle: props.borderStyle,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        boxSizing: `border-box`,
    }
    const styleChildObj: CSSProperties = {
        width: props.width,
        height: props.height,
        left: props.startX,
        top: props.startY,
    }

    return (
        <div style={styleObj} className={`${styles.object} ${props.isSelected ? styles.selected : styles.nonSelected}`}>
            {props.isSelected && (
                <div
                    className={styles.quad}
                    style={getQuadStyles(props.width)}
                    onMouseDown={(e) => props.handleMouseDownResize(e)}
                ></div>
            )}
            <div
                style={styleParentObj}
                onClick={(e) =>
                    handleObjectClick(e, props.isSelected, props.id, selectedObjectIds, setSelectedObjectIds)
                }
                onMouseDown={(e) => props.handleMouseDown(e, props.isSelected)}
            >
                <img style={styleChildObj} alt={props.caption} src={props.imageSrc} />
            </div>
        </div>
    )
}

export { ImageObject }
