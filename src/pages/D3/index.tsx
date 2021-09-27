import React from "react";
import * as d3 from 'd3';

class D3Case extends React.Component {

    state = {
        name: 'd3bg'
    }

    constructor(props: any) {
        super(props);

    }
    componentDidMount() {
        const data = [5,10,15,20,25];
        console.log(data);

        // @ts-ignore
        d3.select(this.refs.d3bg)
            .selectAll('p')
            .data(data)
            .enter()
            .append('p')
            .text(val => val)
            .style('background-color', 'red')

    }

    render() {
        return (
            // @ts-ignore
            <div ref={this.state.name} >
            </div>
        );
    }
}

export default D3Case;