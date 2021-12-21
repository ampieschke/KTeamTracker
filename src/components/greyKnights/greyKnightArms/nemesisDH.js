import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Stun from "../../specialRules/stun";

class NemesisDaemonHammer extends Component {
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
    if (this.state.activeSR === "stun") {
      srArea = <Stun />;
    }

    return (
      <Container>
        <Row className="weapon">
          <Col xs="3">Nemesis Daemon Hammer</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 5</Col>
              <Col xs="2">WS 4+</Col>
              <Col xs="2">D 5/6</Col>
              <Col xs="2">SR</Col>
              <Col xs="2">
                ! -
                <button onClick={this.srUpdate} id="specialRule" value="stun">
                  Stun
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default NemesisDaemonHammer;
