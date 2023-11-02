import { Arrow } from '../../../features/arrow'
import { Text } from '../../../features/text'
import { Image } from '../../../features/image'
import { Shape } from '../../../features/shape'
import { Line } from '../../../features/line'
import { ContinueStory } from '../../../features/continueStory'
import { ReturnStory } from '../../../features/returnStory'
import styles from './TopPanelWidget.module.css'
// ? Сделать две линии:первая - навигация, вторая - редактор, тогда поменять на flex-direction: column
const TopPanelWidget = () => (
    <div className={styles.topPanel}>
        <ReturnStory />
        <ContinueStory />
        <Arrow />
        <Text />
        <Image />
        <Shape />
        <Line />
    </div>
)

export { TopPanelWidget }
