import React from "react";
import ColumnDraw from "./components/column/column";
import CircleSVG from "./components/circle";
import ScatterPlot from './components/scatterPlot';
import ScaleChart from "./components/scale";
import Transition from "./components/transition";
import Linear from "./components/line";

class D3Case extends React.Component {
    render() {
        return (
            <>
            {/* <ColumnDraw/>

            <CircleSVG/>

            <ScatterPlot /> */}

            <Linear />

            {/* <ScaleChart /> */}

            {/* <Transition /> */}
            </>
        );
    }
}

export default D3Case;