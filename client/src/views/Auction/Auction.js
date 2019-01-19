import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.hash = "";
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  componentDidMount() {
    // localStorage.setItem("hashes", JSON.stringify([]));
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  handleAuction = (e) => {

    e.preventDefault();
    
    var itemName = document.getElementById("company");
    var itemTime = document.getElementById("street");
    var itemVal = document.getElementById("vat");
    var randItem = itemName.value + itemTime.value + itemVal.value;
    itemName.value = "";
    itemTime.value = "";
    itemVal.value = "";
    console.log(randItem);
    
    var prevState = localStorage.getItem("hashes");
    if (prevState == null){
      prevState = [];
    }else{
      prevState = JSON.parse(prevState);
    }
    
    // console.log(prevState);
    
    prevState.push(randItem);
    localStorage.setItem("hashes",JSON.stringify(prevState));
    
    // console.log(prevState)
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12">
            <Card>
              <Form>
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
                  <Button outline type="submit" size="sm" color="primary" onClick={this.handleAuction}>
                    <i className="fa fa-dot-circle-o" /> Submit
                </Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
