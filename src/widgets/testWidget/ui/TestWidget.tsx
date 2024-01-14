import styles from './TestWidget.module.css'
import { useRef, useState } from 'react'
import { useOutsideClick } from '../../../shared/hooks/useOutsideClick'
import { CSSTransition } from 'react-transition-group'

const TestWidget = () => {
    const [isPopoverOpen1, setIsPopoverOpen1] = useState(false)
    const callerRef1 = useRef(null)
    const popoverRef1 = useRef(null)
    // const [isPopoverOpen2, setIsPopoverOpen2] = useState(false)
    // const callerRef2 = useRef(null)
    // const popoverRef2 = useRef(null)

    useOutsideClick({
        callerRef: callerRef1,
        ref: popoverRef1,
        callback: () => {
            if (isPopoverOpen1) {
                setIsPopoverOpen1(false)
            }
        },
    })

    // useOutsideClick({
    //     callerRef: callerRef2,
    //     ref: popoverRef2,
    //     callback: () => {
    //         if (isPopoverOpen2) {
    //             setIsPopoverOpen2(false)
    //         }
    //     },
    // })

    return (
        <div className={styles.testPage}>
            <div className={styles.menu}>
                <div className={styles.caller} ref={callerRef1} onClick={() => setIsPopoverOpen1(!isPopoverOpen1)}>
                    Вызвать первый поповер
                </div>
                {/*<div className={styles.caller} ref={callerRef2} onClick={() => setIsPopoverOpen2(!isPopoverOpen2)}>*/}
                {/*    Вызвать второй поповер*/}
                {/*</div>*/}
            </div>
            <div className={styles.popovers}>
                <CSSTransition in={isPopoverOpen1} timeout={300} classNames="example" unmountOnExit>
                    <div className={styles.toolPopup1} ref={popoverRef1}>
                        Первый
                    </div>
                </CSSTransition>
                {/*<CSSTransition in={isPopoverOpen2} timeout={300} classNames="example" unmountOnExit>*/}
                {/*    <div className={styles.toolPopup2} ref={popoverRef2}>*/}
                {/*        Второй*/}
                {/*    </div>*/}
                {/*</CSSTransition>*/}
            </div>
        </div>
    )
}

export { TestWidget }
