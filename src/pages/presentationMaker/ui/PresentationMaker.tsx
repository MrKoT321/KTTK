import { TopPanelWidget } from '../../../widgets/topPanelWidget'
import { SideBarWidget } from '../../../widgets/sideBarWidget'
import { WorkSpaceWidget } from '../../../widgets/workSpaceWidget'
import { Layout } from '../../../widgets/layoutWidget'
import { useAppActions, useAppSelector } from '../../../shared/redux/store'
import { useEffect } from 'react'
import { parsePresentationHistory } from '../../tools/parsePresentationHistory'
import { MAX_HISTORY_LENGTH } from '../../tools/consts'

const PresentationMaker = () => {
    const { presentationHistory, historyPosition, historyPosDirection } = useAppSelector((state) => state.history)
    const presentationName = useAppSelector((state) => state.presentationName.name)
    const selected = useAppSelector((state) => state.selected)
    const { slidesMap, slidesOrder, currentSlideId } = useAppSelector((state) => state.slides)
    const {
        setPresentationHistory,
        addSlide,
        setSlides,
        setCurrentSlide,
        setSelectedSlideIds,
        setPresentationName,
        setSlidesOrder,
        setHistoryPosition,
        setHistoryPosDirection,
        setSelectedObjectIds,
    } = useAppActions()

    useEffect(() => {
        if (historyPosDirection === 'none') {
            const newPresentationHistory = [...presentationHistory]
            if (newPresentationHistory.length === MAX_HISTORY_LENGTH) {
                newPresentationHistory.splice(0, 1)
            }
            const jsonSlidesMap = Object.fromEntries(slidesMap)
            const history = {
                name: presentationName,
                slidesOrder: slidesOrder,
                slidesMap: jsonSlidesMap,
                currentSlideId: currentSlideId,
                selected: selected,
            }
            const potentialObject = JSON.stringify(history)
            if (potentialObject !== newPresentationHistory[newPresentationHistory.length - 1]) {
                newPresentationHistory.push(potentialObject)
                setPresentationHistory(newPresentationHistory)
                if (historyPosition + 1 < newPresentationHistory.length) {
                    setHistoryPosition(historyPosition + 1)
                }
            }
        }
        if (historyPosDirection === 'up' || historyPosDirection === 'down')
            parsePresentationHistory(
                historyPosDirection,
                historyPosition,
                presentationHistory,
                setHistoryPosDirection,
                setHistoryPosition,
                setSlides,
                setCurrentSlide,
                setSelectedSlideIds,
                setSelectedObjectIds,
                setSlidesOrder,
                addSlide,
                setPresentationName,
            )
    }, [historyPosDirection, slidesOrder, presentationName, slidesMap, selected])

    console.log('presentationHistory = ', presentationHistory)
    console.log('historyPosition = ', historyPosition)
    console.log('historyPosDirection = ', historyPosDirection)
    console.log('---------------------------------------------------------------')

    return (
        <Layout
            topPanel={<TopPanelWidget />}
            sideBar={<SideBarWidget />}
            workSpace={<WorkSpaceWidget />}
            footer={<></>}
        />
    )
}

export { PresentationMaker }
