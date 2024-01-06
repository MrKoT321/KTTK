import { PresentationName } from './presentationName'
import { Editor, MouseStates } from '../../../shared/types/types'
import { ToolMenu } from './toolMenu'
import { ToolBar } from './toolBar'
import { EditTools } from './editTools'
import styles from './TopPanelWidget.module.css'

type TopPanelWidgetProps = {
    toolMenuTools: {
        currentSlideBg: string
        setCurrentSlideBg: (currentSlideBg: string) => void
    }
    setMouseState: (mouseState: MouseStates) => void
    presentationsObjTools: {
        setPresentation: (presentation: Editor) => void
        presentation: Editor
    }
}

const TopPanelWidget = ({ toolMenuTools, setMouseState, presentationsObjTools }: TopPanelWidgetProps) => (
    <>
        <div className={styles.top}>
            <PresentationName />
            <ToolBar presentationsObjTools={presentationsObjTools} />
        </div>
        <div className={styles.bottom}>
            <ToolMenu
                setMouseState={setMouseState}
                currentSlideBg={toolMenuTools.currentSlideBg}
                setCurrentSlideBg={toolMenuTools.setCurrentSlideBg}
            />
            <EditTools />
        </div>
    </>
)

export { TopPanelWidget }
