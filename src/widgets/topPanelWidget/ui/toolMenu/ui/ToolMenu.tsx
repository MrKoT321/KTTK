import styles from './ToolMenu.module.css'
import addSlideIcon from '../../../../../shared/icons/addSlideIcon.svg'
import cancelIcon from '../../../../../shared/icons/cancelIcon.svg'
import returnIcon from '../../../../../shared/icons/returnIcon.svg'
import addTextIcon from '../../../../../shared/icons/addTextIcon.svg'
import addImageIcon from '../../../../../shared/icons/addImageIcon.svg'
import addShapeIcon from '../../../../../shared/icons/addShapeIcon.svg'
import addRectangleIcon from '../../../../../shared/icons/addRectangleIcon.svg'
import addCircleIcon from '../../../../../shared/icons/addCircleIcon.svg'
import addLineIcon from '../../../../../shared/icons/addLineIcon.svg'
import React, { useState } from 'react'
import { ToolMenuButton } from '../../../../../shared/ui/toolMenuButton'
import { DropdownMenu } from '../../../../../features/dropdownMenu'
import { useAppActions, useAppSelector } from '../../../../../shared/redux/store'
import { defaultCurrentSlide } from '../../../../../shared/tools/defaultCurrentSlide'
import { SelectImagePopUp } from '../../../../../features/selectImagePopUp'
import { getFunctionsForDropDownLabels } from '../../../../../features/dropdownMenu/tools/getFunctionsForDropDownLabels'

const ToolMenu = () => {
    const { slidesMap, slidesOrder, currentSlideId } = useAppSelector((state) => state.slides)
    const { addSlide, setBackground, setSelectImagePopUpState, setMouseState } = useAppActions()
    const currentSlide = slidesMap.get(currentSlideId) || defaultCurrentSlide
    const [isDropDownVisible, setIsDropDownVisible] = useState(false)

    const changeDropDownVisibility = () => {
        if (isDropDownVisible) {
            setIsDropDownVisible(false)
        } else {
            setIsDropDownVisible(true)
        }
    }

    return (
        <div className={styles.toolMenu}>
            <ToolMenuButton icon={addSlideIcon} onClick={() => addSlide(slidesMap, slidesOrder)} />
            <ToolMenuButton icon={cancelIcon} onClick={() => console.log()} />
            <ToolMenuButton icon={returnIcon} onClick={() => console.log()} />
            <div className={styles.bgColor}>
                <label htmlFor={'bgColor'} className={styles.bgColorLabel}>
                    Фон
                </label>
                <input
                    className={styles.inputColor}
                    id={'bgColor'}
                    type={'color'}
                    value={currentSlide.backgroundValue}
                    onChange={(event) => {
                        setBackground(event.target.value)
                    }}
                />
            </div>
            <ToolMenuButton icon={addTextIcon} onClick={() => setMouseState('creatingText')} />
            <ToolMenuButton icon={addImageIcon} onClick={() => setSelectImagePopUpState(true)} />
            <ToolMenuButton icon={addShapeIcon} onClick={() => changeDropDownVisibility()} />
            <div className={isDropDownVisible ? styles.shapeDropDown_visible : styles.shapeDropDown_hidden}>
                <DropdownMenu
                    icons={[addRectangleIcon, addCircleIcon, addLineIcon]}
                    labels={['Rectangle', 'Circle', 'Line']}
                    onClicks={getFunctionsForDropDownLabels(setMouseState, setIsDropDownVisible)}
                />
            </div>
            <SelectImagePopUp />
        </div>
    )
}

export { ToolMenu }
