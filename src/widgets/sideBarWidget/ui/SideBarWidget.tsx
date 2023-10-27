import { SideSlide } from '../../sideSlide/ui/SideSlide'
import styles from './SideBarWidget.module.css'
import { SlideType } from './../../../shared/types/types'

type SlideBarProps = {
    slides: SlideType[]
}

const SideBarWidget = ({ slides }: SlideBarProps) => (
    <div className={styles.sidePanel}>
        {slides.map((slide) => (
            <SideSlide
                id={slide.id}
                objects={slide.objects}
                background={slide.background}
                backgroundValue={slide.backgroundValue}
            />
        ))}
    </div>
)
export { SideBarWidget }
