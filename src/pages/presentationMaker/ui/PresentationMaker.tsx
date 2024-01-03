import { TopPanelWidget } from '../../../widgets/topPanelWidget'
import { SideBarWidget } from '../../../widgets/sideBarWidget'
import { WorkSpaceWidget } from '../../../widgets/workSpaceWidget'
import React, { useState } from 'react'
import { Editor, MouseLocations, MouseStates } from '../../../shared/types/types'
import { minEditor } from '../../../shared/testData'
import { Layout } from '../../../widgets/layoutWidget'
import { useAppSelector } from '../../../shared/redux/store'

const PresentationMaker = () => {
    const currentSlide = useAppSelector((state) => state.slides.currentSlide)
    const [presentation, setPresentation] = useState<Editor>(minEditor)
    const [mouseState, setMouseState] = useState<MouseStates>('cursor')
    const [mouseLocation, setMouseLocation] = useState<MouseLocations>('workSpace')
    const [currentSlideBg, setCurrentSlideBg] = useState(currentSlide.backgroundValue)

    const toolMenuTools = {
        currentSlideBg,
        setCurrentSlideBg,
    }
    const presentationsObjTools = {
        setPresentation: setPresentation,
        presentation: presentation,
    }

    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, location: MouseLocations) => {
        setMouseLocation(location)
    }

    return (
        <Layout
            topPanel={
                <TopPanelWidget
                    toolMenuTools={toolMenuTools}
                    setMouseState={setMouseState}
                    presentationsObjTools={presentationsObjTools}
                />
            }
            sideBar={<SideBarWidget setCurrentSlideBg={setCurrentSlideBg} mouseLocation={mouseLocation} />}
            workSpace={
                <WorkSpaceWidget
                    mouseState={mouseState}
                    setMouseState={setMouseState}
                    currentSlideBg={currentSlideBg}
                    mouseLocation={mouseLocation}
                />
            }
            footer={<></>}
            onClick={onClick}
        />
    )
}

export { PresentationMaker }
