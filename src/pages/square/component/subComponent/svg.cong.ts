import { CircleStructure, SvgConf } from "./interface";

export const DIRECTION: CircleStructure<string, number>[] = [
    {
        name: 'nw',
        key: 1,
        x: 0,
        y: 0,
        cursor: 'nwse-resize',
    },
    {
        name: 'w',
        key: 2,
        x: 0,
        y: 50,
        cursor: 'ew-resize',
    },
    {
        name: 'sw',
        key: 3,
        x: 0,
        y: 100,
        cursor: 'nesw-resize',
    },
    {
        name: 's',
        key: 4,
        x: 50,
        y: 100,
        cursor: 'ns-resize',
    },
    {
        name: 'se',
        key: 5,
        x: 100,
        y: 100,
        cursor: 'nwse-resize',
    },
    {
        name: 'e',
        key: 6,
        x: 100,
        y: 50,
        cursor: 'ew-resize',
    },
    {
        name: 'ne',
        key: 7,
        x: 100,
        y: 0,
        cursor: 'nesw-resize',
    },
    {
        name: 'n',
        key: 8,
        x: 50,
        y: 0,
        cursor: 'ns-resize',
    },
    {
        name: 'nw',
        key: 9,
        x: 0,
        y: 0,
        cursor: 'nwse-resize',
    },
];

export const getCircle = (param: CircleStructure<string, number>[]) => {
    let afterCircle = param;
    let tmpArr = [];
    for(let i of afterCircle) {
        i.x += SVG_DEFAULT_VALUE.CIRCLE_RADIUS;
        i.y += SVG_DEFAULT_VALUE.CIRCLE_RADIUS;

        tmpArr.push([i.x, i.y]);
    }

    return tmpArr;
}

// 配置方框
enum SVG_DEFAULT_VALUE {
    SVG_WIDTH = 100,
    SVG_HEIGHT = 100,
    SVG_LEFT = 250,
    SVG_TOP = 250,
    SVG_SPLIT = 2, // 每个线段上的点
    CIRCLE_RADIUS = 5, // 点的圆的半径
}

export const SvgDefault: SvgConf<number, string> = {
    svgWidth: SVG_DEFAULT_VALUE.SVG_WIDTH + SVG_DEFAULT_VALUE.CIRCLE_RADIUS * 2,
    svgHeight: SVG_DEFAULT_VALUE.SVG_HEIGHT + SVG_DEFAULT_VALUE.CIRCLE_RADIUS * 2,
    svgLeft: SVG_DEFAULT_VALUE.SVG_LEFT,
    svgTop: SVG_DEFAULT_VALUE.SVG_TOP,
    split: SVG_DEFAULT_VALUE.SVG_SPLIT,
    circleRadius: SVG_DEFAULT_VALUE.CIRCLE_RADIUS,
    polygon: '',
}

export interface STATE_STATUE {
    circle?: any[],
    polygon?: string,
    circleList?: any[],
    svgWidth?: number,
    svgHeight?: number,
    svgLeft?: number,
    svgTop?: number,
    startX?: number,
    startY?: number,
}