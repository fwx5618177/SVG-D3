import React, { Component } from "react";
import * as d3 from 'd3';
import { columnDataset, columnPadding } from './config';
import { hoverChangeColor } from './lib';

class D3Svg extends Component {
    state = {
        name: 'd3svg'
    }

    componentDidMount() {
        const w = 400;
        const h = 400;

        // @ts-ignore
        const svg = d3.select(this.refs.d3svg)
            .append('svg')
            .attr('width', w)
            .attr('height', h)

        // rect
        const rectStep = 35;
        const rectWidth = 30;

        const rect = svg.selectAll('rect')
            .data(columnDataset)
            .enter()
            .append('rect')
            .attr('fill', 'steelblue')
            .attr('x', (d, i) => columnPadding.left + i * rectStep)
            .attr('y', d => h - columnPadding.bottom - d)
            .attr('width', rectWidth)
            .attr('height', d => d)
            
        const columnMouseEnter = rect.on('mouseenter', event => {
            d3.select(event.target)
            .attr('fill', 'orange')
        })

        const columnMouseOver = rect.on('mouseout', event => {
            d3.select(event.target)
            .attr('fill', 'steelblue')
        })
            
        const columnText = svg.selectAll('text')
            .data(columnDataset)
            .enter()
            .append('text')
            .attr('fill', 'white')
            .attr('font-size', '14px')
            .attr('cursor', 'default')
            .attr('text-anchor', 'middle')
            .attr('x', (d, i) => columnPadding.left + i * rectStep)
            .attr('y', d => h - columnPadding.bottom - d)
            .attr('dx', rectWidth / 2)
            .attr('dy', '1em')
            .text(d => d);

        // const columnTextMouseEnter = hoverChangeColor(d3, columnText, 'mouseenter', 'fill', 'orange')
        // const columnTextMOuseOut = hoverChangeColor(d3, columnText, 'mouseout', 'fill', 'steelblue')
    }

    render() {
        return (
            <div ref={this.state.name}></div>
        )
    }
}

export default D3Svg;