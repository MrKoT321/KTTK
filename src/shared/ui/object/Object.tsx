import { TextObject, ShapeObject, ImageObject } from './objects'
import { MouseStates, ObjectImageType, ObjectShapeType, ObjectTextType, Selected, SlideType } from '../../types/types'
import { layoutParams as lp } from 'shared/tools/layoutParams'
import { useAppSelector } from '../../redux/store'

type ObjectProps = {
    object: ObjectImageType | ObjectTextType | ObjectShapeType
    isSideSlide?: boolean
    isObjectSelected: boolean
    setMouseState: (mouseState: MouseStates) => void
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
    handleMouseDownResize: (arg: React.MouseEvent<HTMLDivElement>) => void
    selectedTextFonts: string
    selectedTextSize: number
    bolded: boolean
    italic: boolean
    underlined: boolean
    textColor: string
    setSlides?: (slides: SlideType[]) => void
    slides?: SlideType[]
}

const scaleSideSlide = lp.sideSlideHeight / lp.currentSlideHeight

const Object = ({
    object,
    isSideSlide,
    isObjectSelected,
    setMouseState,
    handleMouseDown,
    handleMouseDownResize,
    selectedTextFonts,
    selectedTextSize,
    bolded,
    italic,
    underlined,
    textColor,
    setSlides,
    slides,
}: ObjectProps) => {
    const selected = useAppSelector((state) => state.selected)
    switch (object.oType) {
        case 'ObjectTextType': {
            const props = {
                ...object,
                selected,
                isSelected: isObjectSelected,
                setMouseState,
                handleMouseDown,
                handleMouseDownResize,
                selectedTextFonts,
                selectedTextSize,
                bolded,
                italic,
                underlined,
                textColor,
                setSlides,
                slides,
            }
            if (isSideSlide) {
                return (
                    <TextObject
                        id={object.id}
                        width={scaleSideSlide * object.width}
                        height={scaleSideSlide * object.height}
                        startX={scaleSideSlide * object.startX}
                        startY={scaleSideSlide * object.startY}
                        borderStyle={object.borderStyle}
                        borderWidth={scaleSideSlide * object.borderWidth}
                        borderColor={object.borderColor}
                        fontSize={scaleSideSlide * object.fontSize}
                        fontColor={object.fontColor}
                        fontFamily={object.fontFamily}
                        bold={true}
                        highlighter={object.highlighter}
                        underlineColor={object.underlineColor}
                        value={object.value}
                        oType={object.oType}
                        isSelected={isObjectSelected}
                        setMouseState={setMouseState}
                        handleMouseDown={handleMouseDown}
                        handleMouseDownResize={handleMouseDownResize}
                        selectedTextFonts={selectedTextFonts}
                        selectedTextSize={scaleSideSlide * selectedTextSize}
                        bolded={bolded}
                        italic={italic}
                        underlined={underlined}
                        textColor={textColor}
                        isBlocked={isSideSlide}
                    />
                )
            }
            return <TextObject {...props} />
        }
        case 'ObjectShapeType':
            if (isSideSlide) {
                switch (object.type) {
                    case 'circle':
                        return (
                            <ShapeObject
                                id={object.id}
                                width={scaleSideSlide * object.width}
                                height={scaleSideSlide * object.height}
                                startX={scaleSideSlide * object.startX}
                                startY={scaleSideSlide * object.startY}
                                borderStyle={object.borderStyle}
                                borderWidth={scaleSideSlide * object.borderWidth}
                                borderColor={object.borderColor}
                                type={object.type}
                                radius={object.radius}
                                shapeBgColor={object.shapeBgColor}
                                oType={object.oType}
                                isSelected={isObjectSelected}
                                handleMouseDown={handleMouseDown}
                                handleMouseDownResize={handleMouseDownResize}
                            />
                        )
                    case 'rect':
                    case 'line':
                    case 'triangle':
                        return (
                            <ShapeObject
                                id={object.id}
                                width={scaleSideSlide * object.width}
                                height={scaleSideSlide * object.height}
                                startX={scaleSideSlide * object.startX}
                                startY={scaleSideSlide * object.startY}
                                borderStyle={object.borderStyle}
                                borderWidth={scaleSideSlide * object.borderWidth}
                                borderColor={object.borderColor}
                                type={object.type}
                                shapeBgColor={object.shapeBgColor}
                                oType={object.oType}
                                isSelected={isObjectSelected}
                                handleMouseDown={handleMouseDown}
                                handleMouseDownResize={handleMouseDownResize}
                            />
                        )
                        break
                }
            }
            switch (object.type) {
                case 'circle':
                    return (
                        <ShapeObject
                            id={object.id}
                            width={object.width}
                            height={object.height}
                            startX={object.startX}
                            startY={object.startY}
                            borderStyle={object.borderStyle}
                            borderWidth={object.borderWidth}
                            borderColor={object.borderColor}
                            type={object.type}
                            radius={object.radius}
                            shapeBgColor={object.shapeBgColor}
                            oType={object.oType}
                            isSelected={isObjectSelected}
                            handleMouseDown={handleMouseDown}
                            handleMouseDownResize={handleMouseDownResize}
                        />
                    )
                case 'rect':
                case 'line':
                case 'triangle':
                    return (
                        <ShapeObject
                            id={object.id}
                            width={object.width}
                            height={object.height}
                            startX={object.startX}
                            startY={object.startY}
                            borderStyle={object.borderStyle}
                            borderWidth={object.borderWidth}
                            borderColor={object.borderColor}
                            type={object.type}
                            shapeBgColor={object.shapeBgColor}
                            oType={object.oType}
                            isSelected={isObjectSelected}
                            handleMouseDown={handleMouseDown}
                            handleMouseDownResize={handleMouseDownResize}
                        />
                    )
            }
            break
        case 'ObjectImageType':
            if (isSideSlide) {
                return (
                    <ImageObject
                        id={object.id}
                        width={scaleSideSlide * object.width}
                        height={scaleSideSlide * object.height}
                        startX={scaleSideSlide * object.startX}
                        startY={scaleSideSlide * object.startY}
                        borderStyle={object.borderStyle}
                        borderWidth={scaleSideSlide * object.borderWidth}
                        borderColor={object.borderColor}
                        caption={object.caption}
                        imageSrc={object.imageSrc}
                        imageSrcType={object.imageSrcType}
                        oType={object.oType}
                        isSelected={isObjectSelected}
                        handleMouseDown={handleMouseDown}
                        handleMouseDownResize={handleMouseDownResize}
                    />
                )
                break
            }
            return (
                <ImageObject
                    id={object.id}
                    width={object.width}
                    height={object.height}
                    startX={object.startX}
                    startY={object.startY}
                    borderStyle={object.borderStyle}
                    borderWidth={object.borderWidth}
                    borderColor={object.borderColor}
                    caption={object.caption}
                    imageSrc={object.imageSrc}
                    imageSrcType={object.imageSrcType}
                    oType={object.oType}
                    isSelected={isObjectSelected}
                    handleMouseDown={handleMouseDown}
                    handleMouseDownResize={handleMouseDownResize}
                />
            )
    }
}

export { Object }
