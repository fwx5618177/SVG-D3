import React from 'react';
import * as d3 from 'd3';

class Rect extends React.Component {
    state = {
        name: 'rect'
     }

     data = [10, 200, 390];

     generateData(data: number[]) {
         let tmpArr = [];
         for(let i = 0; i < data.length; i++) {
             for(let j = 0; j < data.length; j++) {
                tmpArr.push([data[i], data[j]]);
             }
         }

         return tmpArr;
     }

     componentDidMount() {
         const width = 400;
         const height = 400;
        // @ts-ignore
         const svg = d3.select(this.refs.rect).append('svg');
        const points = 'Z' + this.generateData(this.data).map(val => val.join(',')).join(' ');

         svg.attr('width', width)
            .attr('height', height);

        svg.append('path')
            .attr('d', points)

        console.log(points);
        
         
     }

    render() {
        return (
            <div ref={this.state.name}></div>
        )
    }

}

export default Rect;