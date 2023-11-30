import { AddElementButton } from '../addElementButton/AddElementButton'
import styles from './PopupMenu.module.css'

type DropdownMenuProps = {
    icons: string[]
    labels: string[]
    onClicks: (() => void)[]
}

const DropdownMenu = ({ icons, onClicks, labels }: DropdownMenuProps) => {
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

export { DropdownMenu }
