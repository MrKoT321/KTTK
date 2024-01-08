import styles from './SelectImagePopUp.module.css'
import closeIcon from '../../../shared/icons/closeIcon.svg'
import { useState } from 'react'
import { MouseStates } from '../../../shared/types/types'
import { addObject } from 'shared/tools/addObject'
import { useAppActions, useAppSelector } from '../../../shared/redux/store'

const SelectImagePopUp = () => {
    const isPopUpOpen = useAppSelector((state) => state.imagePopUp.isPopUpOpen)
    const { slidesMap, currentSlideId } = useAppSelector((state) => state.slides)
    const { setSlides, setSelectImagePopUpState } = useAppActions()
    const [imageSrc, setImageSrc] = useState('')
    const [isLinkUsed, setIsLinkUsed] = useState(false)
    const [btnState, setBtnsState] = useState(true)
    const [linkValue, setLinkValue] = useState('')
    const [mouseState, setMouseState] = useState<MouseStates>('creatingBase64Img')
    const [currentMouseX, setCurrentMouseX] = useState(600)
    const [currentMouseY, setCurrentMouseY] = useState(600)
    const [startMouseX, setStartMouseX] = useState(500)
    const [startMouseY, setStartMouseY] = useState(500)

    const linkNotUsed = () => {
        setLinkValue('')
        setIsLinkUsed(false)
    }

    const findImgFromLink = () => {
        fetch(linkValue, { mode: 'no-cors' })
            .then((res) => {
                if (res.status != 404) {
                    const image = new Image()
                    image.src = linkValue
                    image.onload = () => {
                        setStartMouseX(750 - image.width / 2)
                        setStartMouseY(550 - image.height / 2)
                        setCurrentMouseX(750 + image.width / 2)
                        setCurrentMouseY(550 + image.height / 2)
                    }
                    setIsLinkUsed(true)
                    setImageSrc(linkValue)
                }
            })
            .catch(() => {
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

    const createImage = (ref: string, imageWidth = 0, imageHeight = 0, imageSrcBase64 = '') => {
        if (ref == 'creatingBase64Img') {
            setMouseState('creatingBase64Img')
            addObject({
                currentSlideId,
                slidesMap,
                setSlides,
                mouseState,
                currentMouseX: 750 + imageWidth / 2,
                startMouseX: 750 - imageWidth / 2,
                startMouseY: 550 - imageHeight / 2,
                currentMouseY: 550 + imageHeight / 2,
                createPosition,
                imageSrc: imageSrcBase64,
            })
        }
        if (ref == 'creatingLinkImg') {
            setMouseState('creatingLinkImg')
            addObject({
                currentSlideId,
                slidesMap,
                setSlides,
                mouseState,
                currentMouseX: currentMouseX,
                startMouseX: startMouseX,
                startMouseY: startMouseY,
                currentMouseY: currentMouseY,
                createPosition,
                imageSrc,
            })
            setImageSrc('')
        }
    }

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectImagePopUpState(false)
        new Promise((resolve, reject) => {
            if (e.target.files !== null) {
                const file = Array.from(e.target.files)[0]
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => {
                    const image = new Image()
                    image.src = reader.result as string
                    image.onload = () => {
                        createImage('creatingBase64Img', image.width, image.height, reader.result as string)
                    }
                    resolve(reader.result as string)
                }
                reader.onerror = reject
            }
        })
    }

    const createLinkImage = () => {
        setSelectImagePopUpState(false)
        createImage('creatingLinkImg')
    }

    return (
        <div className={isPopUpOpen ? styles.popUpBackground : styles.hidden}>
            <div className={styles.popUpBlock}>
                <div className={styles.popUpHeader}>
                    <span>Вставка картинки</span>
                    <img
                        src={closeIcon}
                        className={styles.popUpHeaderCloseBtn}
                        onClick={() => {
                            setSelectImagePopUpState(false)
                            linkNotUsed()
                        }}
                        alt={''}
                    />
                </div>
                <div className={styles.popupToolBar}>
                    <button
                        className={btnState ? styles.popupToolBarChoiceSelected : styles.popupToolBarChoice}
                        onClick={() => {
                            setBtnsState(true)
                        }}
                    >
                        С компьютера
                    </button>
                    <button
                        className={btnState ? styles.popupToolBarChoice : styles.popupToolBarChoiceSelected}
                        onClick={() => {
                            setBtnsState(false)
                        }}
                    >
                        Ссылка
                    </button>
                </div>
                <hr className={styles.popupToolBarLine} />
                <div className={styles.popUpContent}>
                    <div className={btnState ? null : styles.hidden}>
                        <label htmlFor={'fileLoader'} className={styles.popUpContentImageLabelBlock}>
                            <span>Загрузить фотографию</span>
                        </label>
                        <input
                            type={'file'}
                            accept={'image/png, image/jpeg'}
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
