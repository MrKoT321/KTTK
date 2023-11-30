import styles from './ToolMenu.module.css'
import { AddElementButton, PopupMenu } from '../../../../shared/ui/object'
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
import { Selected, SlideType } from '../../../../shared/types/types'
import { useEffect, useState } from 'react'
import { MouseStates } from '../../../editorWidget/ui/EditorWidget'

type ToolMenuProps = {
    slides: SlideType[]
    setSlides(slides: SlideType[]): void
    setMouseState: (mouseState: MouseStates) => void
    selected: Selected
}

const ToolMenu = ({ slides, setSlides, setMouseState, selected }: ToolMenuProps) => {
    const [isShowShapesPopupMenu, setIsShowShapesPopupMenu] = useState(false)
    const allSlides = [...slides]

    //TODO: сделать в зависимости от длины
    const stylePopupMenu = {
        marginLeft: 384,
        marginTop: 40,
    }

    const addSlide = () => {
        const newSlide: SlideType = {
            id: slides[slides.length - 1].id + 1,
            order: slides.length,
            background: 'color',
            backgroundValue: '#FFFFFF',
            objects: [],
        }
        allSlides.push(newSlide)
        setSlides(allSlides)
    }

    const changePopupMenuShapesVisibility = () => {
        if (isShowShapesPopupMenu) {
            setIsShowShapesPopupMenu(false)
        } else {
            setIsShowShapesPopupMenu(true)
        }
    }

    return (
        <div className={styles.toolMenu}>
            <AddElementButton
                icon={addSlideIcon}
                onClick={() => {
                    addSlide()
                }}
            />
            <AddElementButton
                icon={chooseTemplateIcon}
                onClick={() => {
                    console.log('Открытие панельки с готовой заготовкой слайдов')
                }}
            />
            <AddElementButton
                icon={cancelIcon}
                onClick={() => {
                    console.log('Отмена действия')
                }}
            />
            <AddElementButton
                icon={returnIcon}
                onClick={() => {
                    console.log('Возвращение последнего действия')
                }}
            />
            <AddElementButton
                icon={pointerIcon}
                onClick={() => {
                    setMouseState('cursor')
                }}
            />
            <AddElementButton
                icon={addTextIcon}
                onClick={() => {
                    setMouseState('creatingText')
                }}
            />
            <AddElementButton
                icon={addImageIcon}
                onClick={() => {
                    console.log('image')
                }}
            />
            <AddElementButton
                icon={addShapeIcon}
                onClick={() => {
                    changePopupMenuShapesVisibility()
                }}
            />
            <div
                className={isShowShapesPopupMenu ? styles.shapePopupMenu_visible : styles.shapePopupMenu_hidden}
                style={stylePopupMenu}
            >
                <PopupMenu
                    icons={[addRectangleIcon, addCircleIcon]}
                    labels={['Rectangle', 'Circle']}
                    onClicks={[() => setMouseState('creatingRect'), () => setMouseState('creatingCircle')]}
                />
            </div>
        </div>
    )
}

export { ToolMenu }
