import { useAppSelector } from './shared/redux/store'
import { PresentationMaker } from './pages/presentationMaker'
import { SlideShow } from './widgets/slideShowWidget'
import { TestWidget } from './widgets/testWidget'

const App = () => {
    const { isSlideShow, isTest } = useAppSelector((state) => state.slideShow)

    return (
        <>
            {isSlideShow && <SlideShow />}
            {!isSlideShow && !isTest && <PresentationMaker />}
            {isTest && <TestWidget />}
        </>
    )
}

export default App
