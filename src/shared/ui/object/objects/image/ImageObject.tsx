import { ObjectImageType, Selected } from '../../../../types/types'
import styles from '../../Object.module.css'

type ImageObjProps = ObjectImageType & {
    selected: Selected
    setSelected(selected: Selected): void
    isSelected: boolean
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
    handleMouseDownResize: (arg: React.MouseEvent<HTMLDivElement>) => void
}

const ImageObject = (props: ImageObjProps) => {
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

    const handleClick = () => {
        const sel: Selected = {
            slidesIds: [...props.selected.slidesIds],
            objectsIds: [props.id],
        }
        props.setSelected(sel)
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
