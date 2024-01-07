import { ObjectImageType } from '../../../../types/types'
import styles from '../../Object.module.css'
import { useAppActions, useAppSelector } from '../../../../redux/store'
import React from 'react'

type ImageObjProps = ObjectImageType & {
    isSelected: boolean
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
    handleMouseDownResize: (arg: React.MouseEvent<HTMLDivElement>) => void
}

const ImageObject = (props: ImageObjProps) => {
    const { setSelectedObjectIds } = useAppActions()
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const styleObj = {
        left: props.startX,
        top: props.startY,
    }
    const styleParentObj = {
        width: props.width + props.borderWidth,
        height: props.height + props.borderWidth,
        borderStyle: props.borderStyle,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
    }
    const styleChildObj = {
        width: props.width,
        height: props.height,
        left: props.startX,
        top: props.startY,
    }
    const quadStyle = {
        left: props.width - 5,
        top: -5,
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
        <div style={styleObj} className={`${styles.object} ${props.isSelected ? styles.selected : styles.nonSelected}`}>
            {props.isSelected && (
                <div
                    className={styles.quad}
                    style={quadStyle}
                    onMouseDown={(e) => props.handleMouseDownResize(e)}
                ></div>
            )}
            <div
                style={styleParentObj}
                onClick={handleClick}
                onMouseDown={(e) => props.handleMouseDown(e, props.isSelected)}
            >
                <img style={styleChildObj} alt={props.caption} src={props.imageSrc} />
            </div>
        </div>
    )
}

export { ImageObject }
