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
        <Col className="weapon">Suppressed Pulse Carbine</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 4+</Col>
          <Col>D 4/5</Col>
        </Row>
        <Row>
          <Col>
            SR:{" "}
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
export default SuppressedPulseCarbine;
