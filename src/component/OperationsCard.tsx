import React from "react";
import { Card } from 'antd';
import Drawing from "./subComponent/Drawing";
import SvgTag from "./subComponent/svg";

class OperationsCard extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            left: 0,
            top: 0,
            width: 500,
            height: 500,
        };
    }


    render() {
        return (
            <>
            <Card title="操作面板" 
                style={{
                    height: '90%',
                }}
            >
                <Drawing {...this.state} />
                <SvgTag />
            </Card>
            </>
        )
    }
}

export default OperationsCard;