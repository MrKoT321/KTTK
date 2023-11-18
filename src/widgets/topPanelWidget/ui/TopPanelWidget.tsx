import styles from './TopPanelWidget.module.css'
import { PresentationName } from '../../presentationNameWidget'
import { ToolBar } from '../../toolBar/ui/ToolBar'
import { Selected, SlideType } from '../../../shared/types/types'
import { ToolMenu } from './toolMenu/ToolMenu'

type TopPanelWidgetProps = {
    toolMenuTools: {
        slides: SlideType[]
        setSlides(slides: SlideType[]): void
        selected: Selected
    }
    presentationNameTools: {
        setName: (name: string) => void
        name: string
    }
}

const TopPanelWidget = ({
    toolMenuTools,
    presentationNameTools,
}: TopPanelWidgetProps) => (
    <div className={styles.topPanel}>
        <div className={styles.container}>
            <PresentationName
                setName={presentationNameTools.setName}
                name={presentationNameTools.name}
            />
            <ToolBar
                toolMenuTools={toolMenuTools}
                presentationNameTools={presentationNameTools}
            />
        </div>
        <ToolMenu
            slides={toolMenuTools.slides}
            setSlides={toolMenuTools.setSlides}
            selected={toolMenuTools.selected}
        />
    </div>
)

export { TopPanelWidget }
