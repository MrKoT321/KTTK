import { EditorWidget } from '../../../widgets/editorWidget'
import {minEditor} from "../../../shared/testData";

const PresentationMaker = () => <EditorWidget  document={minEditor.document} selected={minEditor.selected} />

export { PresentationMaker }
