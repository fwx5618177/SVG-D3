import React from "react";
import ColumnDraw from "./components/column/column";
import CircleSVG from "./components/circle";

class D3Case extends React.Component {
    render() {
        return (
            <>
            <ColumnDraw/>

            <CircleSVG/>
            </>
        );
    }
}

export default D3Case;