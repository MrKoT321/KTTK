import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import { useState } from 'react'
import { Editor, MouseLocations, MouseStates } from '../../../shared/types/types'
import { minEditor } from '../../../shared/testData'
import { Layout } from './layout/Layout'
import { useAppSelector } from '../../../shared/redux/store'

const PresentationMaker = () => {
    const currentSlide = useAppSelector((state) => state.slides.currentSlide)
    const [presentation, setPresentation] = useState<Editor>(minEditor)
    const [mouseState, setMouseState] = useState<MouseStates>('cursor')
    const [mouseLocation, setMouseLocation] = useState<MouseLocations>('workSpace')
    const [currentSlideBg, setCurrentSlideBg] = useState(currentSlide.backgroundValue)
    const [selectedTextFonts, setSelectedTextFonts] = useState('FuturaPT')
    const [selectedTextSize, setSelectedTextSize] = useState(20)
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

    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, location: MouseLocations) => {
        e.preventDefault
        setMouseLocation(location)
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
                    mouseLocation={mouseLocation}
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
                    mouseLocation={mouseLocation}
                />
            }
            footer={<></>}
            onClick={onClick}
        />
    )
}

export { PresentationMaker }
