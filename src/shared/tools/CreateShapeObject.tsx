import { ObjectShapeType } from '../types/types'

const createShapeObject = (props: ObjectShapeType) => {
    switch (props.type) {
        case 'rect':
            return {
                background: props.shapeBgColor,
                width: props.width,
                height: props.height,
                borderStyle: props.borderStyle,
                borderWidth: props.borderWidth,
                borderColor: props.borderColor,
            }
        case 'circle':
            return {
                background: props.shapeBgColor,
                width: props.width,
                height: props.height,
                borderStyle: props.borderStyle,
                borderWidth: props.borderWidth,
                borderColor: props.borderColor,
                borderRadius: props.radius,
            }
        case 'triangle':
        case 'line':
            break
    }
}

export { createShapeObject }
