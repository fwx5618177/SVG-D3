import React, { Component } from "react";
import * as d3 from 'd3'

class Datatumn extends Component {
    state = {
        name: 'datumn'
    }

    componentDidMount() {
        const p = d3.selectAll('div')

        const data = [{id: 3, name: 'li'},
    {
        id: 4,
        name: "w",
    },{
        id: 6,
        name: 'x',
    }]
        // .enter()
        // .text((d, i) => d + "" + i)
        
        // console.log(data);
        p.data(data)
        .enter()
        .append('p')
        .text(d => {
            console.log(d.id)
            return d.name
        })
        
    }

    render() {

        return (<>
        <div ref={this.state.name}>
            <p></p>
            <p></p>
            <p></p>
        </div>
        </>)
    }
}

export default Datatumn;