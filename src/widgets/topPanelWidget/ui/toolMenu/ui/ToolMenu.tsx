import styles from './ToolMenu.module.css'
import addSlideIcon from '../../../../../shared/icons/addSlideIcon.svg'
import chooseTemplateIcon from '../../../../../shared/icons/chooseTemplateIcon.svg'
import cancelIcon from '../../../../../shared/icons/cancelIcon.svg'
import returnIcon from '../../../../../shared/icons/returnIcon.svg'
import pointerIcon from '../../../../../shared/icons/pointerIcon.svg'
import addTextIcon from '../../../../../shared/icons/addTextIcon.svg'
import addImageIcon from '../../../../../shared/icons/addImageIcon.svg'
import addShapeIcon from '../../../../../shared/icons/addShapeIcon.svg'
import addRectangleIcon from '../../../../../shared/icons/addRectangleIcon.svg'
import addCircleIcon from '../../../../../shared/icons/addCircleIcon.svg'
import { MouseStates, Selected, SlideType } from '../../../../../shared/types/types'
import { useState } from 'react'
import { addSlide } from '../tools/addSlide'
import { AddElementButton } from '../../../../../features/addElementButton/AddElementButton'
import { DropdownMenu } from '../../../../../features/dropdownMenu/DropdownMenu'
import { SelectImagePopUp } from 'widgets/selectImagePopUpWidget'

type ToolMenuProps = {
    slides: SlideType[]
    setSlides: (slides: SlideType[]) => void
    setMouseState: (mouseState: MouseStates) => void
    selected: Selected
    currentSlideBg: string
    setCurrentSlideBg(currentSlideBg: string): void
}

const ToolMenu = ({ slides, setSlides, setMouseState, selected, currentSlideBg, setCurrentSlideBg }: ToolMenuProps) => {
    const [isShowShapesPopupMenu, setIsShowShapesPopupMenu] = useState(false)
    const allSlides = [...slides]
    const [isPopUpOpen, setPopUpState] = useState(false)
    // const [chosenColor, setChosenColor] = useState('#000000')

    const openSelectImagePopUp = () => {
        setPopUpState(() => true)
    }

    const closeSelectImagePopUp = () => {
        setPopUpState(() => false)
    }

    const styleDropDownMenu = {
        marginLeft: 200,
        marginTop: 115,
    }
    const onClickFuncs = [() => setMouseState('creatingRect'), () => setMouseState('creatingCircle')]

    const changePopupMenuShapesVisibility = () => {
        if (isShowShapesPopupMenu) {
            setIsShowShapesPopupMenu(false)
        } else {
            setIsShowShapesPopupMenu(true)
        }
    }

    return (
        <div className={styles.toolMenu}>
            <AddElementButton icon={addSlideIcon} onClick={() => addSlide({ allSlides, setSlides })} />
            <AddElementButton
                icon={chooseTemplateIcon}
                onClick={() => {
                    console.log()
                }}
            />
            <AddElementButton
                icon={cancelIcon}
                onClick={() => {
                    console.log()
                }}
            />
            <AddElementButton
                icon={returnIcon}
                onClick={() => {
                    console.log()
                }}
            />
            <AddElementButton icon={pointerIcon} onClick={() => setMouseState('cursor')} />
            <AddElementButton icon={addTextIcon} onClick={() => setMouseState('creatingText')} />
            <AddElementButton
                icon={addImageIcon}
                onClick={() => {
                    openSelectImagePopUp()
                }}
            />
            <AddElementButton
                icon={addShapeIcon}
                onClick={() => {
                    changePopupMenuShapesVisibility()
                }}
            />
            <input
                className={styles.inputColor}
                type={'color'}
                value={currentSlideBg}
                onChange={(event) => {
                    setCurrentSlideBg(event.target.value)
                }}
            />
            <div
                className={isShowShapesPopupMenu ? styles.shapeDropDown_visible : styles.shapeDropDown_hidden}
                style={styleDropDownMenu}
            >
                <DropdownMenu
                    icons={[addRectangleIcon, addCircleIcon]}
                    labels={['Rectangle', 'Circle']}
                    onClicks={onClickFuncs}
                />
            </div>
            <SelectImagePopUp
                slides={slides}
                selected={selected}
                setSlides={setSlides}
                isPopUpOpen={isPopUpOpen}
                closePopUp={closeSelectImagePopUp}
            />
        </div>
    )
}

export { ToolMenu }
