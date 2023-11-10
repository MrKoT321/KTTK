import styles from './SideSlide.module.css'
import { SlideType } from '../../../../shared/types/types'
import { Object } from '../../../../shared/ui/object'

const SideSlide = ({ objects, backgroundValue }: SlideType) => {
    const styleObj = {
        background: backgroundValue,
    }
    return (
        <div className={styles.sideSlide}>
            <div className={styles.container} style={styleObj}>
                <div className={styles.content} style={styleObj}>
                    {objects.map((object, index) => (
                        <Object
                            key={index}
                            object={object}
                            isSideSlide={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export { SideSlide }
