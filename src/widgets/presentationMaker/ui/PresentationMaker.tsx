import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import { useState } from 'react'
import { Editor, MouseStates } from '../../../shared/types/types'
import { minEditor } from '../../../shared/testData'
import { Layout } from './layout/Layout'
import { useAppSelector } from '../../../shared/redux/store'

const PresentationMaker = () => {
    const currentSlide = useAppSelector((state) => state.slides.currentSlide)
    const [presentation, setPresentation] = useState<Editor>(minEditor)
    const [mouseState, setMouseState] = useState<MouseStates>('cursor')
    const [currentSlideBg, setCurrentSlideBg] = useState(currentSlide.backgroundValue)
    const [selectedTextFonts, setSelectedTextFonts] = useState('')
    const [selectedTextSize, setSelectedTextSize] = useState(0)
    const [bolded, setBolded] = useState(false)
    const [italic, setItalic] = useState(false)
    const [underlined, setUnderlined] = useState(false)
    const [textColor, setTextColor] = useState('#000000')

    const toolMenuTools = {
        currentSlideBg,
        setCurrentSlideBg,
    }
    const editTools = {
        selectedTextFonts: selectedTextFonts,
        setSelectedTextFonts: setSelectedTextFonts,
        selectedTextSize: selectedTextSize,
        setSelectedTextSize: setSelectedTextSize,
        bolded: bolded,
        setBolded: setBolded,
        italic: italic,
        setItalic: setItalic,
        underlined: underlined,
        setUnderlined: setUnderlined,
        textColor: textColor,
        setTextColor: setTextColor,
    }
    const presentationsObjTools = {
        setPresentation: setPresentation,
        presentation: presentation,
    }

    return (
        <Layout
            topPanel={
                <TopPanelWidget
                    toolMenuTools={toolMenuTools}
                    editTools={editTools}
                    setMouseState={setMouseState}
                    presentationsObjTools={presentationsObjTools}
                />
            }
            sideBar={
                <SideBarWidget
                    setCurrentSlideBg={setCurrentSlideBg}
                    selectedTextFonts={selectedTextFonts}
                    selectedTextSize={selectedTextSize}
                    bolded={bolded}
                    italic={italic}
                    underlined={underlined}
                    textColor={textColor}
                />
            }
            workSpace={
                <WorkSpaceWidget
                    mouseState={mouseState}
                    setMouseState={setMouseState}
                    currentSlideBg={currentSlideBg}
                    selectedTextFonts={selectedTextFonts}
                    selectedTextSize={selectedTextSize}
                    bolded={bolded}
                    italic={italic}
                    underlined={underlined}
                    textColor={textColor}
                />
            }
            footer={<></>}
        />
    )
}

export { PresentationMaker }
