import React from "react";
import * as d3 from 'd3';

class CircleSVG extends React.Component {

    state = {
        svg: 'svgbg'
    }

    constructor(props: any) {
        super(props);

    }
    componentDidMount() {
        const dataset = [5,10,15,20,25,10,5];
            // @ts-ignore
        const svg = d3.select(this.refs.svgbg)
            .append('svg')
            .attr('width', 500)
            .attr('height', 50);

        svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('cx', (d,i) => (i * 50) + 25)
            .attr('cy', 25)
            .attr('r', d => d)
            .attr('fill', 'yellow')
            .attr('stroke', 'orange')
            .attr('stroke-width', d => d / 2)

        }

    render() {
        return (
            <>

            <div ref={this.state.svg}></div>
            </>
        );
    }
}

export default CircleSVG;