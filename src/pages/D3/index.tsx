import React from "react";
import ColumnDraw from "./components/column/column";
import CircleSVG from "./components/circle";
import ScatterPlot from './components/scatterPlot';
import ScaleChart from "./components/scale";
import Transition from "./components/transition";
import Linear from "./components/line";
import Poly from "./components/poly";
import D3Svg from "./components/d3Svg";

class D3Case extends React.Component {
    render() {
        return (
            <>
            {/* <ColumnDraw/>

            <CircleSVG/>

            <ScatterPlot /> */}

            {/* <Linear /> */}

            {/* <Poly /> */}

            <D3Svg />

            {/* <ScaleChart /> */}

            {/* <Transition /> */}
            </>
        );
    }
}

export default D3Case;