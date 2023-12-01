import styles from './selectImagePopUp.module.css'
import closeIcon from '../../../shared/icons/closeIcon.svg'
import { useState } from 'react'
import { MouseStates, Selected, SlideType } from '../../../shared/types/types'
import { addObject } from 'shared/tools/addObject'

type SelectImagePopUpProps = {
    slides: SlideType[]
    selected: Selected
    setSlides: (slides: SlideType[]) => void
    isPopUpOpen: boolean
    closePopUp(): void
}

const SelectImagePopUp = ({ slides, selected, setSlides, isPopUpOpen, closePopUp }: SelectImagePopUpProps) => {
    const [imageSrc, setImageSrc] = useState('')
    const [isLinkUsed, setIsLinkUsed] = useState(false)
    const [btnState, setBtnsState] = useState(true)
    const [linkValue, setLinkValue] = useState('')
    const [mouseState, setMouseState] = useState<MouseStates>('creatingBase64Img')
    const [currentMouseX, setCurrentMouseX] = useState(200) //TODO: Заменить на центр слайда
    const [currentMouseY, setCurrentMouseY] = useState(200) //TODO: Заменить на центр слайда
    const [startMouseX, setStartMouseX] = useState(100) //TODO: Заменить на центр слайда
    const [startMouseY, setStartMouseY] = useState(100) //TODO: Заменить на центр слайда
    const allSlides = [...slides]
    const chooseCompBtn = () => {
        setBtnsState(() => true)
    }

    const chooseLinkBtn = () => {
        setBtnsState(() => false)
    }

    const linkUsed = () => {
        setIsLinkUsed(true)
    }

    const linkNotUsed = () => {
        setLinkValue('')
        setIsLinkUsed(false)
    }

    const findImgFromLink = () => {
        fetch(linkValue)
            .then((res) => {
                if (res.status != 404) {
                    linkUsed()
                    setImageSrc(linkValue)
                }
            })
            .catch((err) => {
                linkNotUsed()
            })
    }

    const createPosition = (startMousePos: number, currentMousePos: number) => {
        if (startMousePos >= currentMousePos) {
            return currentMousePos
        } else {
            return startMousePos
        }
    }

    const createImage = (someRef: string, imageSrcBase64 = '') => {
        if (someRef == 'creatingBase64Img') {
            setMouseState('creatingBase64Img')
            addObject({
                mouseState,
                currentMouseX,
                startMouseX,
                startMouseY,
                currentMouseY,
                slides,
                selected,
                allSlides,
                setSlides,
                createPosition,
                imageSrc: imageSrcBase64,
            })
        }
        if (someRef == 'creatingLinkImg') {
            setMouseState('creatingLinkImg')
            addObject({
                mouseState,
                currentMouseX,
                startMouseX,
                startMouseY,
                currentMouseY,
                slides,
                selected,
                allSlides,
                setSlides,
                createPosition,
                imageSrc,
            })
        }
    }

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        closePopUp()
        new Promise((resolve, reject) => {
            if (e.target.files !== null) {
                const file = Array.from(e.target.files)[0]
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => {
                    createImage('creatingBase64Img', reader.result as string)
                    resolve(reader.result as string)
                }
                reader.onerror = reject
            }
        })
    }

    const createLinkImage = () => {
        closePopUp()
        createImage('creatingLinkImg')
    }

    return (
        <div className={isPopUpOpen ? styles.popUpBackground : styles.hidden}>
            <div className={styles.popUpBlock}>
                <div className={styles.popUpHeader}>
                    <span>Вставка картинки</span>
                    <img src={closeIcon} className={styles.popUpHeaderCloseBtn} onClick={closePopUp} alt={''} />
                </div>
                <div className={styles.popupToolBar}>
                    <button
                        className={btnState ? styles.popupToolBarChoiceSelected : styles.popupToolBarChoice}
                        onClick={chooseCompBtn}
                    >
                        С компьютера
                    </button>
                    <button
                        className={btnState ? styles.popupToolBarChoice : styles.popupToolBarChoiceSelected}
                        onClick={chooseLinkBtn}
                    >
                        Ссылка
                    </button>
                </div>
                <hr
                    style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '1px',
                        width: '100%',
                    }}
                />
                <div className={styles.popUpContent}>
                    <div className={btnState ? null : styles.hidden}>
                        <label htmlFor={'fileLoader'} className={styles.popUpContentImageLabel}>
                            <span>Загрузить</span>
                        </label>
                        <input
                            type={'file'}
                            id={'fileLoader'}
                            className={styles.hidden}
                            onChange={handleFileSelected}
                        />
                    </div>
                    <div className={btnState ? styles.hidden : styles.popUpContentLinkBlock}>
                        <div className={styles.popUpContentLinkInputBlock}>
                            <input
                                type={'text'}
                                value={linkValue}
                                className={styles.popUpContentLinkInput}
                                placeholder={'Вставьте ссылку на фотографию'}
                                onChange={(event) => {
                                    setLinkValue(event.target.value)
                                }}
                            />
                            <button
                                id={'findByLink'}
                                className={styles.popUpContentLinkFindBtn}
                                onClick={findImgFromLink}
                            >
                                Найти
                            </button>
                        </div>
                        <div className={isLinkUsed ? styles.popUpContentLinkFindBlock : styles.hidden}>
                            <div className={styles.popUpContentLinkImgBlock}>
                                <img src={imageSrc} alt={''} />
                            </div>
                            <div className={styles.popUpContentLinkImgBtns}>
                                <button className={styles.popUpContentLinkImgDeleteBtn} onClick={linkNotUsed}>
                                    Удалить
                                </button>
                                <button className={styles.popUpContentLinkImgConfirmBtn} onClick={createLinkImage}>
                                    Подтвердить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SelectImagePopUp }
