import { Arrow } from '../../../features/arrow/ui/arrow'
import { Text } from '../../../features/text/ui/text'
import { Image } from '../../../features/image/ui/image'
import { Shape } from '../../../features/shape/ui/shape'
import { Line } from '../../../features/line/ui/line'
import { ContinueStory } from '../../../features/continueStory/ui/ContinueStory'
import { ReturnStory } from '../../../features/returnStory/ui/ReturnStory'
import styles from './TopPanelWidget.module.css'
// ? Сделать две линии:первая - навигация, вторая - редактор, тогда поменять на flex-direction: colum
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
