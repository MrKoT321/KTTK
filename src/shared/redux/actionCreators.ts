import { PresentationTypes } from './actionTypes'

const setPresentationName = (name: string) => {
    return {
        type: PresentationTypes.SET_PRESENTATION_NAME,
        payload: name,
    }
}

export { setPresentationName }
