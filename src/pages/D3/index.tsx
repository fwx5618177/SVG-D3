import React from "react";
import ColumnDraw from "./components/column/column";
import CircleSVG from "./components/circle";
import ScatterPlot from './components/scatterPlot';
import ScaleChart from "./components/scale";
import Transition from "./components/transition";

class D3Case extends React.Component {
    render() {
        return (
            <>
            <ColumnDraw/>

            <CircleSVG/>

            <ScatterPlot />

            <ScaleChart />

            {/* <Transition /> */}
            </>
        );
    }
}

export default D3Case;