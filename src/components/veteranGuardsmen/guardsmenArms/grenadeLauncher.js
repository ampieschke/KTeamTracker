import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import BlastX from "../../specialRules/blastx";
import AP from "../../specialRules/ap";

class GrenadeLauncher extends Component {
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
    if (this.state.activeSR === "blast") {
      srArea = <BlastX />;
    } else if (this.state.activeSR === "ap") {
      srArea = <AP />;
    }

    return (
      <Container>
        <Col className="weapon">Grenade Launcher - Frag</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 4+</Col>
          <Col>D 2/4</Col>
        </Row>
        <Row>
          <Col>
            SR:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="blast">
              Blast CIRCLE
            </button>
          </Col>
        </Row>
        <Col className="weapon">Grenade Launcher - Krak</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 4+</Col>
          <Col>D 4/5</Col>
        </Row>
        <Row>
          <Col>
            SR:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="ap">
              AP1
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default GrenadeLauncher;
