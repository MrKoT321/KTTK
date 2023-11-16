import styles from './TopPanelWidget.module.css'
import { PresentationName } from '../../presentationNameWidget'
import { ToolBar } from '../../toolBar/ui/ToolBar'
import { AddElementButton } from '../../../shared/ui/object/AddElementButton'
import { ObjectType, Selected, SlideType } from '../../../shared/types/types'

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
    function addObject(type: 'text' | 'image' | 'shape') {
        let object: ObjectType
        console.log(allSlides)
        switch (type) {
            case 'text':
                object = {
                    id: 1,
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
                    id: 1,
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
                    id: 1,
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
        console.log(allSlides)
    }

    return (
        <>
            <PresentationName name={''} />
            <ToolBar />
            <div className={styles.topPanel}>
                <AddElementButton
                    icon="./shared/icons/image_1.svg"
                    onClickChange={() => {
                        addSlide()
                    }}
                />
                <AddElementButton
                    icon="/shared/icons/image 2.svg"
                    onClickChange={() => {
                        console.log(
                            'Открытие панельки с готовой заготовкой слайдов',
                        )
                    }}
                />
                <AddElementButton
                    icon="/shared/icons/image 3.svg"
                    onClickChange={() => {
                        console.log(1)
                    }}
                />
                <AddElementButton
                    icon="/shared/icons/image 4.svg"
                    onClickChange={() => {
                        console.log(1)
                    }}
                />
                <AddElementButton
                    icon="/shared/icons/image 5.svg"
                    onClickChange={() => {
                        addObject('text')
                    }}
                />
                <AddElementButton
                    icon="/shared/icons/image 6.svg"
                    onClickChange={() => {
                        addObject('image')
                    }}
                />
                <AddElementButton
                    icon="/shared/icons/image 7.svg"
                    onClickChange={() => {
                        addObject('shape')
                    }}
                />
                <AddElementButton
                    icon="/shared/icons/image 11.svg"
                    onClickChange={() => {
                        console.log(1)
                    }}
                />
            </div>
        </>
    )
}
export { TopPanelWidget }
