import { TopPanelWidget } from '../../../widgets/topPanelWidget'
import { SideBarWidget } from '../../../widgets/sideBarWidget'
import { WorkSpaceWidget } from '../../../widgets/workSpaceWidget'
import React, { useState } from 'react'
import { Editor } from '../../../shared/types/types'
import { minEditor } from '../../../shared/testData'
import { Layout } from '../../../widgets/layoutWidget'
import { useAppSelector } from '../../../shared/redux/store'
import { defaultCurrentSlide } from '../../../shared/defaultCurrentSlide'

const PresentationMaker = () => {
    const { currentSlideId, slidesMap } = useAppSelector((state) => state.slides)
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide
    const [presentation, setPresentation] = useState<Editor>(minEditor)
    const [currentSlideBg, setCurrentSlideBg] = useState(currentSlide.backgroundValue)

    const toolMenuTools = {
        currentSlideBg,
        setCurrentSlideBg,
    }
    const presentationsObjTools = {
        setPresentation: setPresentation,
        presentation: presentation,
    }

    return (
        <Layout
            topPanel={<TopPanelWidget toolMenuTools={toolMenuTools} presentationsObjTools={presentationsObjTools} />}
            sideBar={<SideBarWidget setCurrentSlideBg={setCurrentSlideBg} />}
            workSpace={<WorkSpaceWidget currentSlideBg={currentSlideBg} />}
            footer={<></>}
        />
    )
}

export { PresentationMaker }
