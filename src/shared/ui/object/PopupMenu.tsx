import styles from './PopupMenu.module.css'
import { AddElementButton } from './AddElementButton'

type PopupMenuProps = {
    icons: string[]
    labels: string[]
    onClicks: (() => void)[]
}

const PopupMenu = ({ icons, onClicks, labels }: PopupMenuProps) => {
    return (
        <div className={styles.popupMenu}>
            {icons.map((icon, index) => (
                <div className={styles.line} key={index}>
                    <AddElementButton icon={icon} onClick={onClicks[index]} label={labels[index]} />
                </div>
            ))}
        </div>
    )
}

export { PopupMenu }
