import React, { Component } from "react";
import * as d3 from 'd3';

class ScaleChart extends Component {
    state = {
        scale: 'scale',
    }

    componentDidMount() {
        const dataset = [
            [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
            [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
        ];        

        const w = 500;
        const h = 300;

        const xMax: number = d3.max(dataset, d => d[0]) || w
        const yMax: number = d3.max(dataset, d => d[1]) || h

        const xScale = d3.scaleLinear()
            .domain([
                0,
                xMax
            ])
            .range([0, w])
        const yScale = d3.scaleLinear()
            .domain([
                0,
                yMax
            ])
            .range([0, h])

            // @ts-ignore
            const svg = d3.select(this.refs.scale)
            .append('svg')
            .attr('width', 500)
            .attr('height', 200)
            .style('background-color', '#00ccff')

            svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('cx', d => xScale(d[0]))
            .attr('cy', d => yScale(d[1]))
            .attr('r', d => Math.sqrt((200 - d[1]) / Math.PI))
            .attr('fill', 'teal')
            .attr('stroke', 'red')

            svg.selectAll('text')
                .data(dataset)
                .enter()
                .append('text')
                .text(d => `${d[0]}, ${d[1]}`)
                .attr('x', d => xScale(d[0]))
                .attr('y', d => yScale(d[1]))
                .attr('font-family', 'sans-serif')
                .attr('font-size', '11px')
                .attr('fill', 'white')
    }

    render() {
        return (
            <>
            <div ref={this.state.scale}></div>
            </>
        )
    }
}

export default ScaleChart;