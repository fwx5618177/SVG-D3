export interface positionStyle {
    top: number,
    left: number,
}

export interface widthStyle {
    width: number,
    height: number,
}

export type StyleStand = positionStyle & widthStyle;

export interface CircleStructure<U, T> {
    name: U,
    key: T,
    x: T,
    y: T,
    cursor: U,
}

export interface SvgConf<U, T> {
    readonly svgWidth: U,
    readonly svgHeight: U,
    readonly svgLeft: U,
    readonly svgTop: U,
    readonly split: U,
    readonly circleRadius: U,
    polygon: T,
}