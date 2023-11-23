import { AddElementButton } from './AddElementButton'

type PopupMenuProps = {
    icons: string[]
    labels: string[]
    onClicks: (() => void)[]
}

const PopupMenu = ({ icons, onClicks, labels }: PopupMenuProps) => {
    return (
        <div>
            {icons.map((icon, index) => (
                <div>
                    <AddElementButton icon={icon} onClick={onClicks[index]} />
                    <label>{labels[index]}</label>
                </div>
            ))}
        </div>
    )
}

export { PopupMenu }
