const slideSizeRatio = 1.7

const topPanelHeight = 80
const footerHeight = 0
const sideBarWidth = 280
const layoutHeight = window.innerHeight
const layoutWidth = window.innerWidth
const sideSlideHeight = 120
const sideSlideContainerHeight = 120

const mainContentHeight = layoutHeight - topPanelHeight - footerHeight
const workSpaceWidth = layoutWidth - sideBarWidth

const sideSlideWidth = slideSizeRatio * sideSlideHeight
const sideSlideContainerWidth = slideSizeRatio * sideSlideContainerHeight
const currentSlideHeight = 0.7 * mainContentHeight
const currentSlideWidth = slideSizeRatio * currentSlideHeight
const currentSlideIndentX = (workSpaceWidth - currentSlideWidth) / 2
const currentSlideIndentY = (mainContentHeight - currentSlideHeight) / 2

const layoutParams = {
    topPanelHeight,
    layoutHeight,
    layoutWidth,
    footerHeight,
    mainContentHeight,
    sideBarWidth,
    workSpaceWidth,
    sideSlideWidth,
    sideSlideHeight,
    sideSlideContainerWidth,
    sideSlideContainerHeight,
    currentSlideWidth,
    currentSlideHeight,
    currentSlideIndentX,
    currentSlideIndentY,
}

const topPanelSizeStyle = {
    height: topPanelHeight,
}
const mainContentSizeStyle = {
    maxHeight: mainContentHeight,
    height: mainContentHeight,
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

const currentSlideSizeStyle = {
    width: currentSlideWidth,
    maxWidth: currentSlideWidth,
    minWidth: currentSlideWidth,
    height: currentSlideHeight,
    maxHeight: currentSlideHeight,
    minHeight: currentSlideHeight,
}

const widgetsSizeParams = {
    topPanelSizeStyle,
    mainContentSizeStyle,
    workSpaceSizeStyle,
    sideBarSizeStyle,
    sideSlideSizeStyle,
    sideSlideContainerSizeStyle,
    currentSlideSizeStyle,
}

export { layoutParams, widgetsSizeParams }
