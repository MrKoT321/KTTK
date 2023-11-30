import { Selected, SlideType } from '../../../../shared/types/types'

type SelectSlideProps = {
    e: React.MouseEvent<HTMLDivElement>
    sel: Selected
    setSelected(sel: Selected): void
    slide: SlideType
}

const SelectSlide = ({ e, sel, setSelected, slide }: SelectSlideProps) => {
    if (e.ctrlKey) {
        sel.slidesIds = sel.slidesIds.filter((selectedId) => selectedId !== slide.id)
        sel.slidesIds.push(slide.id)
    } else {
        sel.slidesIds = [slide.id]
    }
    setSelected(sel)
}

export { SelectSlide }
