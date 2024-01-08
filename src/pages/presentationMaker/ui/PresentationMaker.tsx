import { TopPanelWidget } from '../../../widgets/topPanelWidget'
import { SideBarWidget } from '../../../widgets/sideBarWidget'
import { WorkSpaceWidget } from '../../../widgets/workSpaceWidget'
import React, { useState } from 'react'
import { Editor } from '../../../shared/types/types'
import { minEditor } from '../../../shared/testData'
import { Layout } from '../../../widgets/layoutWidget'
import { useAppSelector } from '../../../shared/redux/store'
import { defaultCurrentSlide } from '../../../shared/defaultCurrentSlide'

const PresentationMaker = () => (
    <Layout
        topPanel={<TopPanelWidget setMouseState={setMouseState} />}
        sideBar={<SideBarWidget mouseLocation={mouseLocation} />}
        workSpace={
            <WorkSpaceWidget mouseState={mouseState} setMouseState={setMouseState} mouseLocation={mouseLocation} />
        }
        footer={<></>}
    />
)

export { PresentationMaker }
