import {
    ObjectImageType,
    ObjectShapeType,
    ObjectTextType,
    ObjectType,
    SlideType,
} from '../../../../../shared/types/types'
import { jsPDF } from 'jspdf'
import { CanvasTextWrapper } from 'canvas-text-wrapper'

function setBackgroundColor(doc: jsPDF, bgColor: string, slideSize: number[]) {
    doc.setFillColor(bgColor)
    doc.rect(0, 0, slideSize[0], slideSize[1], 'F')
}

function convertTextFontToString(textObject: ObjectTextType): string {
    const fontWeight = textObject.bold ? 'bold' : 'normal'
    const fontStyle = textObject.italic ? 'italic' : 'normal'
    const fontSize = textObject.fontSize
    return fontStyle + ' ' + fontWeight + ' ' + fontSize
}

function addTextBox(doc: jsPDF, textObject: ObjectTextType) {
    if (textObject.value) {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (ctx) {
            const value = textObject.value
            const font = convertTextFontToString(textObject)
            canvas.width = textObject.width
            canvas.height = textObject.height
            ctx.fillStyle = textObject.fontColor
            if (textObject.borderWidth !== 0) {
                ctx.lineWidth = textObject.borderWidth
            }
            CanvasTextWrapper(canvas, value, { font: font })
            const base64 = canvas.toDataURL()
            doc.addImage(base64, 'PNG', textObject.startX, textObject.startY, textObject.width, textObject.height)
        }
    }
}

function addImage(doc: jsPDF, imageObject: ObjectImageType) {
    if (imageObject.imageSrc) {
        doc.addImage(
            imageObject.imageSrc,
            'PNG',
            imageObject.startX,
            imageObject.startY,
            imageObject.width,
            imageObject.height,
        )
    }
}

function addCircle(doc: jsPDF, circle: ObjectShapeType) {
    doc.setFillColor(circle.shapeBgColor)
    doc.ellipse(
        circle.startX + circle.width / 2,
        circle.startY + circle.height / 2,
        circle.width / 2,
        circle.height / 2,
        'FD',
    )
}

function addRect(doc: jsPDF, rect: ObjectShapeType) {
    doc.setFillColor(rect.shapeBgColor)
    doc.rect(rect.startX, rect.startY, rect.width, rect.height, 'FD')
}

function addTriangle(doc: jsPDF, triangle: ObjectShapeType) {
    doc.setFillColor(triangle.shapeBgColor)
    doc.triangle(
        triangle.startX + triangle.width / 2,
        triangle.startY,
        triangle.width,
        triangle.height,
        triangle.startX,
        triangle.height,
        'FD',
    )
}

function addLine(doc: jsPDF, line: ObjectShapeType) {
    doc.setDrawColor(line.shapeBgColor)
    doc.setLineWidth(line.borderWidth)
    doc.line(line.startX, line.startY, line.width, line.height, 'FD')
}

function addShape(doc: jsPDF, shapeObject: ObjectShapeType) {
    if (shapeObject.type === 'circle') {
        addCircle(doc, shapeObject)
    }
    if (shapeObject.type === 'rect') {
        addRect(doc, shapeObject)
    }
    if (shapeObject.type === 'triangle') {
        addTriangle(doc, shapeObject)
    }
    if (shapeObject.type === 'line') {
        addLine(doc, shapeObject)
    }
}

function addSlideObject(doc: jsPDF, slideObject: ObjectType) {
    return new Promise((resolve) => {
        if (slideObject.oType === 'ObjectTextType') {
            addTextBox(doc, slideObject)
        }
        if (slideObject.oType === 'ObjectImageType') {
            addImage(doc, slideObject)
        }
        if (slideObject.oType === 'ObjectShapeType') {
            addShape(doc, slideObject)
        }
        resolve(Promise)
    })
}

function addSlideObjects(doc: jsPDF, slideObjects: ObjectType[]) {
    slideObjects.forEach((object) => {
        return addSlideObject(doc, object)
    })
}

async function addSlides(doc: jsPDF, slides: SlideType[], slideSize: number[]) {
    slides.forEach((slide) => {
        if (slide.background === 'color') {
            setBackgroundColor(doc, slide.backgroundValue, slideSize)
        }
        // else {
        // await setBackgroundImage(doc, slide.backgroundValue)
        // }
        addSlideObjects(doc, slide.objects)
        doc.addPage()
    })
}

async function exportPresentationAsPdf(slidesMap: Map<string, SlideType>, presentationName: string) {
    const slides = Array.from(slidesMap.values())
    const slideSize = [1000, 560]
    const doc = new jsPDF({
        unit: 'px',
        orientation: 'l',
        format: slideSize,
    })
    await addSlides(doc, slides, slideSize)
    doc.deletePage(doc.getNumberOfPages())
    doc.save(presentationName)
}

export { exportPresentationAsPdf }
