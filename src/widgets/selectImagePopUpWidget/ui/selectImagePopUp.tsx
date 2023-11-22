import styles from './selectImagePopUp.module.css'
import closeIcon from '../../../shared/icons/closeIcon.svg'
import { useState } from 'react'

type SelectImagePopUpProps = {
    isPopUpOpen: boolean
    closePopUp(): void
}

const SelectImagePopUp = ({
    isPopUpOpen,
    closePopUp,
}: SelectImagePopUpProps) => {
    const [btnState, setBtnsState] = useState(true)

    const chooseCompBtn = () => {
        setBtnsState(() => true)
    }

    const chooseLinkBtn = () => {
        setBtnsState(() => false)
    }

    return (
        <div className={isPopUpOpen ? styles.popUpBackground : styles.hidden}>
            <div className={styles.popUpBlock}>
                <div className={styles.popUpHeader}>
                    <span>Вставка картинки</span>
                    <img
                        src={closeIcon}
                        className={styles.popUpHeaderCloseBtn}
                        onClick={closePopUp}
                    />
                </div>
                <div className={styles.popupToolBar}>
                    <button
                        className={
                            btnState
                                ? styles.popupToolBarChoiceSelected
                                : styles.popupToolBarChoice
                        }
                        onClick={chooseCompBtn}
                    >
                        С компьютера
                    </button>
                    <button
                        className={
                            btnState
                                ? styles.popupToolBarChoice
                                : styles.popupToolBarChoiceSelected
                        }
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
                        <label
                            htmlFor={'fileLoader'}
                            className={styles.popUpContentImageLabel}
                        >
                            {/*<span>Загрузить</span>*/}
                        </label>
                        <input
                            type={'file'}
                            id={'fileLoader'}
                            className={styles.hidden}
                        />
                    </div>
                    <div className={btnState ? styles.hidden : null}>
                        <input type={'text'} placeholder={'Вставьте ссылку'} />
                        <button id={'findByLink'}>Найти</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SelectImagePopUp }
