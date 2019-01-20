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
import { auctionAbi } from '../../auctionContract.js';
import web3 from '../../web3.js';

let accounts;
class Tables extends Component {
  constructor(props){
    super(props);
  };

  async componentDidMount(){
    accounts = await web3.eth.getAccounts();
  }

  closeBidding = async (addr) => {
    const contract = await new web3.eth.Contract(auctionAbi,addr);
    contract.methods.close().send({
      from: accounts[0],
      gas: 1000000,
    })

    var addrs = localStorage.getItem("vals");
    var time = localStorage.getItem("time");
    var name = localStorage.getItem("name");
    addrs = JSON.parse(addrs);
    time = JSON.parse(time);
    name = JSON.parse(name);
    // console.log(addrs.indexOf(addr));
    if(addrs.indexOf(addr) > -1){
      const pos = addrs.indexOf(addr);
      addrs.splice(pos,1);
      time.splice(pos,1);
      name.splice(pos,1);

      localStorage.setItem("name",JSON.stringify(name));
      localStorage.setItem("time",JSON.stringify(time));
      localStorage.setItem("vals",JSON.stringify(addrs));
    }
  }

  render() {

  var fin = [];
  var bids = localStorage.getItem("vals");
  var name = localStorage.getItem("name");
  var time = localStorage.getItem("time");
  if(bids !== null){
    bids = JSON.parse(bids);
    time = JSON.parse(time);
    name = JSON.parse(name);
  }else{
    bids = [];
    time = [];
    name = [];
  }

  for(var i=0; i<bids.length; i++){
   fin.push(<SingleBid name={name[i]} time={time[i]} val={bids[i]} closeBidding={this.closeBidding} key={i} />) 
  }

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
