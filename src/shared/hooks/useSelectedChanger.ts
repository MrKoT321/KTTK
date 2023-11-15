import { useEffect, useRef } from 'react'
import { Selected, SlideType } from '../types/types'

type ChangerProps = {
    sel: Selected
    slide: SlideType
    setSelected(sel: Selected): void
}

const useSelectedChanger = (props: ChangerProps) => {
    const slideRef = useRef<HTMLLabelElement>(null)

    useEffect(() => {
        const element = slideRef.current

        const handleClick = (e: MouseEvent) => {
            if (e.ctrlKey) {
                props.sel.slidesIds = props.sel.slidesIds.filter(
                    (selectedId) => selectedId !== props.slide.id,
                )
                props.sel.slidesIds.push(props.slide.id)
            } else {
                props.sel.slidesIds = [props.slide.id]
            }
            props.setSelected(props.sel)
            console.log(props.sel.slidesIds)
        }

        console.log(element)

        if (element) {
            element.addEventListener('click', handleClick)
            return () => {
                element.removeEventListener('click', handleClick)
            }
        }
    }, [])
    return {
        slideRef,
    }
}

export { useSelectedChanger }
