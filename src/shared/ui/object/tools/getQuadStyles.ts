import { CSSProperties } from 'react'

export const getQuadStyles = (objectWidth: number, objectHeigth: number) => {
    const quadStyle: CSSProperties = {
        left: objectWidth - 5,
        top: objectHeigth - 5,
    }

    return quadStyle
}
