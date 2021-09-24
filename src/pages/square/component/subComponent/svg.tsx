import React, { useRef } from "react";
import { CircleStructure } from "./interface";
import { SvgDefault, getCircle, DIRECTION, STATE_STATUE } from './svg.cong';

class SvgTag extends React.Component<any, STATE_STATUE> {
    readonly split: number = SvgDefault.split;
    readonly circleRadius: number = SvgDefault.circleRadius;
    readonly borderWidth: number[] = [0,1,2,3,4,5];
    
    polygon: string = SvgDefault.polygon;
    circleList: any = DIRECTION;
    circle: any[] = getCircle(DIRECTION);

    moveFlag = false;
    startX = 0;
    startY = 0;

    dragFlag = false;
    dragStartX = 0;
    dragStartY = 0;

    constructor(props: any) {
        super(props);

        this.state = {
            svgWidth: SvgDefault.svgWidth,
            svgHeight: SvgDefault.svgHeight,
            svgLeft: SvgDefault.svgLeft,
            svgTop: SvgDefault.svgTop,
            circleList: this.circleList,
            circle: this.circle,
            polygon: this.getPolygon(this.circle),
        };

        console.log('\x1B[41m start: \x1B[0m \n', this.state.polygon, this.state.circle, this.state.circleList);
    }


    getPolygon(lines: any[]): string {
        let tmpArr: string[] = [];

        for(let i of this.circle) {
            let point: string = i.join(' ');
            tmpArr.push(point);
        }

        return tmpArr.join(',');
    }

    getPosition(ele: any) {
        let tmpLeft: number = ele.offsetLeft;
        let tmpTop: number = ele.offsetTop;
        let parent: any = ele.offsetParent;

        while(!!parent){
            tmpLeft += parent?.offsetLeft;
            tmpTop += parent?.offsetTop;

            parent = parent.offsetParent;
        }

        // @ts-ignore
        let sider = document.getElementsByClassName('ant-layout-sider')[0].clientWidth;
        // @ts-ignore
        let topBar = document.getElementsByClassName('ant-layout-header')[0].clientHeight;
        let svgTag = document.getElementById('svgTag');
        
        return {
            // @ts-ignore
            SvgPositionStartLeft: tmpLeft + sider + svgTag?.offsetLeft,
            // @ts-ignore
            SvgPositionStartTop: 404 + svgTag?.offsetHeight,
        }
    }

    borderCheck(x: number, y: number) {
        const { SvgPositionStartLeft, SvgPositionStartTop } = this.getPosition(this.refs.svgEle);
        const { SvgPositionEndRight, SvgPositionEndBottom } = {
            SvgPositionEndRight: SvgPositionStartLeft + SvgDefault.svgWidth,
            SvgPositionEndBottom: SvgPositionStartTop + SvgDefault.svgHeight,
        };

        // console.log(' this.refs.svgEle:', 
        //     SvgPositionStartLeft, SvgPositionStartTop,
        //     SvgPositionEndRight, SvgPositionEndBottom);
        
        // 边缘检测
        if(x >= SvgPositionStartLeft 
            && x <= SvgPositionEndRight
            && y >= SvgPositionStartTop
            && y <=  SvgPositionEndBottom) return true

        return false
    }

    handleMouseDown(e: any) {
        const targetX = e.clientX;
        const targetY = e.clientY;

        this.moveFlag = true;
        if(this.borderCheck(targetX, targetY)) {
            this.startX = targetX;
            this.startY = targetY;
            this.setState({
                startX: this.startX,
                startY: this.startY,
            })
        }

        // console.log(
        //     e, 
        //     this.borderCheck(targetX, targetY),
        //     this.state.svgLeft, 
        //     this.state.svgTop,
        //     this.state.svgWidth,
        //     this.state.svgHeight,
        //     '\n click: ', targetX, 
        //     targetY,
        //     '\n',
        //     this.moveFlag);
    }

