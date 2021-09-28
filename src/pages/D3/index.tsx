import React from "react";
import * as d3 from 'd3';
import './index.css';

class D3Case extends React.Component {

    state = {
        name: 'd3bg'
    }

    constructor(props: any) {
        super(props);

    }
    componentDidMount() {
        // const data = [5,10,15,20,25,10,5];
        let data: number[] = []
        for (let i = 0; i < 25; i++) {
            data.push(Math.random() * 30);
        }
        console.log(data);

        // @ts-ignore
        d3.select(this.refs.d3bg)
            // .classed('bar', true)
            // .selectAll('p')
            // .data(data)
            // .enter()
            // .append('p')
            // .text(val => val)
            // .style('background-color', 'red')
            .selectAll('div')
            .data(data)
            .enter()
            .append('div')
            .attr('class', 'bar')
            // .style('display', 'inline-block')
            // .style('background-color', 'teal')
            // .style('width', 20 + 'px')
            .style('height', d => d * 5 + 'px')
            .style('margin-right', 2 + 'px')


    }

    render() {
        return (
            // @ts-ignore
            <div ref={this.state.name}>
            </div>
        );
    }
}

export default D3Case;