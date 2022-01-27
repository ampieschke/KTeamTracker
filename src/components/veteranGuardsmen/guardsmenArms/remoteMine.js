import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import AP from "../../specialRules/ap";
import Silent from "../../specialRules/silent";

class RemoteMine extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSR: "" };
    this.srUpdate = this.srUpdate.bind(this);
  }

  srUpdate(e) {
    this.setState({ activeSR: e.target.value });
    console.log(this.state.activeSR);
  }
  render() {
    let srArea;
    if (this.state.activeSR === "silent") {
      srArea = <Silent />;
    } else if (this.state.activeSR === "ap") {
      srArea = <AP />;
    }

    return (
      <Container>
        <Col className="weapon">Remote Mine</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 2+</Col>
          <Col>D 5/6</Col>
        </Row>
        <Row>
          <Col>
            SR: Detonate*,{" "}
            <button onClick={this.srUpdate} id="specialRule" value="ap">
              AP1
            </button>
            <button onClick={this.srUpdate} id="specialRule" value="silent">
              Silent
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default RemoteMine;
