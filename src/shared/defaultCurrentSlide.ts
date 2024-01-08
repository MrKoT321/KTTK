import { SlideType } from './types/types'

export const defaultCurrentSlide: SlideType = {
    background: 'color',
    backgroundValue: '#FFFFFF',
    objects: [
        {
            id: 1,
            width: 100,
            height: 100,
            startX: 100,
            startY: 100,
            borderStyle: 'none',
            borderWidth: 2,
            borderColor: '#000000',
            fontSize: 10,
            fontColor: '#000000',
            fontFamily: 'FuturaPT',
            bold: true,
            italic: true,
            underlined: true,
            highlighter: '',
            underlineColor: '#000000',
            value: 'wefewfewfewffewwe',
            oType: 'ObjectTextType',
        },
    ],
}
