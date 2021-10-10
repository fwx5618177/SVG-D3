import React from "react";
import * as d3 from 'd3';

class Marker extends React.Component {
    state = {
        name: 'marker'
    }

    componentDidMount() {
        const w = 400
        const h = 200
        // @ts-ignore
        const svg = d3.select(this.refs.marker)
            .append('svg')
            .attr('width', w)
            .attr('height', h)
            .attr('background-color', 'teal')

        const defs = svg.append('defs')
        const marker = defs.append('marker')
            .attr('id', 'arrow')
            .attr('markerUnits', 'strokeWidth')
            .attr('markerWidth', 12)
            .attr('markerHeight', 12)
            
    }

    render() {
        return (
            <>
            <div ref={this.state.name}></div>
            </>
        )
    }
}