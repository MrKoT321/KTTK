import { PresentationName } from './presentationName'
import { MouseStates } from '../../../shared/types/types'
import { ToolMenu } from './toolMenu'
import { ToolBar } from './toolBar'
import { EditTools } from './editTools'
import styles from './TopPanelWidget.module.css'
import React from 'react'

type TopPanelWidgetProps = {
    setMouseState: (mouseState: MouseStates) => void
}

const TopPanelWidget = ({ setMouseState }: TopPanelWidgetProps) => (
    <>
        <div className={styles.top}>
            <PresentationName />
            <ToolBar />
        </div>
        <div className={styles.bottom}>
            <ToolMenu setMouseState={setMouseState} />
            <EditTools />
        </div>
    </>
)

export { TopPanelWidget }
