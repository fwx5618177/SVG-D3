import React from "react";
import * as d3 from 'd3';

class D3Case extends React.Component<any, { name: string}> {
    constructor(props: any) {
        super(props);

        this.state = {
            name: 'd3bg'
        }
    }
    componentDidMount() {
        const data = [5,10,15,20,25];
        console.log(data);
        // d3.select(this.state.name)
        //     .append('a')
        //     .text(data.join(''));
        d3.select('body')
            .selectAll('p')
            // .data(data)
            // .append('p')
            .text("new");

    }

    // componentDidMount() {
    //     this.setState({
    //         name: 
    //     })
    // }

    render() {
        return (
            // @ts-ignore
            <div id={this.state.name} style={{ backgroundColor: 'red', width: 20, height: 20}} >
                <p></p>
            </div>
        );
    }
}

export default D3Case;