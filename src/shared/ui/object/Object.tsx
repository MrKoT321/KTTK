import { TextObject, ShapeObject, ImageObject } from './objects'
import { MouseStates, ObjectImageType, ObjectShapeType, ObjectTextType } from '../../types/types'
import { layoutParams as lp } from 'shared/tools/layoutParams'
import { useAppSelector } from '../../redux/store'
import React from 'react'

type ObjectProps = {
    object: ObjectImageType | ObjectTextType | ObjectShapeType
    isSideSlide?: boolean
    isObjectSelected: boolean
    handleMouseDown: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean, borderWidth: number) => void
    handleMouseDownResize: (arg: React.MouseEvent<HTMLDivElement>) => void
}

const Object = ({ object, isSideSlide, isObjectSelected, handleMouseDown, handleMouseDownResize }: ObjectProps) => {
    const selected = useAppSelector((state) => state.selected)
    switch (object.oType) {
        case 'ObjectTextType': {
            const props = {
                ...object,
                selected,
                isSelected: isObjectSelected,
                handleMouseDown,
                handleMouseDownResize,
            }
            if (isSideSlide) {
                return (
                    <TextObject
                        id={object.id}
                        width={lp.sideSlideScale * object.width}
                        height={lp.sideSlideScale * object.height}
                        startX={lp.sideSlideScale * object.startX}
                        startY={lp.sideSlideScale * object.startY}
                        borderStyle={object.borderStyle}
                        borderWidth={lp.sideSlideScale * object.borderWidth}
                        borderColor={object.borderColor}
                        fontSize={lp.sideSlideScale * object.fontSize}
                        fontColor={object.fontColor}
                        fontFamily={object.fontFamily}
                        bold={object.bold}
                        highlighter={object.highlighter}
                        underlineColor={object.fontColor}
                        value={object.value}
                        oType={object.oType}
                        isSelected={isObjectSelected}
                        handleMouseDown={handleMouseDown}
                        handleMouseDownResize={handleMouseDownResize}
                        italic={object.italic}
                        underlined={object.underlined}
                        isBlocked={isSideSlide}
                    />
                )
            }
            return <TextObject {...props} />
        }
        case 'ObjectShapeType':
            if (isSideSlide) {
                switch (object.type) {
                    case 'circle':
                        return (
                            <ShapeObject
                                id={object.id}
                                width={lp.sideSlideScale * object.width}
                                height={lp.sideSlideScale * object.height}
                                startX={lp.sideSlideScale * object.startX}
                                startY={lp.sideSlideScale * object.startY}
                                borderStyle={object.borderStyle}
                                borderWidth={lp.sideSlideScale * object.borderWidth}
                                borderColor={object.borderColor}
                                type={object.type}
                                radius={object.radius}
                                shapeBgColor={object.shapeBgColor}
                                oType={object.oType}
                                isSelected={isObjectSelected}
                                handleMouseDown={handleMouseDown}
                                handleMouseDownResize={handleMouseDownResize}
                            />
                        )
                    case 'rect':
                    case 'triangle':
                        return (
                            <ShapeObject
                                id={object.id}
                                width={lp.sideSlideScale * object.width}
                                height={lp.sideSlideScale * object.height}
                                startX={lp.sideSlideScale * object.startX}
                                startY={lp.sideSlideScale * object.startY}
                                borderStyle={object.borderStyle}
                                borderWidth={lp.sideSlideScale * object.borderWidth}
                                borderColor={object.borderColor}
                                type={object.type}
                                shapeBgColor={object.shapeBgColor}
                                oType={object.oType}
                                isSelected={isObjectSelected}
                                handleMouseDown={handleMouseDown}
                                handleMouseDownResize={handleMouseDownResize}
                            />
                        )
                    case 'line':
                        return (
                            <ShapeObject
                                id={object.id}
                                width={lp.sideSlideScale * object.width}
                                height={lp.sideSlideScale * object.height}
                                startX={lp.sideSlideScale * object.startX}
                                startY={lp.sideSlideScale * object.startY}
                                direction={object.direction}
                                borderStyle={object.borderStyle}
                                borderWidth={lp.sideSlideScale * object.borderWidth}
                                borderColor={object.borderColor}
                                type={object.type}
                                shapeBgColor={object.shapeBgColor}
                                lineWidth={lp.sideSlideScale * object.lineWidth}
                                oType={object.oType}
                                isSelected={isObjectSelected}
                                handleMouseDown={handleMouseDown}
                                handleMouseDownResize={handleMouseDownResize}
                            />
                        )
                }
            }
            switch (object.type) {
                case 'circle':
                    return (
                        <ShapeObject
                            id={object.id}
                            width={object.width}
                            height={object.height}
                            startX={object.startX}
                            startY={object.startY}
                            borderStyle={object.borderStyle}
                            borderWidth={object.borderWidth}
                            borderColor={object.borderColor}
                            type={object.type}
                            radius={object.radius}
                            shapeBgColor={object.shapeBgColor}
                            oType={object.oType}
                            isSelected={isObjectSelected}
                            handleMouseDown={handleMouseDown}
                            handleMouseDownResize={handleMouseDownResize}
                        />
                    )
                case 'rect':
                case 'triangle':
                    return (
                        <ShapeObject
                            id={object.id}
                            width={object.width}
                            height={object.height}
                            startX={object.startX}
                            startY={object.startY}
                            borderStyle={object.borderStyle}
                            borderWidth={object.borderWidth}
                            borderColor={object.borderColor}
                            type={object.type}
                            shapeBgColor={object.shapeBgColor}
                            oType={object.oType}
                            isSelected={isObjectSelected}
                            handleMouseDown={handleMouseDown}
                            handleMouseDownResize={handleMouseDownResize}
                        />
                    )
                case 'line':
                    return (
                        <ShapeObject
                            id={object.id}
                            width={object.width}
                            height={object.height}
                            startX={object.startX}
                            startY={object.startY}
                            direction={object.direction}
                            borderStyle={object.borderStyle}
                            borderWidth={object.borderWidth}
                            borderColor={object.borderColor}
                            type={object.type}
                            shapeBgColor={object.shapeBgColor}
                            lineWidth={object.lineWidth}
                            oType={object.oType}
                            isSelected={isObjectSelected}
                            handleMouseDown={handleMouseDown}
                            handleMouseDownResize={handleMouseDownResize}
                        />
                    )
            }
            break
        case 'ObjectImageType':
            if (isSideSlide) {
                return (
                    <ImageObject
                        id={object.id}
                        width={lp.sideSlideScale * object.width}
                        height={lp.sideSlideScale * object.height}
                        startX={lp.sideSlideScale * object.startX}
                        startY={lp.sideSlideScale * object.startY}
                        borderStyle={object.borderStyle}
                        borderWidth={lp.sideSlideScale * object.borderWidth}
                        borderColor={object.borderColor}
                        caption={object.caption}
                        imageSrc={object.imageSrc}
                        imageSrcType={object.imageSrcType}
                        oType={object.oType}
                        isSelected={isObjectSelected}
                        handleMouseDown={handleMouseDown}
                        handleMouseDownResize={handleMouseDownResize}
                    />
                )
            }
            return (
                <ImageObject
                    id={object.id}
                    width={object.width}
                    height={object.height}
                    startX={object.startX}
                    startY={object.startY}
                    borderStyle={object.borderStyle}
                    borderWidth={object.borderWidth}
                    borderColor={object.borderColor}
                    caption={object.caption}
                    imageSrc={object.imageSrc}
                    imageSrcType={object.imageSrcType}
                    oType={object.oType}
                    isSelected={isObjectSelected}
                    handleMouseDown={handleMouseDown}
                    handleMouseDownResize={handleMouseDownResize}
                />
            )
    }
}

export { Object }