    handleMove(e: any) {
        // console.log('move flag:', this.moveFlag, this.moveFlag);
        if(!this.moveFlag) return;
        const targetX = e.clientX;
        const targetY = e.clientY;

        let moveX = targetX - (this.state?.startX as number);
        let moveY = targetY - (this.state?.startY as number);
        console.log('MOVE: \n', moveX, moveY);
        
        // 误差修正
        // if(Math.abs(moveX) < this.borderWidth[5] || Math.abs(moveY) < this.borderWidth[5]) {
        //     moveX = 0;
        //     moveY = 0;
        // };

        // const tmpList = this.circleList.map((item: any) => {
        //     item.x += moveX;
        //     item.y += moveY;

        //     return item
        // })
        
        // const tmpCircle = getCircle(tmpList);
        // const tmpPolygon = this.getPolygon(tmpCircle);

        // @ts-ignore
        const leftPosition = this.state.svgLeft + moveX;
        // @ts-ignore
        const topPosition = this.state.svgTop + moveY;

        let cardLimit = document.getElementsByClassName('ant-card-body')[0];

        this.setState({
            svgLeft: leftPosition < cardLimit.clientLeft ? cardLimit.clientLeft : leftPosition,
            svgTop: topPosition < cardLimit.clientHeight ? cardLimit.clientHeight : topPosition,
            // circleList: tmpList,
            // circle: tmpCircle,
            // polygon: tmpPolygon,
        })
    }

    handleMouseUp(e: any) {
        this.moveFlag = false;

        this.startX = e.clientX;
        this.startY = e.clientY;
        this.setState({
            startX: this.startX,
            startY: this.startY,
        })

        console
        .log('event:', this.state);
    }

    handleMouseOut(e: any) {
        this.moveFlag = false;
    }

    handleTransform(direction: string, e: any) {
        let { x, y } = this.state.circleList?.find(val => val.name === direction);

        console.log('dire:', direction, x, y, e.type);

        switch(e.type) {
            case 'mousemove':
                if(!this.dragFlag) return;

                const startX = e.clientX;
                const startY = e.clientY;

                const move = {
                    disX: startX - this.dragStartX,
                    disY: startY - this.dragStartY,
                };

                x += move.disX;
                y += move.disY;
                const tmpCircleList: CircleStructure<string, number>[] | undefined= this.state.circleList?.map(item => {
                    if(item.name === direction) {
                        item.x = x;
                        item.y = y;
                    }

                    return item;
                });

                const tmpCircle = getCircle((tmpCircleList as CircleStructure<string, number>[]));
                const tmpPolygon = this.getPolygon(tmpCircle);
                this.setState({
                    circleList: tmpCircleList,
                    circle: tmpCircle,
                    polygon: tmpPolygon,
                });
                break;
            case 'mousedown':
                this.dragFlag = true;
                this.dragStartX = e.clientX;
                this.dragStartY = e.clientY;
                break;
            case 'mouseup':
                this.dragFlag = false;
                break;
            default:
                this.dragFlag = false;
                break;
        }
    }

    // handlerDragPoint(direction: string, e: any, )
    
    render() {
        return (
            <div id="svgTag" style={{ zIndex: 1, height: 'auto' }}
            ref="svgEle"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{ 
                        position:'absolute',
                        left: this.state.svgLeft,
                        top: this.state.svgTop,
                        width: this.state.svgWidth,
                        height: this.state.svgHeight,
                        cursor: 'move',
                    }}
                    onMouseDown={e => this.handleMouseDown(e)}
                    onMouseMove={e => this.handleMove(e)}
                    onMouseUp={e => this.handleMouseUp(e)}
                    onMouseOut={e => this.handleMouseOut(e)}
                    >
                    <polyline points={this.state.polygon} style={{ fill:'white', strokeWidth: 2, stroke: 'red' }}></polyline>
                    {
                        this.state.circleList?.map((item: CircleStructure<string, number>, index:number) => (
                            <circle key={index} cx={item?.x} cy={item.y} r={this.circleRadius} stroke="red" style={{
                                cursor: item.cursor,
                            }} 
                            onClick={e => this.handleTransform(item.name, e)}
                            onMouseUp={e => this.handleTransform(item.name, e)}
                            onMouseMove={e => this.handleTransform(item.name, e)}
                            onMouseDown={e => this.handleTransform(item.name, e)}
                            ></circle>
                        ))
                    }
                </svg>
            </div>
        )
    }
}

export default SvgTag;