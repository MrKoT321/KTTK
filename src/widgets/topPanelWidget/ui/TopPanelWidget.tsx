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
    editTools: {
        selectedTextFonts: string
        setSelectedTextFonts: (selectedTextFonts: string) => void
        selectedTextSize: number
        setSelectedTextSize: (selectedTextSize: number) => void
        bolded: boolean
        setBolded: (bolded: boolean) => void
        italic: boolean
        setItalic: (italic: boolean) => void
        underlined: boolean
        setUnderlined: (underlined: boolean) => void
        textColor: string
        setTextColor: (textColor: string) => void
    }
}

const TopPanelWidget = ({ toolMenuTools, setMouseState, presentationsObjTools, editTools }: TopPanelWidgetProps) => (
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
            <EditTools editTools={editTools} />
        </div>
    </>
)

export { TopPanelWidget }
