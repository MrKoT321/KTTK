import React, { ReactNode } from 'react'
import styles from './Layout.module.css'
import { layoutParams as lp, widgetsSizeParams as wsp } from '../../../shared/tools/layoutParams'
import { MouseLocations } from 'shared/types/types'
import { useAppActions } from 'shared/redux/store'

type LayoutProps = {
    topPanel: ReactNode
    sideBar: ReactNode
    workSpace: ReactNode
    footer: ReactNode
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, location: MouseLocations) => void
}

const Layout = ({ topPanel, sideBar, workSpace, footer }: LayoutProps) => {
    const { setMouseLocation } = useAppActions()
    return (
        <div className={styles.layout}>
            <div className={styles.topPanel} style={wsp.topPanelSizeStyle} onClick={() => setMouseLocation('topPanel')}>
                {topPanel}
            </div>
            <div className={styles.mainContent} style={wsp.mainContentSizeStyle}>
                <div
                    className={styles.sideBar}
                    style={wsp.sideBarSizeStyle}
                    onClick={(e) => setMouseLocation('sideBar')}
                >
                    {sideBar}
                </div>
                <div
                    className={styles.workSpace}
                    style={wsp.workSpaceSizeStyle}
                    onClick={(e) => setMouseLocation('workSpace')}
                >
                    {workSpace}
                </div>
            </div>
            <div className={styles.footer} style={{ height: lp.footerHeight }}>
                {footer}
            </div>
        </div>
    )
}

export { Layout }
