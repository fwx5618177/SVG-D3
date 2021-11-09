/**
 * Instro:
 * - 制作可以拖拉拽变形的矩阵
 * @author wenxuanfeng
 * @since 2021/11/10
 */
import React from 'react';
import * as d3 from 'd3';

class Rect extends React.Component {
    state = {
        name: 'rect'
     };

     flag = false;

     data = [10, 200, 390];

     /**
      * 
      * @param {number[]} data 数据初始化处理的数据
      * @returns 
      */
     generateData(data: number[]) {
         let tmpArr = [];
         for(let i = 0; i < data.length; i++) {
             for(let j = 0; j < data.length; j++) {
                if( data[i] === 200 && data[j] === 200) continue;
                tmpArr.push([data[i], data[j]]);
             }
         }

         const tmpData = [
            [10,10, 'nw-resize'], 
            [10,200, 'w-resize'],
            [10,390, 'sw-resize'],
            [200,390, 's-resize'],
            [390,390, 'se-resize'],
            [390,200, 'e-resize'],
            [390,10, 'ne-resize'],
            [200,10, 'n-resize'],
         ]
        //  return tmpArr;
        return tmpData;
     }

     componentDidMount() {
         const width = 400;
         const height = 400;
        // @ts-ignore
        const svg = d3.select(this.refs.rect).append('svg');
        const points = this.generateData(this.data).map(val => [val[0], val[1]].join(',')).join(' ');

        svg.attr('width', width)
            .attr('height', height);

        // 绘制矩形
        svg.append('path')
            .attr('d', 'M ' + points + ' Z')
            .attr('fill', 'none')
            .attr('stroke', 'black')
            .attr('stroke-width', 2)

        // 打印目前矩形点的坐标
        console.log(points);

        // 创建可拖拉拽的点
        svg.selectAll('circle')
        .data(this.generateData(this.data))
        .enter()
        .append('circle')
        .attr('cx', d => d[0])
        .attr('cy', d => d[1])
        .attr('r', 10)
        .attr('fill', 'red')
        .attr('className', 'move')
        .attr('style', d => `cursor: ${d[2]};`)
        // 拖拉拽的算法设计
        /**
         * @instro
         *  - 当鼠标按下时，才会触发之后的行为
         *  - 当鼠标弹起时，所有行为全部停止
         *  - 当鼠标移动时，点和图像的位置发生变换
         */
        .on('mousedown', (event) => {
            console.log(event.type);
            if(event.type === 'mousedown') this.flag = true;
            
            if(!this.flag) return;

            event.target.onmousemove = (event: any) => {
                if(this.flag) console.log(2, +event.x, +event.y);
            }

            event.target.onmouseout = (event: any) => {
                if(this.flag) console.log(3, event.type);
                this.flag = false;
                return;
            }

            event.target.onmouseup = (event: any) => {
                console.log(4, event.type);
                this.flag = false;
                return;
            }
        })
         
     }

    render() {
        return (
            <div ref={this.state.name}></div>
        )
    }

}

export default Rect;