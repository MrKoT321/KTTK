const topPanelHeight = 80
const footerHeight = 10
const sideBarWidth = 280
const layoutHeight = window.innerHeight
const layoutWidth = window.innerWidth
const sideSlideWidth = 180
const sideSlideHeight = 100
const sideSlideContainerWidth = 200
const sideSlideContainerHeight = 120
// const currentSlideWidth =
// const currentSlideHeight =

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
    sideSlideWidth,
    sideSlideHeight,
    sideSlideContainerWidth,
    sideSlideContainerHeight,
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
const sideSlideSizeStyle = {
    width: sideSlideWidth,
    maxWidth: sideSlideWidth,
    minWidth: sideSlideWidth,
    height: sideSlideHeight,
    maxHeight: sideSlideHeight,
    minHeight: sideSlideHeight,
}

const sideSlideContainerSizeStyle = {
    width: sideSlideContainerWidth,
    maxWidth: sideSlideContainerWidth,
    minWidth: sideSlideContainerWidth,
    height: sideSlideContainerHeight,
    maxHeight: sideSlideContainerHeight,
    minHeight: sideSlideContainerHeight,
}


const widgetsSizeParams = {
    topPanelSizeStyle,
    mainContentSizeStyle,
    workSpaceSizeStyle,
    sideBarSizeStyle,
    sideSlideSizeStyle,
    sideSlideContainerSizeStyle
}

export { layoutParams, widgetsSizeParams }
