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
import { ObjectType, Selected, SlideType } from '../../../../shared/types/types'
import { useState } from 'react'
import { MouseStates } from '../../../editorWidget/ui/EditorWidget'

type ToolMenuProps = {
    slides: SlideType[]
    setSlides(slides: SlideType[]): void
    setMouseState: (mouseState: MouseStates) => void
}

const ToolMenu = ({ slides, setSlides, setMouseState }: ToolMenuProps) => {
    const allSlides = [...slides]

    const addSlide = () => {
        const newSlide: SlideType = {
            id: slides[slides.length - 1].id + 1,
            background: 'color',
            backgroundValue: '#FFFFFF',
            objects: [],
        }
        allSlides.push(newSlide)
        setSlides(allSlides)
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
                }}
            />
            <div>
                <PopupMenu icons={['ss']} labels={['ss']} onClicks={[addSlide]}> </PopupMenu>
            </div>
        </div>
    )
}

export { ToolMenu }
