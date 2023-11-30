import { MouseStates } from '../../editorWidget/ui/EditorWidget'

type StyleObj = {
    opacity: number
    left: number
    top: number
    width: number
    height: number
    borderColor: string
    borderRadius: number
    borderWidth: number
    borderStyle: string
}

type DrawPotentialObjectProps = {
    mouseState: MouseStates
    currentMouseX: number
    currentMouseY: number
    startMouseX: number
    startMouseY: number
    setStyleObj: (styleObj: StyleObj) => void
    createPosition: (startMousePos: number, currentMousePos: number) => number
}

const DrawPotentialObject = ({
    mouseState,
    currentMouseX,
    startMouseX,
    startMouseY,
    currentMouseY,
    setStyleObj,
    createPosition,
}: DrawPotentialObjectProps) => {
    switch (mouseState) {
        case 'creatingText':
        case 'creatingRect':
            setStyleObj({
                opacity: 100,
                top: createPosition(startMouseY, currentMouseY),
                left: createPosition(startMouseX, currentMouseX),
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
                top: createPosition(startMouseY, currentMouseY),
                left: createPosition(startMouseX, currentMouseX),
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

export { DrawPotentialObject }
