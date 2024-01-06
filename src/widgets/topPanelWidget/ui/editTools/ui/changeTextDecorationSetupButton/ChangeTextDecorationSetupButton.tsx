import styles from './ChangeTextDecorationSetupButton.module.css'
import { useAppActions, useAppSelector } from '../../../../../../shared/redux/store'
import { defaultCurrentSlide } from '../../../../../../shared/defaultCurrentSlide'

type ImgButtonType = 'bold' | 'italic' | 'underline'

type Props = {
    imageSrc: string
    type: ImgButtonType
}

const ChangeTextDecorationSetupButton = ({ imageSrc, type }: Props) => {
    const selectedObjectIds = useAppSelector((state) => state.selected.selectedObjectIds)
    const { setTextObjectsBolded, setTextObjectsItalic, setTextObjectsUnderlined } = useAppActions()

    const handleClick = (type: string) => {
        if (type === 'bold') {
            setTextObjectsBolded(selectedObjectIds)
        }
        if (type === 'italic') {
            setTextObjectsItalic(selectedObjectIds)
        }
        if (type === 'underline') {
            setTextObjectsUnderlined(selectedObjectIds)
        }
    }

    return (
        <label
            className={styles.button}
            onClick={() => {
                handleClick(type)
                console.log('да сука, я кликнул нахуй, не ждал, да?!')
            }}
        >
            <img src={imageSrc} className={styles.image} />
        </label>
    )
}

export { ChangeTextDecorationSetupButton }
