import { PresentationName } from './presentationName'
import { Editor, MouseStates, Selected, SlideType } from '../../../shared/types/types'
import { ToolMenu } from './toolMenu'
import { ToolBar } from './toolBar'
import { EditTools } from './editTools'
import styles from './TopPanelWidget.module.css'

type TopPanelWidgetProps = {
    toolMenuTools: {
        slides: SlideType[]
        setSlides: (slides: SlideType[]) => void
        selected: Selected
    }
    presentationNameTools: {
        setName: (name: string) => void
        name: string
    }
    setMouseState: (mouseState: MouseStates) => void
    presentationsObjTools: {
        setPresentation: (presentation: Editor) => void
        presentation: Editor
    }
}

const TopPanelWidget = ({
    toolMenuTools,
    presentationNameTools,
    setMouseState,
    presentationsObjTools,
}: TopPanelWidgetProps) => (
    <>
        <div className={styles.top}>
            <PresentationName setName={presentationNameTools.setName} name={presentationNameTools.name} />
            <ToolBar
                toolMenuTools={toolMenuTools}
                presentationNameTools={presentationNameTools}
                presentationsObjTools={presentationsObjTools}
            />
        </div>
        <div className={styles.bottom}>
            <ToolMenu
                slides={toolMenuTools.slides}
                setSlides={toolMenuTools.setSlides}
                setMouseState={setMouseState}
                selected={toolMenuTools.selected}
            />
            <EditTools />
        </div>
    </>
)

export { TopPanelWidget }
