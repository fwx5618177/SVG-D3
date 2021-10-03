import React, { Component } from 'react';
import * as d3 from 'd3';

class Transition extends Component {
    state = {
        axis: 'axis'
    }

    componentDidMount() {
        const dataset = []
        for(let i = 0; i <= 25; i++) {
            dataset.push(Math.round(Math.random() * 30 + 1))
        }

        const w = 600;
        const h = 250;

        // @ts-ignore
        const svg = d3.select(this.refs.axis)
            .append('svg')
            .attr('width', w)
            .attr('height', h)
            .style('background-color', '#00ccff')

    
    }

    render() {

        return (
            <>
            <div ref={this.state.axis}></div>
            </>
        )
    }
}

export default Transition;