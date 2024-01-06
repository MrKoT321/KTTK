import { layoutParams as lp } from 'shared/tools/layoutParams'
import { SlideType } from '../../../shared/types/types'
import { MoveObj } from '../../../shared/types/devTypes'

type ChangeObjectParams = {
    moveObjs: MoveObj[]
    currentSlide: SlideType
}

const changeObjects = ({ moveObjs, currentSlide }: ChangeObjectParams) => {
    moveObjs.map((currObject) => {
        currentSlide.objects.map((object) => {
            if (object.id === currObject.id) {
                object.startX = currObject.style.left - lp.currentSlideIndentX
                object.startY = currObject.style.top - lp.currentSlideIndentY
            }
        })
    })
}

export { changeObjects }
