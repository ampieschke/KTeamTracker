import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Relentless from "../../specialRules/relentless";

class StormBolter extends Component {
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
        <Col className="weapon">Storm Bolter</Col>
        <Row>
          <Col>A 4</Col>
          <Col>WS 3+</Col>
          <Col>D 3/4</Col>
        </Row>
        <Row>
          <Col>
            SR
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
export default StormBolter;
