import { Editor } from './types/types'

const minEditor: Editor = {
    document: {
        name: 'Name',
        slides: [
            {
                id: 1,
                order: 1,
                background: 'color',
                backgroundValue: '#FFFFFF',
                objects: [],
            },
        ],
    },
    selected: {
        selectedSlideIds: [1],
        selectedObjectIds: [],
    },
}

const mediumEditor: Editor = {
    document: {
        name: 'Name',
        slides: [
            {
                id: 1,
                order: 1,
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
                        imageSrc:
                            'TUlNRS1WZXJzaW9uOiAxLjANClgtTWFpbGVyOiBNYWlsQmVlLk5FVCA4LjAuNC40MjgNClN1Ympl' +
                            'Y3Q6IHRlc3Qgc3ViamVjdA0KVG86IGtldmlubUBkYXRhbW90aW9uLmNvbQ0KQ29udGVudC1UeXBl' +
                            'OiBtdWx0aXBhcnQvYWx0ZXJuYXRpdmU7DQoJYm91bmRhcnk9Ii0tLS09X05leHRQYXJ0XzAwMF9B' +
                            'RTZCXzcyNUUwOUFGLjg4QjdGOTM0Ig0KDQoNCi0tLS0tLT1fTmV4dFBhcnRfMDAwX0FFNkJfNzI1' +
                            'RTA5QUYuODhCN0Y5MzQNCkNvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsNCgljaGFyc2V0PSJ1dGYt' +
                            'OCINCkNvbnRlbnQtVHJhbnNmZXItRW5jb2Rpbmc6IHF1b3RlZC1wcmludGFibGUNCg0KdGVzdCBi' +
                            'b2R5DQotLS0tLS09X05leHRQYXJ0XzAwMF9BRTZCXzcyNUUwOUFGLjg4QjdGOTM0DQpDb250ZW50' +
                            'LVR5cGU6IHRleHQvaHRtbDsNCgljaGFyc2V0PSJ1dGYtOCINCkNvbnRlbnQtVHJhbnNmZXItRW5j' +
                            'b2Rpbmc6IHF1b3RlZC1wcmludGFibGUNCg0KPHByZT50ZXN0IGJvZHk8L3ByZT4NCi0tLS0tLT1f' +
                            'TmV4dFBhcnRfMDAwX0FFNkJfNzI1RTA5QUYuODhCN0Y5MzQtLQ0K',
                        oType: 'ObjectImageType',
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
                        shapeBgColor: '#FFF55F',
                        oType: 'ObjectShapeType',
                    },
                ],
            },
        ],
    },
    selected: {
        selectedSlideIds: [1],
        selectedObjectIds: [1, 2],
    },
}

