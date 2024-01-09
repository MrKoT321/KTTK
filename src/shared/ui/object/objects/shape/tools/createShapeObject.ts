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
                transform: `rotate(${props.rotate}deg)`,
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
                transform: `rotate(${props.rotate}deg)`,
            }
        case 'line':
            return {
                width: props.width,
                height: props.height,
                background: `linear-gradient(to top ${props.direction},
                    rgba(0,0,0,0) 0%,
                    rgba(0,0,0,0) calc(50% - ${props.lineWidth / 2}px),
                    ${props.shapeBgColor} 50%,
                    rgba(0,0,0,0) calc(50% + ${props.lineWidth / 2}px),
                    rgba(0,0,0,0) 100%)`,
                transform: `rotate(${props.rotate}deg)`,
            }
    }
}

export { createShapeObject }
