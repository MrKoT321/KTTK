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
}

const drawPotentialObject = ({
    mouseState,
    currentMouseX,
    startMouseX,
    startMouseY,
    currentMouseY,
    setStyleObj,
    createPosition,
}: DrawPotentialObjectParams) => {
    switch (mouseState) {
        case 'creatingText':
        case 'creatingRect':
            setStyleObj({
                opacity: 100,
                top: createPosition(startMouseY, currentMouseY) + 2,
                left: createPosition(startMouseX, currentMouseX) + 2,
                width: Math.abs(currentMouseX - startMouseX),
                height: Math.abs(currentMouseY - startMouseY),
                borderColor: 'gray',
                borderRadius: 0,
                borderWidth: 2,
                borderStyle: 'solid',
            })
            break
        case 'creatingCircle':
            setStyleObj({
                opacity: 100,
                top: createPosition(startMouseY, currentMouseY) + 2,
                left: createPosition(startMouseX, currentMouseX) + 2,
                width: Math.abs(currentMouseX - startMouseX),
                height: Math.abs(currentMouseY - startMouseY),
                borderColor: 'gray',
                borderRadius: Math.abs(currentMouseX - startMouseX / 2),
                borderWidth: 2,
                borderStyle: 'solid',
            })
            break
        case 'creatingTriangle':
            break
    }
}

export { drawPotentialObject }
