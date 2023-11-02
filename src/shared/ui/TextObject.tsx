import { ObjectTextType } from '../types/types'

const TextObject = (props: ObjectTextType) => {
    const i = 0
    return (
        <div>
            <span>{props.value}</span>
        </div>
    )
}

export { TextObject }
