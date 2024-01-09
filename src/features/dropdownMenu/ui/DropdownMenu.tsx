import styles from './DropdownMenu.module.css'
import { ToolMenuButton } from '../../../shared/ui/toolMenuButton'

type DropdownMenuProps = {
    icons: string[]
    labels: string[]
    onClicks: (() => void)[]
}

const DropdownMenu = ({ icons, onClicks, labels }: DropdownMenuProps) => {
    return (
        <div className={styles.dropDownMenu}>
            {icons.map((icon, index) => (
                <div className={styles.line} key={index}>
                    <ToolMenuButton icon={icon} onClick={onClicks[index]} label={labels[index]} />
                </div>
            ))}
        </div>
    )
}

export { DropdownMenu }
