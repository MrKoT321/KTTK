import { HistoryPosDirectionType, SlideType } from '../../shared/types/types'

export const parsePresentationHistory = (
    direction: HistoryPosDirectionType,
    historyPosition: number,
    presentationHistory: string[],
    setHistoryPosDirection: (direction: HistoryPosDirectionType) => void,
    setHistoryPosition: (newHistoryPosition: number) => void,
    setSlides: (newSlidesMap: Map<string, SlideType>) => void,
    setCurrentSlide: (id: string) => void,
    setSelectedSlideIds: (newSelectedSlideIds: string[]) => void,
    setSelectedObjectIds: (newSelectedObjectIds: number[]) => void,
    setSlidesOrder: (newOrder: string[]) => void,
    addSlide: (newSlidesMap: Map<string, SlideType>, newOrder: string[]) => void,
    setPresentationName: (name: string) => void,
) => {
    const historyLength = presentationHistory.length
    if (presentationHistory.length > 0) {
        try {
            JSON.parse(presentationHistory[historyLength - 1])
        } catch {
            alert('История ваших действий почему-то пуста')
            return
        }
        let parsedResult
        if (direction === 'down' && historyPosition - 1 >= 0) {
            parsedResult = JSON.parse(presentationHistory[historyPosition - 1])
            setHistoryPosition(historyPosition - 1)
        }
        if (direction === 'up' && historyPosition + 1 < historyLength) {
            parsedResult = JSON.parse(presentationHistory[historyPosition + 1])
            setHistoryPosition(historyPosition + 1)
        }
        if (parsedResult) {
            if (
                'selected' in parsedResult &&
                'name' in parsedResult &&
                'slidesMap' in parsedResult &&
                'slidesOrder' in parsedResult &&
                'currentSlideId' in parsedResult
            ) {
                if (parsedResult.slidesMap) {
                    const newSlidesMap = new Map<string, SlideType>()
                    for (const keyOfSlidesMap in parsedResult.slidesMap) {
                        newSlidesMap.set(keyOfSlidesMap, parsedResult.slidesMap[keyOfSlidesMap])
                    }
                    const newOrder = parsedResult.slidesOrder
                    setSlides(newSlidesMap)
                    setCurrentSlide(parsedResult.currentSlideId)
                    setSelectedSlideIds([...parsedResult.selected.selectedSlideIds])
                    setSelectedObjectIds([...parsedResult.selected.selectedObjectIds])
                    setSlidesOrder(parsedResult.slidesOrder)
                } else addSlide(new Map(), [])
                setPresentationName(parsedResult.name || '')
            } else {
                alert('Ошибка декодирования')
            }
        }
    }
    setHistoryPosDirection('none')
}
