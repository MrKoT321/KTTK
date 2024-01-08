import { MouseStates } from '../../../shared/types/types'

export const getFunctionsForDropDownLabels = (
    setMouseState: (mouseState: MouseStates) => void,
    setIsDropDownVisible: (isVisible: boolean) => void,
) => [
    () => {
        setMouseState('creatingRect')
        setIsDropDownVisible(false)
    },
    () => {
        setMouseState('creatingCircle')
        setIsDropDownVisible(false)
    },
]
