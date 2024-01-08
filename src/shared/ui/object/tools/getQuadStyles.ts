import { CSSProperties } from 'react'

export const getQuadStyles = (objectWidth: number) => {
    const quadStyle: CSSProperties = {
        left: objectWidth - 5,
        top: -5,
    }

    return quadStyle
}
