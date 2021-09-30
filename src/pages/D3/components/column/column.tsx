import React from "react";
import * as d3 from 'd3';
import './index.css';

class ColumnDraw extends React.Component {
    state = {
        name: 'd3bg',
    }

    constructor(props: any) {
        super(props);

    }

    componentDidMount() {
        const dataset = [5,10,15,20,25,10,5];
        let data: number[] = []
        for (let i = 0; i < 25; i++) {
            data.push(Math.round(Math.random() * 30));
        }
        console.log(data);

        // @ts-ignore
        // d3.select(this.refs.d3bg)
        //     // .classed('bar', true)
        //     // .selectAll('p')
        //     // .data(data)
        //     // .enter()
        //     // .append('p')
        //     // .text(val => val)
        //     // .style('background-color', 'red')
        //     .selectAll('div')
        //     .data(data)
        //     .enter()
        //     .append('div')
        //     .attr('class', 'bar')
        //     // .style('display', 'inline-block')
        //     // .style('background-color', 'teal')
        //     // .style('width', 20 + 'px')
        //     .style('height', d => d * 5 + 'px')
        //     .style('margin-right', 2 + 'px')

        const h = 100;
        const w = 500;
        const barPadding = 1;
        // const posi = Math.round(Math.random() * 20)
        // @ts-ignore
        const svg = d3.select(this.refs.d3bg)
                        .append('svg')
                        .attr('width', w)
                        .attr('height', h);

        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * (w / data.length + 1))
            .attr('y', d => (h - d * 4))
            .attr('width', w / data.length - barPadding)
            .attr('height', d => d * 4)
            .attr('fill', d => `rgb(0,0,${Math.round(d * 10)})`)
        
        svg.selectAll('text')
            .data(dataset)
            .enter()
            .append('text')
            .text(d => d)
            .attr('x', (d, i) => i * (w / data.length + 1) + 4)
            .attr('y', d => h - d * 4 + 12)
            .attr('font-family', 'sans-serif')
            .attr('font-size', '11px')
            .attr('fill', 'white')

    }

    render() {
        return (
            <>
            <div ref={this.state.name}>
            </div>
            </>
        )
    }
}

export default ColumnDraw;