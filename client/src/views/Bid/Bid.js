import React, { Component } from "react";
import {
  Badge,
  Button,
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

class Tables extends Component {
  render() {
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
                    <tr>
                      <td>Yiorgos Avraamu</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <Col col="12" sm="12" md="12" xl className="mb-0 mb-xl-0">
                          <Button block outline color="primary">
                            Bid
                          </Button>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td>Avram Tarasios</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <Col col="12" sm="12" md="12" xl className="mb-0 mb-xl-0">
                          <Button block outline color="primary">
                            Bid
                          </Button>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td>Quintin Ed</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <Col col="12" sm="12" md="12" xl className="mb-0 mb-xl-0">
                          <Button block outline color="primary">
                            Bid
                          </Button>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td>Enéas Kwadwo</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <Col col="12" sm="12" md="12" xl className="mb-0 mb-xl-0">
                          <Button block outline color="primary">
                            Bid
                          </Button>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td>Agapetus Tadeáš</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <Col col="12" sm="12" md="12" xl className="mb-0 mb-xl-0">
                          <Button block outline color="primary">
                            Bid
                          </Button>
                        </Col>
                      </td>
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

export default Tables;
