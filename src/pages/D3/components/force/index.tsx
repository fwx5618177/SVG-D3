import React, { Component } from 'react';
import * as d3 from 'd3';

class ForceChart extends Component {
    state = {
        force: 'force'
    }

    componentDidMount() {
        const width = 500
        const height = 200

        const dataset = {
            nodes: [
                {
                    name: 'Adam',
                },
                {
                    name: 'Bob',
                },
                {
                    name: 'Carrie',
                },
                {
                    name: 'Edward',
                },
                {
                    name: 'Felicity',
                },
                {
                    name: 'George',
                },
                {
                    name: 'Hannah',
                },
                {
                    name: 'Iris',
                },
                {
                    name: 'Jerry',
                },
            ],
            edges: [
                {
                    source: 0,
                    target: 1,
                },
                {
                    source: 0,
                    target: 2,
                },
                {
                    source: 0,
                    target: 3,
                },
                {
                    source: 0,
                    target: 4,
                },
                {
                    source: 1,
                    target: 5,
                },
                {
                    source: 2,
                    target: 5,
                },
                {
                    source: 2,
                    target: 5,
                },
                {
                    source: 3,
                    target: 4,
                },
                {
                    source: 5,
                    target: 8,
                },
                {
                    source: 5,
                    target: 9,
                },
                {
                    source: 6,
                    target: 7,
                },
                {
                    source: 7,
                    target: 8,
                },
                {
                    source: 8,
                    target: 9,
                },
            ]
        };

        // @ts-ignore
        const svg = d3.select(this.refs.force)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('background-color', 'teal');

        const force = d3.forceLink(dataset.edges)

        
    }

    render() {
        return (
            <>
            <div ref={this.state.force}></div>
            </>
        )
    }
}