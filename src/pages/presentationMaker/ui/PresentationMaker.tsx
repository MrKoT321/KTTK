import { TopPanelWidget } from '../../../widgets/topPanelWidget'
import { SideBarWidget } from '../../../widgets/sideBarWidget'
import { WorkSpaceWidget } from '../../../widgets/workSpaceWidget'
import React, { useState } from 'react'
import { MouseLocations, MouseStates } from '../../../shared/types/types'
import { Layout } from '../../../widgets/layoutWidget'

const PresentationMaker = () => {
    const [mouseState, setMouseState] = useState<MouseStates>('cursor')
    const [mouseLocation, setMouseLocation] = useState<MouseLocations>('workSpace')

    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, location: MouseLocations) => {
        setMouseLocation(location)
    }

    return (
        <Layout
            topPanel={<TopPanelWidget setMouseState={setMouseState} />}
            sideBar={<SideBarWidget mouseLocation={mouseLocation} />}
            workSpace={
                <WorkSpaceWidget mouseState={mouseState} setMouseState={setMouseState} mouseLocation={mouseLocation} />
            }
            footer={<></>}
            onClick={onClick}
        />
    )
}

export { PresentationMaker }
