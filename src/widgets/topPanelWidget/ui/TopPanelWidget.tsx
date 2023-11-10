import { ContinueStory } from '../../continueStory'
// import { GetArrow } from '../../getArrow'
// import { GetImage } from '../../getImage/'
// import { GetLine } from '../../getLine/'
// import { GetShape } from '../../shape'
// import { GetText } from '../../getText/'
import { ReturnStory } from '../../returnStory'
import styles from './TopPanelWidget.module.css'
// ? Сделать две линии:первая - навигация, вторая - редактор, тогда поменять на flex-direction: colum
const TopPanelWidget = () => (
    <div className={styles.topPanel}>
        <ReturnStory />
        <ContinueStory />
        {/*<GetArrow />*/}
        {/*<GetText />*/}
        {/*<GetImage />*/}
        {/*<GetShape />*/}
        {/*<GetLine />*/}
    </div>
)

export { TopPanelWidget }
