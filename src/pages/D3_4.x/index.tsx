import React, { Component } from "react";
import { Card } from "_antd@4.16.13@antd";
import Data from "./component/data";
import Rect from "./component/rect";
// import * as d3 from 'd3';

class D3_4 extends Component {
    // state = {
    //     name: 'd3_4',
    // }

    // componentDidMount() {
    //     // @ts-ignore
    //     const d3_select = d3.select(this.refs.d3_4);
    //     d3_select.append('div');
    //     d3_select.append('div');
    //     d3_select.append('div');

    //     d3_select.selectAll('div')
    //         .attr('class', 'red box')
    //         .each(function(d, i) {
    //             d3.select(this).append('h1').text(i);
    //         });
    // }

    render() {
        return (
            <Card 
                style={{
                    height: 400
                }}
            >
                {/* <div ref={this.state.name}></div> */}
                {/* <Data /> */}
                <Rect />
            </Card>
        )
    }
}

export default D3_4;