const topPanelHeight = 80
const footerHeight = 10
const sideBarWidth = 280
const layoutHeight = window.innerHeight
const layoutWidth = window.innerWidth

const mainContentMaxHeight = layoutHeight - topPanelHeight - footerHeight
const workSpaceWidth = layoutWidth - sideBarWidth

const layoutParams = {
    topPanelHeight,
    layoutHeight,
    layoutWidth,
    footerHeight,
    mainContentMaxHeight,
    sideBarWidth,
    workSpaceWidth,
}

const topPanelSizeStyle = {
    height: topPanelHeight,
}
const mainContentSizeStyle = {
    maxHeight: mainContentMaxHeight,
    height: mainContentMaxHeight,
}
const workSpaceSizeStyle = {
    width: workSpaceWidth,
    maxWidth: workSpaceWidth,
}
const sideBarSizeStyle = {
    minWidth: sideBarWidth,
    width: sideBarWidth,
}

const widgetsSizeParams = {
    topPanelSizeStyle,
    mainContentSizeStyle,
    workSpaceSizeStyle,
    sideBarSizeStyle,
}

export { layoutParams, widgetsSizeParams }
