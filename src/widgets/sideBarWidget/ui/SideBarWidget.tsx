import { SlideType } from '../../../shared/types/types'
import styles from './SideBarWidget.module.css'
import { SideSlide } from './sideSlide/SideSlide'

type SlideBarProps = {
    slides: SlideType[]
}

const SideBarWidget = ({ slides }: SlideBarProps) => (
    <div className={styles.sideBar}>
        {slides.map((slide) => (
            <SideSlide
                key={slide.id}
                id={slide.id}
                objects={slide.objects}
                background={slide.background}
                backgroundValue={slide.backgroundValue}
            />
        ))}
    </div>
)
export { SideBarWidget }
