import styles from './TopPanelWidget.module.css'
import { PresentationName } from '../../presentationNameWidget'
import { AddElementButton } from '../../../shared/ui/object'
import { ObjectType, Selected, SlideType } from '../../../shared/types/types'
import addSlideIcon from '../../../shared/icons/addSlideIcon.svg'
import addImageIcon from '../../../shared/icons/addImageIcon.svg'
import addTextIcon from '../../../shared/icons/addTextIcon.svg'
import cancelIcon from '../../../shared/icons/cancelIcon.svg'
import chooseTemplateIcon from '../../../shared/icons/chooseTemplateIcon.svg'
import returnIcon from '../../../shared/icons/returnIcon.svg'
import pointerIcon from '../../../shared/icons/pointerIcon.svg'
import addShapeIcon from '../../../shared/icons/addShapeIcon.svg'

type TopPanelWidgetProps = {
    slides: SlideType[]
    setSlides(slides: SlideType[]): void
    selected: Selected
}

const TopPanelWidget = ({
    setSlides,
    slides,
    selected,
}: TopPanelWidgetProps) => {
    const allSlides = [...slides]

    function addSlide() {
        const newSlide: SlideType = {
            id: slides[slides.length - 1].id + 1,
            background: 'color',
            backgroundValue: '#FFFFFF',
            objects: [],
        }
        allSlides.push(newSlide)
        setSlides(allSlides)
    }

    function createIdObject() {
        if (
            slides[selected.slidesIds[selected.slidesIds.length - 1] - 1]
                .objects.length != 0
        ) {
            return (
                slides[selected.slidesIds[selected.slidesIds.length - 1] - 1]
                    .objects[
                    slides[
                        selected.slidesIds[selected.slidesIds.length - 1] - 1
                    ].objects.length - 1
                ].id + 1
            )
        }
        return 1
    }

    function addObject(type: 'text' | 'image' | 'shape') {
        let object: ObjectType
        switch (type) {
            case 'text':
                object = {
                    id: createIdObject(),
                    width: 60,
                    height: 30,
                    startX: 200,
                    startY: 3,
                    borderStyle: 'none',
                    borderWidth: 2,
                    borderColor: '#000000',
                    fontSize: 14,
                    fontColor: 'green',
                    fontFamily: 'FuturaPT',
                    bold: true,
                    italic: false,
                    underlined: true,
                    highlighter: 'blue',
                    underlineColor: 'purple',
                    value: `House of Tom's cat`,
                    oType: 'ObjectTextType',
                }
                break
            case 'image':
                object = {
                    id: createIdObject(),
                    width: 50,
                    height: 70,
                    startX: 20,
                    startY: 0,
                    borderStyle: 'none',
                    borderWidth: 2,
                    borderColor: '#000000',
                    caption: 'table',
                    imageSrcType: 'imageLink',
                    imageSrc:
                        'https://yandex.ru/images/search?pos=2&from=tabbar&img_url=https%3A%2F%2Fsun9-43.userapi.com%2FiqwD9yUoXMZZGVcRP3Hg5bCfZYX8oJvAm7Obiw%2FQdTgOWe9YlE.jpg&text=rfhnbrf&rpt=simage&lr=41',
                    oType: 'ObjectImageType',
                }
                break
            case 'shape':
                object = {
                    id: createIdObject(),
                    width: 20,
                    height: 30,
                    startX: 180,
                    startY: 20,
                    borderStyle: 'none',
                    borderWidth: 2,
                    borderColor: '#000000',
                    type: 'line',
                    endX: 200,
                    endY: 40,
                    shapeBgColor: '#c22dd0',
                    oType: 'ObjectShapeType',
                }
                break
        }
        allSlides.forEach((slide) => {
            if (
                slide.id === selected.slidesIds[selected.slidesIds.length - 1]
            ) {
                slide.objects.push(object)
            }
        })
        setSlides(allSlides)
    }

    return (
        <>
            <PresentationName name={''} />
            <div className={styles.topPanel}>
                <AddElementButton
                    icon={addSlideIcon}
                    onClickChange={() => {
                        addSlide()
                    }}
                />
                <AddElementButton
                    icon={chooseTemplateIcon}
                    onClickChange={() => {
                        console.log(
                            'Открытие панельки с готовой заготовкой слайдов',
                        )
                    }}
                />
                <AddElementButton
                    icon={cancelIcon}
                    onClickChange={() => {
                        console.log(1)
                    }}
                />
                <AddElementButton
                    icon={returnIcon}
                    onClickChange={() => {
                        console.log(1)
                    }}
                />
                <AddElementButton
                    icon={pointerIcon}
                    onClickChange={() => {
                        console.log(4)
                    }}
                />
                <AddElementButton
                    icon={addTextIcon}
                    onClickChange={() => {
                        addObject('text')
                    }}
                />
                <AddElementButton
                    icon={addImageIcon}
                    onClickChange={() => {
                        addObject('image')
                    }}
                />
                <AddElementButton
                    icon={addShapeIcon}
                    onClickChange={() => {
                        addObject('shape')
                    }}
                />
            </div>
        </>
    )
}
export { TopPanelWidget }
