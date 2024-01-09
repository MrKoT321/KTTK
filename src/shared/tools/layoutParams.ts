const windowScreenHeight = window.screen.height
const windowScreenWidth = window.screen.width
const slideSizeRatio = windowScreenWidth / windowScreenHeight

const topPanelHeight = 80
const footerHeight = 0
const sideBarWidth = 280
const layoutHeight = window.innerHeight
const layoutWidth = window.innerWidth

const mainContentHeight = layoutHeight - topPanelHeight - footerHeight
const workSpaceWidth = layoutWidth - sideBarWidth

const currentSlideHeight = 0.7 * layoutHeight
const currentSlideWidth = slideSizeRatio * currentSlideHeight
const currentSlideIndentX = (workSpaceWidth - currentSlideWidth) / 2
const currentSlideIndentY = (mainContentHeight - currentSlideHeight) / 2

const sideSlideHeight = 0.22 * currentSlideHeight
const sideSlideContainerHeight = 0.225 * currentSlideHeight
const sideSlideWidth = slideSizeRatio * sideSlideHeight
const sideSlideContainerWidth = slideSizeRatio * sideSlideContainerHeight

const sideSlideScale = sideSlideHeight / currentSlideHeight
const slideShowScale = windowScreenHeight / currentSlideHeight

const layoutParams = {
    topPanelHeight,
    layoutHeight,
    layoutWidth,
    windowScreenHeight,
    windowScreenWidth,
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
    sideSlideScale,
    slideShowScale,
    slideSizeRatio,
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

const slideShowSlideSizeStyle = {
    width: windowScreenWidth,
    maxWidth: windowScreenWidth,
    minWidth: windowScreenWidth,
    height: windowScreenHeight,
    maxHeight: windowScreenHeight,
    minHeight: windowScreenHeight,
}

const widgetsSizeParams = {
    topPanelSizeStyle,
    mainContentSizeStyle,
    workSpaceSizeStyle,
    sideBarSizeStyle,
    sideSlideSizeStyle,
    sideSlideContainerSizeStyle,
    currentSlideSizeStyle,
    slideShowSlideSizeStyle,
}

export { layoutParams, widgetsSizeParams }
