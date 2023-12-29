import { TopPanelWidget } from '../../topPanelWidget'
import { SideBarWidget } from '../../sideBarWidget'
import { WorkSpaceWidget } from '../../workSpaceWidget'
import { useEffect, useState } from 'react'
import { Editor, MouseLocations, MouseStates } from '../../../shared/types/types'
import { minEditor } from '../../../shared/testData'
import { Layout } from './layout/Layout'

const PresentationMaker = () => {
    const [presentation, setPresentation] = useState<Editor>(minEditor)
    const [sel, setSel] = useState(presentation.selected)
    const [slides, setSlides] = useState(presentation.document.slides)
    const [presentationName, setPresentationName] = useState(presentation.document.name)
    const [mouseState, setMouseState] = useState<MouseStates>('cursor')
    const [mouseLocation, setMouseLocation] = useState<MouseLocations>('workSpace')
    const currentSlide = slides.find((slide) => slide.id === sel.slidesIds[sel.slidesIds.length - 1]) ?? slides[0]
    const [currentSlideBg, setCurrentSlideBg] = useState(currentSlide.backgroundValue)
    const [selectedTextFonts, setSelectedTextFonts] = useState('')
    const [selectedTextSize, setSelectedTextSize] = useState(20)
    const [bolded, setBolded] = useState(false)
    const [italic, setItalic] = useState(false)
    const [underlined, setUnderlined] = useState(false)
    const [textColor, setTextColor] = useState('#000000')

    const toolMenuTools = {
        setSlides: setSlides,
        slides,
        selected: sel,
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
    const presentationNameTools = {
        setName: setPresentationName,
        name: presentationName,
    }
    const presentationsObjTools = {
        setPresentation: setPresentation,
        presentation: presentation,
    }

    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, location: MouseLocations) => {
        e.preventDefault
        setMouseLocation(location)
    }

    useEffect(() => {
        setSel(presentation.selected)
        setSlides(presentation.document.slides)
        setPresentationName(presentation.document.name)
    }, [presentation])

    return (
        <Layout
            topPanel={
                <TopPanelWidget
                    toolMenuTools={toolMenuTools}
                    editTools={editTools}
                    presentationNameTools={presentationNameTools}
                    setMouseState={setMouseState}
                    presentationsObjTools={presentationsObjTools}
                />
            }
            sideBar={
                <SideBarWidget
                    slides={slides}
                    selected={sel}
                    setSelected={setSel}
                    setSlides={setSlides}
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
                    slides={slides}
                    selected={sel}
                    setSelected={setSel}
                    setSlides={setSlides}
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
