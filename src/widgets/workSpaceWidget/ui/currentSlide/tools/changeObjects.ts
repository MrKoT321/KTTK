import { layoutParams as lp } from 'shared/tools/layoutParams'
import { MoveObj } from '../../../../../shared/types/MoveObj'
import { SlideType } from '../../../../../shared/types/types'

type ChangeObjectParams = {
    moveObjs: MoveObj[]
    currentSlide: SlideType
}

const changeObjects = ({ moveObjs, currentSlide }: ChangeObjectParams) => {
    moveObjs.map((currObject) => {
        currentSlide.objects.map((object) => {
            if (object.id === currObject.id) {
                object.startX = currObject.style.left - lp.sideBarWidth
                object.startY = currObject.style.top - lp.topPanelHeight
            }
        })
    })
}

export { changeObjects }
