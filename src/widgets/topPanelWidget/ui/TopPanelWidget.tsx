import { PresentationName } from './presentationName'
import { Editor, MouseStates, Selected, SlideType } from '../../../shared/types/types'
import { ToolMenu } from './toolMenu/ToolMenu'
import { ToolBar } from './toolBar/ui/ToolBar'

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
        <PresentationName setName={presentationNameTools.setName} name={presentationNameTools.name} />
        <ToolBar
            toolMenuTools={toolMenuTools}
            presentationNameTools={presentationNameTools}
            presentationsObjTools={presentationsObjTools}
        />
        <ToolMenu
            slides={toolMenuTools.slides}
            setSlides={toolMenuTools.setSlides}
            setMouseState={setMouseState}
            selected={toolMenuTools.selected}
        />
    </>
)

export { TopPanelWidget }
