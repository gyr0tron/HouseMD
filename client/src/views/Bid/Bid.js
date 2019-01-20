import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";
import SingleBid from './singleBid';

class Tables extends Component {
  constructor(props){
    super(props);
  };

  render() {

  var fin = [];
  var bids = localStorage.getItem("hashes");
  if(bids !== null){
    bids = JSON.parse(bids);
  }else{
    bids = [];
  }

  bids.forEach((e,i) => {
  fin.push(<SingleBid name={e} time={e} val={e} key={i} />);
  })


    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Active Auctions
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Expires In</th>
                      <th>Curr Bid</th>
                      <th>Bid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fin}
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

export default Tables;
