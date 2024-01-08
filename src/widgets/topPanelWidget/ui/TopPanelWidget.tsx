import { PresentationName } from './presentationName'
import { ToolMenu } from './toolMenu'
import { ToolBar } from './toolBar'
import { EditTools } from './editTools'
import styles from './TopPanelWidget.module.css'
import React from 'react'

const TopPanelWidget = () => (
    <>
        <div className={styles.top}>
            <PresentationName />
            <ToolBar />
        </div>
        <div className={styles.bottom}>
            <ToolMenu />
            <EditTools />
        </div>
    </>
)

export { TopPanelWidget }
