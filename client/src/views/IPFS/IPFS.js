import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row
} from "reactstrap";
import { addHash } from "../../deployer.js";
const ipfsClient = require('ipfs-http-client')
const fileReaderPullStream = require('pull-file-reader') 

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      ipfsHash: '',
      web3: null,
      buffer: null,
      account: null,
      added_file_hash: null
    };

    this.ipfs = ipfsClient('localhost', '5001')

    this.captureFile = this.captureFile.bind(this)
    this.saveToIpfs = this.saveToIpfs.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  captureFile(event) {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
    this.saveToIpfs(file)
  }

  saveToIpfs(file) {
    let ipfsId
    const fileStream = fileReaderPullStream(file)
    this.ipfs.add(fileStream, { progress: (prog) => console.log(`received: ${prog}`) })
      .then((response) => {
        console.log(response)
        ipfsId = response[0].hash
        addHash(ipfsId);
        this.setState({ added_file_hash: ipfsId })
      }).catch((err) => {
        console.error(err)
      })
  }


  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Document</strong> Storage
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" onSubmit={this.handleSubmit} className="form-horizontal"> 
                  <FormGroup row>
                    <Col md="6">
                      <Label htmlFor="text-input">Text Input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="6">
                      <Label htmlFor="file-input">File input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" onChange={this.captureFile} />
                    </Col>
                      <img src={`https://ipfs.io/ipfs/${this.state.added_file_hash}`} alt="" />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
     </div>
    );
  }
}

export default Forms;
