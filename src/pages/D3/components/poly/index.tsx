import React from "react";
import * as d3 from 'd3';

class Poly extends React.Component {
    state = {
        name: 'poly',
    }

    componentDidMount() {
        const w = 600
        const h = 200

        // @ts-ignore
        const svg = d3.select(this.refs.poly)
            .append('svg')
            .attr('width', w)
            .attr('height', h)
            .style('background-color', 'teal')

        // polygon
        const datasetPolygon = [
            [100,20],
            [20,90],
            [60,160],
            [140,160],
            [180,90],
        ]

        // polyline
        const datasetPolyline = [
            [100,20],
            [20,90],
            [60,160],
            [140,160],
            [180,90],
        ]

        svg.append('polygon')
            .attr('x', 0)
            .attr('points', datasetPolygon.join(' '))
            .attr('fill', 'teal')
           
        svg.append('polyline')
            .attr('x', w / 2)
            .attr('points', datasetPolyline.join(' '))
            .attr('fill', 'red')
            .attr('stroke', 'white')
            .attr('stroke-width', 3)
    }

    render() {
        return (
            <>
                <div ref={this.state.name}></div>
            </>
        )
    }

}

export default Poly;