const maxEditor: Editor = {
    document: {
        name: '',
        slides: [
            {
                id: 1,
                order: 1,
                background: 'color',
                backgroundValue: '#fc6969',
                objects: [
                    {
                        id: 1,
                        width: 20,
                        height: 30,
                        startX: 0,
                        startY: 0,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        caption: 'table',
                        imageSrcType: 'imageBase64',
                        imageSrc:
                            'TUlNRS1WZXJzaW9uOiAxLjANClgtTWFpbGVyOiBNYWlsQmVlLk5FVCA4LjAuNC40MjgNClN1Ympl' +
                            'Y3Q6IHRlc3Qgc3ViamVjdA0KVG86IGtldmlubUBkYXRhbW90aW9uLmNvbQ0KQ29udGVudC1UeXBl' +
                            'OiBtdWx0aXBhcnQvYWx0ZXJuYXRpdmU7DQoJYm91bmRhcnk9Ii0tLS09X05leHRQYXJ0XzAwMF9B' +
                            'RTZCXzcyNUUwOUFGLjg4QjdGOTM0Ig0KDQoNCi0tLS0tLT1fTmV4dFBhcnRfMDAwX0FFNkJfNzI1' +
                            'RTA5QUYuODhCN0Y5MzQNCkNvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsNCgljaGFyc2V0PSJ1dGYt' +
                            'OCINCkNvbnRlbnQtVHJhbnNmZXItRW5jb2Rpbmc6IHF1b3RlZC1wcmludGFibGUNCg0KdGVzdCBi' +
                            'b2R5DQotLS0tLS09X05leHRQYXJ0XzAwMF9BRTZCXzcyNUUwOUFGLjg4QjdGOTM0DQpDb250ZW50' +
                            'LVR5cGU6IHRleHQvaHRtbDsNCgljaGFyc2V0PSJ1dGYtOCINCkNvbnRlbnQtVHJhbnNmZXItRW5j' +
                            'b2Rpbmc6IHF1b3RlZC1wcmludGFibGUNCg0KPHByZT50ZXN0IGJvZHk8L3ByZT4NCi0tLS0tLT1f' +
                            'TmV4dFBhcnRfMDAwX0FFNkJfNzI1RTA5QUYuODhCN0Y5MzQtLQ0K',
                        oType: 'ObjectImageType',
                    },
                    {
                        id: 2,
                        width: 50,
                        height: 70,
                        startX: 20,
                        startY: 0,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        caption: 'table',
                        imageSrcType: 'imageLink',
                        imageSrc:
                            'https://yandex.ru/images/search?pos=2&from=tabbar&img_url=https%3A%2F%2Fsun9-43.userapi.com%2FiqwD9yUoXMZZGVcRP3Hg5bCfZYX8oJvAm7Obiw%2FQdTgOWe9YlE.jpg&text=rfhnbrf&rpt=simage&lr=41',
                        oType: 'ObjectImageType',
                    },
                    {
                        id: 3,
                        width: 20,
                        height: 30,
                        startX: 70,
                        startY: 0,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        type: 'rect',
                        shapeBgColor: '#73ff54',
                        oType: 'ObjectShapeType',
                    },
                    {
                        id: 4,
                        width: 20,
                        height: 110,
                        startX: 110,
                        startY: 30,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        type: 'triangle',
                        shapeBgColor: '#d23f5a',
                        oType: 'ObjectShapeType',
                    },
                    {
                        id: 5,
                        width: 20,
                        height: 30,
                        startX: 130,
                        startY: 70,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        type: 'line',
                        shapeBgColor: '#FFF55F',
                        oType: 'ObjectShapeType',
                    },
                    {
                        id: 6,
                        width: 20,
                        height: 30,
                        startX: 160,
                        startY: 0,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        type: 'circle',
                        radius: 10,
                        shapeBgColor: '#6a46c5',
                        oType: 'ObjectShapeType',
                    },
                    {
                        id: 7,
                        width: 20,
                        height: 30,
                        startX: 180,
                        startY: 20,
                        borderStyle: 'none',
                        borderWidth: 2,
                        borderColor: '#000000',
                        type: 'line',
                        shapeBgColor: '#c22dd0',
                        oType: 'ObjectShapeType',
                    },
                    {
                        id: 8,
                        width: 60,
                        height: 30,
                        startX: 200,
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
                        value: `House of Tom's cat`,
                        oType: 'ObjectTextType',
                    },
                    {
                        id: 9,
                        width: 200,
                        height: 350,
                        startX: 10,
                        startY: 100,
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
                        oType: 'ObjectTextType',
                    },
                ],
            },
            {
                id: 2,
                order: 2,
                background: 'color',
                backgroundValue: '#57bbff',
                objects: [
                    {
                        id: 10,
                        width: 200,
                        height: 300,
                        startX: 500,
                        startY: 35,
                        borderStyle: 'solid',
                        borderWidth: 5,
                        borderColor: '#ff0000',
                        caption: 'table',
                        imageSrcType: 'imageLink',
                        imageSrc: 'https://www.fonstola.ru/images/201305/fonstola.ru_96099.jpg',
                        oType: 'ObjectImageType',
                    },
                    {
                        id: 11,
                        width: 20,
                        height: 30,
                        startX: 0,
                        startY: 0,
                        borderStyle: 'solid',
                        borderWidth: 10,
                        borderColor: '#000000',
                        type: 'rect',
                        shapeBgColor: '#FFF55F',
                        oType: 'ObjectShapeType',
                    },
                    {
                        id: 12,
                        width: 160,
                        height: 80,
                        startX: 340,
                        startY: 0,
                        borderStyle: 'solid',
                        borderWidth: 2,
                        borderColor: '#000000',
                        fontSize: 30,
                        fontColor: '#c50dd7',
                        fontFamily: 'FuturaPT',
                        bold: true,
                        italic: true,
                        underlined: true,
                        highlighter: 'blue',
                        underlineColor: 'purple',
                        value: `House of Bishop's cat`,
                        oType: 'ObjectTextType',
                    },
                ],
            },
        ],
    },
    selected: {
        selectedSlideIds: [2],
        selectedObjectIds: [1, 2, 3],
    },
}

export { minEditor, mediumEditor, maxEditor }
