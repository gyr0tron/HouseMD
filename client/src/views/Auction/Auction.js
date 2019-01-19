import React, { Component } from "react";
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row
} from "reactstrap";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Auction</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="company">Item Description</Label>
                  <Input
                    type="text"
                    id="company"
                    placeholder="Enter your item name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="vat">Max Amount</Label>
                  <Input type="text" id="vat" placeholder="Enter max amount for auction" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="street">Time</Label>
                  <Input
                    type="text"
                    id="street"
                    placeholder="Enter time for auction"
                  />
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button outline type="submit" size="sm" color="primary">
                  <i className="fa fa-dot-circle-o" /> Submit
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
