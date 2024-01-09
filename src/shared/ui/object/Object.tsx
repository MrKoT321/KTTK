import { TextObject, ShapeObject, ImageObject } from './objects'
import { ObjectImageType, ObjectShapeType, ObjectTextType } from '../../types/types'
import { layoutParams as lp } from 'shared/tools/layoutParams'
import { useAppSelector } from '../../redux/store'
import React from 'react'

type ObjectLocationType = 'sideSlide' | 'currentSlide' | 'slideShowSlide'

type ObjectProps = {
    object: ObjectImageType | ObjectTextType | ObjectShapeType
    isSideSlide?: boolean
    isObjectSelected: boolean
    objectLocation: ObjectLocationType
    handleMouseDown?: (e: React.MouseEvent<HTMLDivElement>, isSelected: boolean) => void
    handleMouseDownResize?: (arg: React.MouseEvent<HTMLDivElement>) => void
}

const Object = ({ object, isObjectSelected, objectLocation, handleMouseDown, handleMouseDownResize }: ObjectProps) => {
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
            switch (objectLocation) {
                case 'slideShowSlide':
                    return (
                        <TextObject
                            id={object.id}
                            width={lp.slideShowScale * object.width}
                            height={lp.slideShowScale * object.height}
                            startX={lp.slideShowScale * object.startX}
                            startY={lp.slideShowScale * object.startY}
                            borderStyle={object.borderStyle}
                            borderWidth={lp.slideShowScale * object.borderWidth}
                            borderColor={object.borderColor}
                            fontSize={lp.slideShowScale * object.fontSize}
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
                            isBlocked={true}
                        />
                    )
                case 'sideSlide':
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
                            isBlocked={true}
                        />
                    )
                case 'currentSlide':
                    return <TextObject {...props} />
            }
            break
        }
        case 'ObjectShapeType':
            switch (objectLocation) {
                case 'slideShowSlide':
                    switch (object.type) {
                        case 'circle':
                            return (
                                <ShapeObject
                                    id={object.id}
                                    width={lp.slideShowScale * object.width}
                                    height={lp.slideShowScale * object.height}
                                    startX={lp.slideShowScale * object.startX}
                                    startY={lp.slideShowScale * object.startY}
                                    borderStyle={object.borderStyle}
                                    borderWidth={lp.slideShowScale * object.borderWidth}
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
                            return (
                                <ShapeObject
                                    id={object.id}
                                    width={lp.slideShowScale * object.width}
                                    height={lp.slideShowScale * object.height}
                                    startX={lp.slideShowScale * object.startX}
                                    startY={lp.slideShowScale * object.startY}
                                    borderStyle={object.borderStyle}
                                    borderWidth={lp.slideShowScale * object.borderWidth}
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
                                    width={lp.slideShowScale * object.width}
                                    height={lp.slideShowScale * object.height}
                                    startX={lp.slideShowScale * object.startX}
                                    startY={lp.slideShowScale * object.startY}
                                    borderStyle={object.borderStyle}
                                    borderWidth={lp.slideShowScale * object.borderWidth}
                                    borderColor={object.borderColor}
                                    type={object.type}
                                    shapeBgColor={object.shapeBgColor}
                                    oType={object.oType}
                                    direction={object.direction}
                                    lineWidth={object.lineWidth}
                                    isSelected={isObjectSelected}
                                    handleMouseDown={handleMouseDown}
                                    handleMouseDownResize={handleMouseDownResize}
                                />
                            )
                    }
                    break
                case 'sideSlide':
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
                                    borderStyle={object.borderStyle}
                                    borderWidth={lp.sideSlideScale * object.borderWidth}
                                    borderColor={object.borderColor}
                                    type={object.type}
                                    shapeBgColor={object.shapeBgColor}
                                    oType={object.oType}
                                    direction={object.direction}
                                    lineWidth={object.lineWidth}
                                    isSelected={isObjectSelected}
                                    handleMouseDown={handleMouseDown}
                                    handleMouseDownResize={handleMouseDownResize}
                                />
                            )
                    }
                    break
                case 'currentSlide':
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
                                    borderStyle={object.borderStyle}
                                    borderWidth={object.borderWidth}
                                    borderColor={object.borderColor}
                                    type={object.type}
                                    shapeBgColor={object.shapeBgColor}
                                    oType={object.oType}
                                    direction={object.direction}
                                    lineWidth={object.lineWidth}
                                    isSelected={isObjectSelected}
                                    handleMouseDown={handleMouseDown}
                                    handleMouseDownResize={handleMouseDownResize}
                                />
                            )
                    }
            }
            break
        case 'ObjectImageType':
            switch (objectLocation) {
                case 'slideShowSlide':
                    return (
                        <ImageObject
                            id={object.id}
                            width={lp.slideShowScale * object.width}
                            height={lp.slideShowScale * object.height}
                            startX={lp.slideShowScale * object.startX}
                            startY={lp.slideShowScale * object.startY}
                            borderStyle={object.borderStyle}
                            borderWidth={lp.slideShowScale * object.borderWidth}
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
                case 'sideSlide':
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
                case 'currentSlide':
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
}

export { Object }
