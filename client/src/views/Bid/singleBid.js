import React, { Component } from "react";
import { Button,Col } from 'reactstrap';

class SingleBid extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.time}</td>
                <td>{this.props.val}</td>
                <td>
                    <Col col="12" sm="12" md="12" xl className="mb-0 mb-xl-0">
                        <Button block outline color="primary" onClick = {() => this.props.closeBidding(this.props.val)}>
                            Close
                </Button>
                    </Col>
                </td>
            </tr>
        )
    }
}

export default SingleBid;