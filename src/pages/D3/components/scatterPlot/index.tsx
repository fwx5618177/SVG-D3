import React, { Component } from "react";
import * as d3 from 'd3';

class ScatterPlot extends Component {

    state = {
        name: 'scatter'
    }

    componentDidMount() {
        const dataset = [
            [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
            [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
        ];

        // @ts-ignore
        const svg = d3.select(this.refs.scatter)
        .append('svg')
        .attr('width', 500)
        .attr('height', 200)
        .style('background-color', '#00ccff')
        
        svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('cx', d => d[0])
            .attr('cy', d => d[1])
            .attr('r', d => Math.sqrt((200 - d[1]) / Math.PI))
            .attr('fill', 'teal')
            .attr('stroke', 'red')

            svg.selectAll('text')
                .data(dataset)
                .enter()
                .append('text')
                .text(d => `${d[0]}, ${d[1]}`)
                .attr('x', d => d[0])
                .attr('y', d => d[1])
                .attr('font-family', 'sans-serif')
                .attr('font-size', '11px')
                .attr('fill', 'white')
    }

    render() {
        return (
            <>
                <div ref={this.state.name}></div>
            </>
        )
    }
}

export default ScatterPlot;