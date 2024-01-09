import { useAppActions, useAppSelector } from '../../../shared/redux/store'
import React, { useEffect } from 'react'
import { SlideShowSlide } from './slideShowSlide/SlideShowSlide'

const SlideShow = () => {
    const { isSlideShow, isFullscreen, currentSlideNumber } = useAppSelector((state) => state.slideShow)
    const slidesMap = useAppSelector((state) => state.slides.slidesMap)
    const { setIsSlideShow, setCurrentSlideNumber, setIsFullscreen } = useAppActions()
    const slides = Array.from(slidesMap.values())

    useEffect(() => {
        const handleEscPressed = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault()
                setIsFullscreen(false)
                setIsSlideShow(false)
            }
        }
        document.addEventListener('keydown', handleEscPressed)
        return () => {
            document.removeEventListener('keydown', handleEscPressed)
        }
    }, [isFullscreen, isSlideShow])

    useEffect(() => {
        if (isFullscreen) {
            document.documentElement.requestFullscreen()
        }
    }, [isFullscreen])

    useEffect(() => {
        const handleNawButtonsPressed = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' && currentSlideNumber > 0) {
                setCurrentSlideNumber(currentSlideNumber - 1)
            } else if (e.key === 'ArrowRight' && currentSlideNumber < slidesMap.size - 1) {
                setCurrentSlideNumber(currentSlideNumber + 1)
            }
        }
        document.addEventListener('keydown', handleNawButtonsPressed)
        return () => {
            document.removeEventListener('keydown', handleNawButtonsPressed)
        }
    }, [currentSlideNumber])

    return <SlideShowSlide slide={slides[currentSlideNumber]} />
}

export { SlideShow }
