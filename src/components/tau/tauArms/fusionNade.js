import React, { Component } from "react";

import { Container, Row, Col, Collapse } from "react-bootstrap";
import Indirect from "../../specialRules/indirect";
import Limited from "../../specialRules/limited";

class FusionNade extends Component {
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
    if (this.state.activeSR === "limited") {
      srArea = <Limited />;
    } else if (this.state.activeSR === "indirect") {
      srArea = <Indirect />;
    }

    return (
      <Container>
        <Col className="weapon">Fusion Grenade</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 3+</Col>
          <Col>D 4/3</Col>
        </Row>
        <Row>
          <Col>
            SR: Range-PENTAGON, AP2,
            <button onClick={this.srUpdate} id="specialRule" value="limited">
              Limited
            </button>
            <button onClick={this.srUpdate} id="specialRule" value="indirect">
              Indirect
            </button>
          </Col>
        </Row>
        <Row>
          <Col>!: MW3</Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default FusionNade;
