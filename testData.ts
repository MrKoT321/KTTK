import {Editor} from './types'

const minEditor: Editor = {
    document: {
        name: 'Name',
        slides: [
            {
                id: 1,
                background: 'color',
                bgValue: '#FFFFFF',
                objects: [],
            },
        ],
    },
    selected: {
        slides: [1],
        objects: [],
    }
}

const mediumEditor: Editor = {
    document: {
        name: 'Name',
        slides: [
            {
                id: 1,
                background: 'color',
                bgValue: '#FFFFFF',
                objects: [
                    {
                        id: 1,
                        width: 20,
                        height: 30,
                        startX: 34,
                        startY: 3,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        caption: 'table',
                        imageSrcType: 'imageBase64',
                        imageSrc: 'ergergegerger',
                    },
                    {
                        id: 2,
                        width: 20,
                        height: 30,
                        startX: 34,
                        startY: 3,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        type: 'rect',
                        endX: 45,
                        endY: 56,
                        shapeBgColor: '#FFF55F',
                    },
                ],
            },
        ],
    },
    selected: {
        slides: [1],
        objects: [1, 2],
    }
}

const maxEditor: Editor = {
    document: {
        name: 'Name',
        slides: [
            {
                id: 1,
                background: 'color',
                bgValue: '#FFFFFF',
                objects: [
                    {
                        id: 1,
                        width: 20,
                        height: 30,
                        startX: 34,
                        startY: 3,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        caption: 'table',
                        imageSrcType: 'imageBase64',
                        imageSrc: 'ergergegerger.img',
                    },
                    {
                        id: 2,
                        width: 20,
                        height: 30,
                        startX: 34,
                        startY: 3,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        type: 'rect',
                        endX: 45,
                        endY: 56,
                        shapeBgColor: '#FFF55F',
                    },
                    {
                        id: 3,
                        width: 20,
                        height: 30,
                        startX: 34,
                        startY: 3,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        fontSize: 14,
                        fontColor: 'green',
                        fontFamily: 'FuturaPT',
                        bold: true,
                        italic: false,
                        underlined: true,
                        highlighter: 'blue',
                        underlineColor: 'purple',
                        value: `House of Maxim's cat`,
                    },
                ],
            },
            {
                id: 2,
                background: 'color',
                bgValue: '#FFFFFF',
                objects: [
                    {
                        id: 4,
                        width: 20,
                        height: 30,
                        startX: 34,
                        startY: 3,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        caption: 'table',
                        imageSrcType: 'imageBase64',
                        imageSrc: 'https://www.fonstola.ru/images/201305/fonstola.ru_96099.jpg',
                    },
                    {
                        id: 5,
                        width: 20,
                        height: 30,
                        startX: 34,
                        startY: 3,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        type: 'rect',
                        endX: 45,
                        endY: 56,
                        shapeBgColor: '#FFF55F',
                    },
                    {
                        id: 6,
                        width: 20,
                        height: 30,
                        startX: 34,
                        startY: 3,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        fontSize: 14,
                        fontColor: 'green',
                        fontFamily: 'FuturaPT',
                        bold: true,
                        italic: false,
                        underlined: true,
                        highlighter: 'blue',
                        underlineColor: 'purple',
                        value: `House of Maxim's cat`,
                    },
                ],
            },
        ],
    },
    selected: {
        slides: [1],
        objects: [1, 2, 3],
    }
}

export {
    minEditor,
    mediumEditor,
    maxEditor,
}