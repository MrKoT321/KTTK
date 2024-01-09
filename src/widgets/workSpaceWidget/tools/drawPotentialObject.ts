import { MouseStates } from '../../../shared/types/types'
import { DrawStyle } from '../../../shared/types/devTypes'

type DrawPotentialObjectParams = {
    mouseState: MouseStates
    currentMouseX: number
    currentMouseY: number
    startMouseX: number
    startMouseY: number
    setStyleObj: (styleObj: DrawStyle) => void
    createPosition: (startMousePos: number, currentMousePos: number) => number
    direction?: 'right' | 'left'
    setDirection?: (direction: 'right' | 'left') => void
}

const drawPotentialObject = ({
    mouseState,
    currentMouseX,
    startMouseX,
    startMouseY,
    currentMouseY,
    setStyleObj,
    createPosition,
    direction,
    setDirection,
}: DrawPotentialObjectParams) => {
    switch (mouseState) {
        case 'creatingText':
        case 'creatingRect':
            setStyleObj({
                top: createPosition(startMouseY, currentMouseY) + 2,
                left: createPosition(startMouseX, currentMouseX) + 2,
                width: Math.abs(currentMouseX - startMouseX) - 4,
                height: Math.abs(currentMouseY - startMouseY) - 2,
                borderColor: 'gray',
                borderRadius: 0,
                borderWidth: 2,
                borderStyle: 'solid',
            })
            break
        case 'creatingCircle':
            setStyleObj({
                top: createPosition(startMouseY, currentMouseY) + 2,
                left: createPosition(startMouseX, currentMouseX) + 2,
                width: Math.abs(currentMouseX - startMouseX) - 4,
                height: Math.abs(currentMouseY - startMouseY) - 4,
                borderColor: 'gray',
                borderRadius: Math.abs(currentMouseX - startMouseX / 2),
                borderWidth: 2,
                borderStyle: 'solid',
            })
            break
        case 'creatingLine':
            if (setDirection) {
                if (
                    direction === 'left' &&
                    ((startMouseY > currentMouseY && startMouseX > currentMouseX) ||
                        (startMouseY < currentMouseY && startMouseX < currentMouseX))
                ) {
                    setDirection('right')
                }
                if (
                    direction === 'right' &&
                    ((startMouseY > currentMouseY && startMouseX < currentMouseX) ||
                        (startMouseY < currentMouseY && startMouseX > currentMouseX))
                ) {
                    setDirection('left')
                }
            }
            setStyleObj({
                top: createPosition(startMouseY, currentMouseY) + 2,
                left: createPosition(startMouseX, currentMouseX) + 2,
                width: Math.abs(currentMouseX - startMouseX),
                height: Math.abs(currentMouseY - startMouseY),
                borderColor: '#00000000',
                borderRadius: 0,
                borderWidth: 0,
                borderStyle: 'none',
            })
            break
    }
}

export { drawPotentialObject }
