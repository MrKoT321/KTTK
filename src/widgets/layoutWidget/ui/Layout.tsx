import React, { ReactNode } from 'react'
import styles from './Layout.module.css'
import { layoutParams as lp, widgetsSizeParams as wsp } from '../../../shared/tools/layoutParams'
import { MouseLocations } from 'shared/types/types'

type LayoutProps = {
    topPanel: ReactNode
    sideBar: ReactNode
    workSpace: ReactNode
    footer: ReactNode
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, location: MouseLocations) => void
}

const Layout = ({ topPanel, sideBar, workSpace, footer, onClick }: LayoutProps) => (
    <div className={styles.layout}>
        <div className={styles.topPanel} style={wsp.topPanelSizeStyle} onClick={(e) => onClick(e, 'topPanel')}>
            {topPanel}
        </div>
        <div className={styles.mainContent} style={wsp.mainContentSizeStyle}>
            <div className={styles.sideBar} style={wsp.sideBarSizeStyle} onClick={(e) => onClick(e, 'sideBar')}>
                {sideBar}
            </div>
            <div className={styles.workSpace} style={wsp.workSpaceSizeStyle} onClick={(e) => onClick(e, 'workSpace')}>
                {workSpace}
            </div>
        </div>
        <div className={styles.footer} style={{ height: lp.footerHeight }}>
            {footer}
        </div>
    </div>
)

export { Layout }
