import styles from './ChangeTextDecorationSetupButton.module.css'
import { useAppActions, useAppSelector } from '../../../../../../shared/redux/store'

type ImgButtonType = 'bold' | 'italic' | 'underline'

type Props = {
    imageSrc: string
    type: ImgButtonType
}

const ChangeTextDecorationSetupButton = ({ imageSrc, type }: Props) => {
    const currentSlide = useAppSelector((state) => state.slides.currentSlide)
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const { setTextObjectsBolded, setTextObjectsItalic, setTextObjectsUnderlined } = useAppActions()

    const handleClick = (type: string) => {
        if (type === 'bold') {
            setTextObjectsBolded(selectedObjectIds, currentSlide)
        }
        if (type === 'italic') {
            setTextObjectsItalic(selectedObjectIds, currentSlide)
        }
        if (type === 'underline') {
            setTextObjectsUnderlined(selectedObjectIds, currentSlide)
        }
    }

    return (
        <label className={styles.button} onClick={() => handleClick(type)}>
            <img src={imageSrc} className={styles.image} />
        </label>
    )
}

export { ChangeTextDecorationSetupButton }
