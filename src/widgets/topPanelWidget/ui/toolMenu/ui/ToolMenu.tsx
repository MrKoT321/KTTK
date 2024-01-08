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
import { MouseStates } from '../../../../../shared/types/types'
import React, { useState } from 'react'
import { AddElementButton } from '../../../../../shared/ui/addElementButton/AddElementButton'
import { DropdownMenu } from '../../../../../features/dropdownMenu'
import { useAppActions, useAppSelector } from '../../../../../shared/redux/store'
import { defaultCurrentSlide } from '../../../../../shared/tools/defaultCurrentSlide'
import { SelectImagePopUp } from '../../../../../features/selectImagePopUp'

type ToolMenuProps = {
    setMouseState: (mouseState: MouseStates) => void
}

const ToolMenu = ({ setMouseState }: ToolMenuProps) => {
    const { slidesMap, slidesOrder, currentSlideId } = useAppSelector((state) => state.slides)
    const { addSlide, setBackground, setSelectImagePopUpState } = useAppActions()
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide
    const [isShowShapesPopupMenu, setIsShowShapesPopupMenu] = useState(false)

    const styleDropDownMenu = {
        marginLeft: 200,
        marginTop: 115,
    }
    const onClickFunctionsForDropdownMenu = [() => setMouseState('creatingRect'), () => setMouseState('creatingCircle')]

    const changePopupMenuShapesVisibility = () => {
        if (isShowShapesPopupMenu) {
            setIsShowShapesPopupMenu(false)
        } else {
            setIsShowShapesPopupMenu(true)
        }
    }

    return (
        <div className={styles.toolMenu}>
            <AddElementButton icon={addSlideIcon} onClick={() => addSlide(slidesMap, slidesOrder)} />
            <AddElementButton icon={cancelIcon} onClick={() => console.log()} />
            <AddElementButton icon={returnIcon} onClick={() => console.log()} />
            <AddElementButton icon={pointerIcon} onClick={() => setMouseState('cursor')} />
            <AddElementButton icon={addTextIcon} onClick={() => setMouseState('creatingText')} />
            <AddElementButton icon={addImageIcon} onClick={() => setSelectImagePopUpState(true)} />
            <AddElementButton icon={addShapeIcon} onClick={() => changePopupMenuShapesVisibility()} />
            <input
                className={styles.inputColor}
                type={'color'}
                value={currentSlide.backgroundValue}
                onChange={(event) => {
                    setBackground(event.target.value)
                }}
            />
            <div
                className={isShowShapesPopupMenu ? styles.shapeDropDown_visible : styles.shapeDropDown_hidden}
                style={styleDropDownMenu}
            >
                <DropdownMenu
                    icons={[addRectangleIcon, addCircleIcon]}
                    labels={['Rectangle', 'Circle']}
                    onClicks={onClickFunctionsForDropdownMenu}
                />
            </div>
            <SelectImagePopUp />
        </div>
    )
}

export { ToolMenu }
