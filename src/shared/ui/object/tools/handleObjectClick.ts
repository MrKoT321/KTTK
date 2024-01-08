import React from 'react'

export const handleObjectClick = (
    e: React.MouseEvent<HTMLDivElement>,
    isObjectSelected: boolean,
    objectId: number,
    selectedObjectIds: number[],
    setSelectedObjectIds: (newSelectedObjectIds: number[]) => void,
) => {
    if (!isObjectSelected) {
        let newSelected = selectedObjectIds
        if (e.ctrlKey) {
            newSelected.push(objectId)
        } else {
            newSelected = [objectId]
        }
        setSelectedObjectIds(newSelected)
    } else {
        if (e.ctrlKey) {
            const newSelected = selectedObjectIds.filter((id) => id != objectId)
            setSelectedObjectIds(newSelected)
        }
    }
}
