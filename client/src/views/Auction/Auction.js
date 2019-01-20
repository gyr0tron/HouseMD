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
import {deploy} from '../../deployer';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.auction = false;
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
// TO RESET LOCAL STORAGE -
    // localStorage.setItem("name", JSON.stringify([]));
    // localStorage.setItem("time", JSON.stringify([]));
    // localStorage.setItem("vals", JSON.stringify([]));
    // console.log("from Auction");
    // console.log(this.props.contract);
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
    this.setState({auction: true});
    var prevVal = localStorage.getItem("vals");
    if (prevVal == null){
      prevVal = [];
    }else{
      prevVal = JSON.parse(prevVal);
    }
    
    var itemName = document.getElementById("company");
    var itemTime = document.getElementById("street");
    var itemVal = document.getElementById("vat");
    console.log("DEEEPPLLOY");
    deploy(parseInt(itemVal.value))
      .then((data) => {
        prevVal.push(data);
        localStorage.setItem("vals",JSON.stringify(prevVal));
        window.location.href = "/#/bid";
        this.setState({auction: false});
    
      })
    
    var prevName = localStorage.getItem("name");
    if (prevName == null){
      prevName = [];
    }else{
      prevName = JSON.parse(prevName);
    }

    var prevTime = localStorage.getItem("time");
    if (prevTime == null){
      prevTime = [];
    }else{
      prevTime = JSON.parse(prevTime);
    }

    prevName.push(itemName.value);
    prevTime.push(itemTime.value)
    
    localStorage.setItem("name", JSON.stringify(prevName));
    localStorage.setItem("time", JSON.stringify(prevTime));
        
    itemName.value = "";
    itemTime.value = "";
    itemVal.value = "";
  }



  render() {

    var loader = null;
    if(this.state.auction){
      loader = 
      <div className="auctionLoader">
        <img src="https://media.giphy.com/media/MVgBbtMBGQTi6og4mF/giphy.gif" />
      </div>
      ;
    }


    return (
      <React.Fragment>
      <div className="animated fadeIn auctionContent">
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
      {loader}
      </React.Fragment>

    );
  }
}

export default Forms;
