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
        currentSlideBg: string
        setCurrentSlideBg: (currentSlideBg: string) => void
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

const TopPanelWidget = ({
    toolMenuTools,
    presentationNameTools,
    setMouseState,
    presentationsObjTools,
    editTools,
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
                currentSlideBg={toolMenuTools.currentSlideBg}
                setCurrentSlideBg={toolMenuTools.setCurrentSlideBg}
            />
            <EditTools editTools={editTools} />
        </div>
    </>
)

export { TopPanelWidget }
