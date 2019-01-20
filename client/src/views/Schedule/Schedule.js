import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table
} from 'reactstrap';
import { payBill } from '../../deployer';

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
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  payBill = (e) => {
    e.preventDefault();

    const amnt = document.getElementById("vat");
    const addr = document.getElementById("addr");

    // console.log(addr.value, amnt.value);    
    payBill(addr.value, amnt.value)

  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12">
            <Card>
              <Form>
                <CardHeader>
                  <strong>Payment</strong>
                  <small></small>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="company">Payment Description</Label>
                    <Input
                      type="text"
                      id="company"
                      placeholder="Enter your payment description"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="vat">Amount</Label>
                    <Input type="text" id="vat" placeholder="Enter amount to be paid" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="addr">ToAddress</Label>
                    <Input type="text" id="addr" placeholder="Enter address to pay to" />
                  </FormGroup>
                  <FormGroup row>
                    <Col md="6">
                      <Label htmlFor="date-input">Date</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Recurring</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                        <Label check className="form-check-label" htmlFor="radio1">Weekly</Label>
                      </FormGroup>
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                        <Label check className="form-check-label" htmlFor="radio2">Monthly</Label>
                      </FormGroup>
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                        <Label check className="form-check-label" htmlFor="radio3">Quarterly</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button outline type="submit" size="sm" color="primary" onClick={this.payBill}>
                    <i className="fa fa-dot-circle-o" /> Pay
                </Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-money" /> Upcoming Payments
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>ToAddress</th>
                      <th>Amount</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Water</td>
                      <td>0x8d3a72a5a34c2e77f9030081fb660d938cb3ca63b34c2c82e9f259d0043b5313</td>
                      <td>2</td>
                      <td>27/01/2019</td>
                    </tr>
                    <tr>
                      <td>Maintainance</td>
                      <td>0x8d3a72a5a34c2e77f9030081fb660d938cb3ca63b34c2c82e9f259d0043b5313</td>
                      <td>0.34</td>
                      <td>12/02/2019</td>
                    </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem disabled>
                    <PaginationLink previous tag="button">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button">
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Past Payments
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>ToAddress</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Electricity</td>
                      <td>0x8636a1100a06caD72C16c663F5fF6A893ddd1584</td>
                      <td>1.2</td>
                    </tr>
                    <tr>
                      <td>Property Tax</td>
                      <td>0x445f51299Ef3307dBD75036dd896565F5B4BF7A5</td>
                      <td>0.89</td>
                    </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem disabled>
                    <PaginationLink previous tag="button">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button">
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
