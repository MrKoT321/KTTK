import styles from './selectImagePopUp.module.css'
import closeIcon from '../../../shared/icons/closeIcon.svg'
import { useState } from 'react'

type SelectImagePopUpProps = {
    isPopUpOpen: boolean
    closePopUp(): void
}

const SelectImagePopUp = ({ isPopUpOpen, closePopUp }: SelectImagePopUpProps) => {
    const [linkImgSrc, setLinkImgSrc] = useState('')
    const [isLinkUsed, setIsLinkUsed] = useState(false)
    const [btnState, setBtnsState] = useState(true)
    const [linkValue, setLinkValue] = useState('')
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
        fetch(linkValue).then((res) => {
            if (res.status != 404) {
                linkUsed()
                setLinkImgSrc(linkValue)
            }
        })
    }

    return (
        <div className={isPopUpOpen ? styles.popUpBackground : styles.hidden}>
            <div className={styles.popUpBlock}>
                <div className={styles.popUpHeader}>
                    <span>Вставка картинки</span>
                    <img src={closeIcon} className={styles.popUpHeaderCloseBtn} onClick={closePopUp} />
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
                        <input type={'file'} id={'fileLoader'} className={styles.hidden} />
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
                                <img src={linkImgSrc} />
                            </div>
                            <div className={styles.popUpContentLinkImgBtns}>
                                <button className={styles.popUpContentLinkImgDeleteBtn} onClick={linkNotUsed}>
                                    Удалить
                                </button>
                                <button className={styles.popUpContentLinkImgConfirmBtn}>Подтвердить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SelectImagePopUp }
