import { Selected } from '../../../types/types'
import styles from '../Object.module.css'
import { TextObjProps } from '../../../types/TextObjProps'
import { createTextObject } from '../../../tools/CreateTextObject'

const TextObject = (props: TextObjProps) => {
    const styleObj = createTextObject(props)

    return (
        <div
            style={styleObj}
            className={styles.object}
            onClick={() => {
                const sel: Selected = {
                    slidesIds: [...props.selected.slidesIds],
                    objectsIds: [props.id],
                }
                props.setSelected(sel)
            }}
        >
            <span>{props.value}</span>
        </div>
    )
}

export { TextObject }
