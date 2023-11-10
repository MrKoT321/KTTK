import styles from './WorkSpaceWidget.module.css'
import { Selected, SlideType } from '../../../shared/types/types'
import { CurrentSlide } from './currentSlide/CurrentSlide'

type WorkSpaceWidgetProps = {
    selected: Selected
    slides: SlideType[]
}

const WorkSpaceWidget = ({ selected, slides }: WorkSpaceWidgetProps) => {
    const lastSlideId = selected.slidesIds[selected.slidesIds.length - 1]
    const currentSlide = slides.find((slide) => slide.id === lastSlideId)
    return (
        <div className={styles.workSpace}>
            <CurrentSlide slide={currentSlide ?? slides[0]} />
        </div>
    )
}

export { WorkSpaceWidget }
