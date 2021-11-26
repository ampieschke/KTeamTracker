import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Silent from "../../specialRules/silent";

class SuppressedPulseCarbine extends Component {
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
    }
    return (
      <Container>
        <Row className="weapon">
          <Col xs="3">Suppressed Pulse Carbine</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 4</Col>
              <Col xs="2">BS 4+</Col>
              <Col xs="2">D 4/5</Col>
              <Col xs="2">
                SR{" "}
                <button onClick={this.srUpdate} id="specialRule" value="silent">
                  Silent
                </button>
              </Col>
              <Col xs="2">! -</Col>
            </Row>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default SuppressedPulseCarbine;
