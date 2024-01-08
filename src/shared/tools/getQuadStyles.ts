import { CSSProperties } from 'react'

const getQuadStyles = (objectWidth: number) => {
    const quadStyle: CSSProperties = {
        left: objectWidth - 5,
        top: -5,
    }

    return quadStyle
}

export { getQuadStyles }
