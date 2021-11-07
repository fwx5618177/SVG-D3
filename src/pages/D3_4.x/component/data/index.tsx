import React, { Component } from 'react';
import * as d3 from 'd3';
// import { DataSource } from './enum';

class Data extends Component {
    state = {
        name: 'data',
    }

    data: number[] = [
        10,
        15,
        30,
        60,
        50,
        80,
        65,
        55,
        30,
        20,
        10,
        8
    ]

    componentDidMount() {
        // @ts-ignore
        const data = d3.select(this.refs.data).selectAll('div').data(data);

        data.enter()
        .append('div')
        .style('width', (d: number) => ((d as number) * 3) + 'px')
        .text((d: number) => (d as number));

    }

    render() {
        return (
            <div ref={this.state.name}></div>
        )
    }
}

export default Data;