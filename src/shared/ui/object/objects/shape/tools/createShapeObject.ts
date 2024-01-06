import { ObjectShapeType } from '../../../../../types/types'

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
        case 'line':
            return {
                width: props.width,
                height: props.height,
                background: `linear-gradient(to top ${props.direction},
                    rgba(0,0,0,0) 0%,
                    rgba(0,0,0,0) calc(50% - 0.8px),
                    ${props.shapeBgColor} 50%,
                    rgba(0,0,0,0) calc(50% + 0.8px),
                    rgba(0,0,0,0) 100%)`,
            }
        case 'triangle':
            break
    }
}

export { createShapeObject }
