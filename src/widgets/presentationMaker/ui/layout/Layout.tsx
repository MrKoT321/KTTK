import { ReactNode } from 'react'
import styles from './Layout.module.css'
import { layoutParams as lp, widgetsSizeParams as wsp } from '../../../../shared/tools/layoutParams'

type LayoutProps = {
    topPanel: ReactNode
    sideBar: ReactNode
    workSpace: ReactNode
    footer: ReactNode
}

const Layout = ({ topPanel, sideBar, workSpace, footer }: LayoutProps) => {
    console.log(lp.mainContentMaxHeight)
    return (
        <div className={styles.layout}>
            <div className={styles.topPanel} style={wsp.topPanelSizeStyle}>
                {topPanel}
            </div>
            <div className={styles.mainContent} style={wsp.mainContentSizeStyle}>
                <div className={styles.sideBar} style={wsp.sideBarSizeStyle}>
                    {sideBar}
                </div>
                <div className={styles.workSpace} style={wsp.workSpaceSizeStyle}>
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
