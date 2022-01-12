import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Relentless from "../../specialRules/relentless";

class NemesisFalchions extends Component {
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
    if (this.state.activeSR === "relentless") {
      srArea = <Relentless />;
    }

    return (
      <Container>
        <Col className="weapon">Nemesis Falchions</Col>
        <Row>
          <Col>A 5</Col>
          <Col>WS 3+</Col>
          <Col>D 4/5</Col>
        </Row>
        <Row>
          <Col>
            SR:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="relentless">
              Relentless
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default NemesisFalchions;
