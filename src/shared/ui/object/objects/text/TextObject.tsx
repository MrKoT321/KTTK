import { ObjectTextType, Selected } from '../../../../types/types'
import styles from '../../Object.module.css'
import { createTextObject } from './tools/createTextObject'

type TextObjProps = ObjectTextType & {
    selected: Selected
    setSelected(selected: Selected): void
    isSelected: boolean
}

const TextObject = (props: TextObjProps) => {
    // const parentObj = {
    //     left: props.startX,
    //     top: props.startY,
    //     userSelect: userSelectValue,
    // }
    // TODO разобраться в типах
    const childObj = createTextObject(props)

    const handleClick = () => {
        const sel: Selected = {
            slidesIds: [...props.selected.slidesIds],
            objectsIds: [props.id],
        }
        props.setSelected(sel)
    }

    return (
        <div
            className={`${styles.object} ${props.isSelected ? styles.selected : styles.nonSelected}`}
            style={{ left: props.startX, top: props.startY, userSelect: 'text' }}
            onClick={handleClick}
        >
            <div style={childObj}>
                <span>{props.value}</span>
            </div>
        </div>
    )
}

export { TextObject }
