import styles from './ToolMenu.module.css'
import addSlideIcon from '../../../../shared/icons/addSlideIcon.svg'
import chooseTemplateIcon from '../../../../shared/icons/chooseTemplateIcon.svg'
import cancelIcon from '../../../../shared/icons/cancelIcon.svg'
import returnIcon from '../../../../shared/icons/returnIcon.svg'
import pointerIcon from '../../../../shared/icons/pointerIcon.svg'
import addTextIcon from '../../../../shared/icons/addTextIcon.svg'
import addImageIcon from '../../../../shared/icons/addImageIcon.svg'
import addShapeIcon from '../../../../shared/icons/addShapeIcon.svg'
import addRectangleIcon from '../../../../shared/icons/addRectangleIcon.svg'
import addCircleIcon from '../../../../shared/icons/addCircleIcon.svg'
import { MouseStates, Selected, SlideType } from '../../../../shared/types/types'
import { useState } from 'react'
import { addSlide } from './tools/addSlide'
import { AddElementButton } from '../../../../features/addElementButton/AddElementButton'
import { DropdownMenu } from '../../../../features/dropdownMenu/DropdownMenu'

type ToolMenuProps = {
    slides: SlideType[]
    setSlides(slides: SlideType[]): void
    setMouseState: (mouseState: MouseStates) => void
    selected: Selected
}

const ToolMenu = ({ slides, setSlides, setMouseState, selected }: ToolMenuProps) => {
    const [isShowShapesPopupMenu, setIsShowShapesPopupMenu] = useState(false)
    const allSlides = [...slides]

    const stylePopupMenu = {
        marginLeft: 384,
        marginTop: 40,
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
                    console.log()
                }}
            />
            <AddElementButton icon={addShapeIcon} onClick={() => changePopupMenuShapesVisibility()} />
            <div
                className={isShowShapesPopupMenu ? styles.shapeDropdownMenu_visible : styles.shapeDropdownMenu_hidden}
                style={stylePopupMenu}
            >
                <DropdownMenu
                    icons={[addRectangleIcon, addCircleIcon]}
                    labels={['Rectangle', 'Circle']}
                    onClicks={onClickFuncs}
                />
            </div>
        </div>
    )
}

export { ToolMenu }
