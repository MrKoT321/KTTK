import { useEffect, useRef } from 'react'

const useDraggableList = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const itemRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        console.log(containerRef)
        console.log(itemRef)
    }, [])

    return {
        containerRef,
        itemRef,
    }
}

export { useDraggableList }
