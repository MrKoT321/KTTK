import { SlideType } from '../../../../shared/types/types'
import { CSSProperties } from 'react'
import { Object } from '../../../../shared/ui/object'
import { widgetsSizeParams as wsp } from '../../../../shared/tools/layoutParams'

type SlideShowSlideType = {
    slide: SlideType
}

const SlideShowSlide = ({ slide }: SlideShowSlideType) => {
    const slideStyle: CSSProperties = {
        ...wsp.slideShowSlideSizeStyle,
        background: slide.backgroundValue,
    }

    return (
        // <div className={styles.slideShowSlide}>
        <div style={slideStyle}>
            {slide.objects.map((object) => (
                <Object object={object} isObjectSelected={false} objectLocation={'slideShowSlide'} />
            ))}
        </div>
        // </div>
    )
}

export { SlideShowSlide }
