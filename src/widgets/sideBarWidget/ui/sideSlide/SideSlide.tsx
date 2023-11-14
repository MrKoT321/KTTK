import styles from './SideSlide.module.css'
import { Selected, SlideType } from '../../../../shared/types/types'
import { Object } from '../../../../shared/ui/object'

type SlideProps = {
    slide: SlideType
    selected: Selected
    setSelected(sel: Selected): void
}

const SideSlide = ({ slide, selected, setSelected }: SlideProps) => {
    const styleObj = {
        background: slide.backgroundValue,
    }
    const sel: Selected = {
        slidesIds: [...selected.slidesIds],
        objectsIds: [...selected.objectsIds],
    }

    const changeSelected = () => {
        sel.slidesIds = sel.slidesIds.filter(
            (selectedId) => selectedId !== slide.id,
        )
        sel.slidesIds.push(slide.id)
        setSelected(sel)
    }

    return (
        <label
            className={styles.sideSlide}
            onClick={() => {
                changeSelected()
            }}
        >
            <div className={styles.container} style={styleObj}>
                <div className={styles.content} style={styleObj}>
                    {slide.objects.map((object, index) => (
                        <Object
                            key={index}
                            object={object}
                            isSideSlide={true}
                        />
                    ))}
                </div>
            </div>
        </label>
    )
}

export { SideSlide }
