import React from "react";
import * as d3 from 'd3';

class Linear extends React.Component {

    state = {
        name: 'linear'
    }

    componentDidMount() {
        const width = 600
        const height = 200
        const xData = [
            1.0,
            3.0,
            4.0,
            4.5,
            4.6,
            5.0,
            6.0,
            8.0,
            9.0,
        ]

        const yData = [
            0.001,
            0.003,
            0.024,
            0.054,
            0.062,
            0.100,
            0.176,
            0.198,
            0.199,
        ]

        const y2Data = [
            0.63,
            0.84,
            0.56,
            0.22,
            0.15,
            0.08,
            0.20,
            0.71,
            0.65,
        ]

        d3.tsv('/src/pages/D3/components/line/dataset.tsv')
        .then(data => {
            const pxX = 600;
            const pxY = 300;

            const scX = d3.scaleLinear()
            // @ts-ignore
                .domain(d3.extent(data, d => d['x']))
                .range([0, pxX]);

            const scY1 = d3.scaleLinear()
            // @ts-ignore
                .domain(d3.extent(data, d => d['y1']))
                .range([pxY, 0]);
            
            const scY2 = d3.scaleLinear()
                // @ts-ignore
                .domain(d3.extent(data, d => d['y2']))
                .range([pxY, 0]);

                // @ts-ignore
            const svg = d3.select(this.refs.linear)
                .append('svg')
                .attr('width', width)
                .attr('height', height);

            svg
            .append('g')
            .attr('id', 'ds1')
            .selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('r', 5)
            .attr('fill', 'green')
            .attr('cx', d => scX(d['x'] as any))
            .attr('cy', d => scY1(d['y1'] as any));

            svg
            .append('g')
            .attr('id', 'ds2')
            .attr('fill', 'blue')
            .selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('r', 5)
            .attr('fill', 'green')
            .attr('cx', d => scX(d['x'] as any))
            .attr('cy', d => scY2(d['y2'] as any));

            const lineMaker = d3.line()
                .x(d => scX(d['x' as any]))
                .y(d => scY1(d['y1' as any]));

            d3.select('#ds1')
                .append('path')
                .attr('fill', 'none')
                .attr('stroke', 'red')
                .attr('d', lineMaker(data as any));

            lineMaker.y(d => scY2(d['y2' as any]));

            d3.select('#ds2')
            .append('path')
            .attr('fill', 'none')
            .attr('stroke', 'cyan')
            .attr('d', lineMaker(data as any));
        })
    }

    render() {
        return (
            <div ref={this.state.name}>

            </div>
        )
    }
}

export default Linear;