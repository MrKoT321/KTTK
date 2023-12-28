enum PresentationTypes {
    SET_PRESENTATION_NAME = 'SET_PRESENTATION_NAME',
}

type SetPresentationNameAction = {
    type: PresentationTypes.SET_PRESENTATION_NAME
    payload: string
}

type ActionTypes = SetPresentationNameAction

export { PresentationTypes, type ActionTypes }
