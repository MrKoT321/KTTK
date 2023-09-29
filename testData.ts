import {Editor} from './types'

const minEditor: Editor = {
    document: {
        name: 'Name',
        slides: [
            {
                id: 1,
                background: 'color',
                backgroundValue: '#FFFFFF',
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
                backgroundValue: '#FFFFFF',
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
                        imageSrc: 'TUlNRS1WZXJzaW9uOiAxLjANClgtTWFpbGVyOiBNYWlsQmVlLk5FVCA4LjAuNC40MjgNClN1Ympl' +
                            'Y3Q6IHRlc3Qgc3ViamVjdA0KVG86IGtldmlubUBkYXRhbW90aW9uLmNvbQ0KQ29udGVudC1UeXBl' +
                            'OiBtdWx0aXBhcnQvYWx0ZXJuYXRpdmU7DQoJYm91bmRhcnk9Ii0tLS09X05leHRQYXJ0XzAwMF9B' +
                            'RTZCXzcyNUUwOUFGLjg4QjdGOTM0Ig0KDQoNCi0tLS0tLT1fTmV4dFBhcnRfMDAwX0FFNkJfNzI1' +
                            'RTA5QUYuODhCN0Y5MzQNCkNvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsNCgljaGFyc2V0PSJ1dGYt' +
                            'OCINCkNvbnRlbnQtVHJhbnNmZXItRW5jb2Rpbmc6IHF1b3RlZC1wcmludGFibGUNCg0KdGVzdCBi' +
                            'b2R5DQotLS0tLS09X05leHRQYXJ0XzAwMF9BRTZCXzcyNUUwOUFGLjg4QjdGOTM0DQpDb250ZW50' +
                            'LVR5cGU6IHRleHQvaHRtbDsNCgljaGFyc2V0PSJ1dGYtOCINCkNvbnRlbnQtVHJhbnNmZXItRW5j' +
                            'b2Rpbmc6IHF1b3RlZC1wcmludGFibGUNCg0KPHByZT50ZXN0IGJvZHk8L3ByZT4NCi0tLS0tLT1f' +
                            'TmV4dFBhcnRfMDAwX0FFNkJfNzI1RTA5QUYuODhCN0Y5MzQtLQ0K',
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
                backgroundValue: '#FFFFFF',
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
                        imageSrc: 'TUlNRS1WZXJzaW9uOiAxLjANClgtTWFpbGVyOiBNYWlsQmVlLk5FVCA4LjAuNC40MjgNClN1Ympl' +
                            'Y3Q6IHRlc3Qgc3ViamVjdA0KVG86IGtldmlubUBkYXRhbW90aW9uLmNvbQ0KQ29udGVudC1UeXBl' +
                            'OiBtdWx0aXBhcnQvYWx0ZXJuYXRpdmU7DQoJYm91bmRhcnk9Ii0tLS09X05leHRQYXJ0XzAwMF9B' +
                            'RTZCXzcyNUUwOUFGLjg4QjdGOTM0Ig0KDQoNCi0tLS0tLT1fTmV4dFBhcnRfMDAwX0FFNkJfNzI1' +
                            'RTA5QUYuODhCN0Y5MzQNCkNvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsNCgljaGFyc2V0PSJ1dGYt' +
                            'OCINCkNvbnRlbnQtVHJhbnNmZXItRW5jb2Rpbmc6IHF1b3RlZC1wcmludGFibGUNCg0KdGVzdCBi' +
                            'b2R5DQotLS0tLS09X05leHRQYXJ0XzAwMF9BRTZCXzcyNUUwOUFGLjg4QjdGOTM0DQpDb250ZW50' +
                            'LVR5cGU6IHRleHQvaHRtbDsNCgljaGFyc2V0PSJ1dGYtOCINCkNvbnRlbnQtVHJhbnNmZXItRW5j' +
                            'b2Rpbmc6IHF1b3RlZC1wcmludGFibGUNCg0KPHByZT50ZXN0IGJvZHk8L3ByZT4NCi0tLS0tLT1f' +
                            'TmV4dFBhcnRfMDAwX0FFNkJfNzI1RTA5QUYuODhCN0Y5MzQtLQ0K',
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
                        caption: 'table',
                        imageSrcType: 'imageLink',
                        imageSrc: 'https://yandex.ru/images/search?pos=2&from=tabbar&img_url=https%3A%2F%2Fsun9-43.userapi.com%2FiqwD9yUoXMZZGVcRP3Hg5bCfZYX8oJvAm7Obiw%2FQdTgOWe9YlE.jpg&text=rfhnbrf&rpt=simage&lr=41',
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
                        type: 'rect',
                        endX: 45,
                        endY: 56,
                        shapeBgColor: '#FFF55F',
                    },
                    {
                        id: 4,
                        width: 20,
                        height: 30,
                        startX: 34,
                        startY: 3,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        type: 'triangle',
                        endX: 45,
                        endY: 56,
                        shapeBgColor: '#FFF55F',
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
                        type: 'arrow',
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
                        type: 'circle',
                        endX: 45,
                        endY: 56,
                        shapeBgColor: '#FFF55F',
                    },
                    {
                        id: 7,
                        width: 20,
                        height: 30,
                        startX: 34,
                        startY: 3,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        type: 'line',
                        endX: 45,
                        endY: 56,
                        shapeBgColor: '#FFF55F',
                    },
                    {
                        id: 8,
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
                    {
                        id: 9,
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
                        value: `Вот вам яркий пример современных тенденций — реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы обучения кадров, соответствующей насущным потребностям! Предварительные выводы неутешительны: начало повседневной работы по формированию позиции играет определяющее значение для системы массового участия. Приятно, граждане, наблюдать, как независимые государства являются только методом политического участия и превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.`,
                    },
                ],
            },
            {
                id: 2,
                background: 'color',
                backgroundValue: '#FFFFFF',
                objects: [
                    {
                        id: 10,
                        width: 20,
                        height: 30,
                        startX: 34,
                        startY: 3,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        caption: 'table',
                        imageSrcType: 'imageLink',
                        imageSrc: 'https://www.fonstola.ru/images/201305/fonstola.ru_96099.jpg',
                    },
                    {
                        id: 11,
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
                        id: 12,
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