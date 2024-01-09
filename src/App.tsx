import { useAppSelector } from './shared/redux/store'
import { PresentationMaker } from './pages/presentationMaker'
import { SlideShow } from './widgets/slideShowWidget'

const App = () => {
    const isSlideShow = useAppSelector((state) => state.slideShow.isSlideShow)

    return (
        <>
            {isSlideShow && <SlideShow />}
            {!isSlideShow && <PresentationMaker />}
        </>
    )
}

export default App
