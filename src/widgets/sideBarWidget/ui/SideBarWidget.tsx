import { Selected, SlideType } from '../../../shared/types/types'
import styles from './SideBarWidget.module.css'
import { SideSlide } from './sideSlide/SideSlide'

type SlideBarProps = {
    slides: SlideType[]
    selected: Selected
    setSelected: (sel: Selected) => void
}

const SideBarWidget = ({ slides, selected, setSelected }: SlideBarProps) => (
    <div className={styles.sideBar}>
        {slides.map((slide) => (
            <SideSlide
                selected={selected}
                setSelected={setSelected}
                key={slide.id}
                slide={slide}
            />
        ))}
    </div>
)
export { SideBarWidget }
