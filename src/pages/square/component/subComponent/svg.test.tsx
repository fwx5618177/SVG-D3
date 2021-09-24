import React from 'react';

class SvgTest extends React.Component {
    
    circle = [
        [0,0],
        [0,50],
        [0,100],
        [50,100],
        [100,100],
        [100,50],
        [100,0],
        [50,0],
        [0,0],
    ]

    // path = this.svg?.getElementById('path');

    constructor(props: any) {
        super(props);
    }

    getPaths(params: any) {
        let tmp = []
        for(let i of params) {
            tmp.push(i.join(' '));
        }

        return tmp.join(',');
    }

    componentDidMount() {
        const svg = document.getElementById('con');
        // @ts-ignore
        const path = svg?.getElementsByTagName('path')[0];
        path?.setAttributeNS(null, 'd', 'M' + this.getPaths(this.circle));
        console.log(this.getPaths(this.circle), path);

    }

    render() {
        return (
            <div id="con">
            <svg id="svg" width="100" height="100"
            preserveAspectRatio="xMidYMid meet" style={{ left: 250, top: 250, }}>
                <path id="path" d="" style={{
                     fill:'white', strokeWidth: 2, stroke: 'black',
                }}/>
            </svg>
            </div>
        )
    }
}

export default SvgTest;