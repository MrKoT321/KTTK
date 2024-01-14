import React, { useEffect } from 'react'

type HookParams = {
    callerRef: React.RefObject<Element>
    ref: React.RefObject<Element>
    callback: () => void
}

export const useOutsideClick = ({ callerRef, ref, callback }: HookParams) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node) && callerRef.current !== event.target) {
                callback()
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [ref, callback])
}
