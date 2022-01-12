import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Balanced from "../../specialRules/balanced";

class BondingKnife extends Component {
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
    if (this.state.activeSR === "balanced") {
      srArea = <Balanced />;
    }

    return (
      <Container>
        <Col className="weapon">Bonding Knife</Col>
        <Row>
          <Col>A 3</Col>
          <Col>WS 4+</Col>
          <Col>D 3/4</Col>
        </Row>
        <Row>
          <Col>
            SR:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="balanced">
              Balanced
            </button>
          </Col>
        </Row>

        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default BondingKnife;
