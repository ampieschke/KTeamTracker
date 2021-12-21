import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import AP from "../../specialRules/ap";
import Leathal from "../../specialRules/lethalX";
import MWx from "../../specialRules/mWx";

class RailRifle extends Component {
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
    if (this.state.activeSR === "ap") {
      srArea = <AP />;
    } else if (this.state.activeSR === "leathal") {
      srArea = <Leathal />;
    } else if (this.state.activeSR === "mw") {
      srArea = <MWx />;
    }

    return (
      <Container>
        <Row className="weapon">
          <Col xs="3">Rail Rifle</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 4</Col>
              <Col xs="2">BS 4+</Col>
              <Col xs="2">D 4/4</Col>
              <Col xs="2">
                SR -
                <button onClick={this.srUpdate} id="specialRule" value="ap">
                  AP1
                </button>
                <button
                  onClick={this.srUpdate}
                  id="specialRule"
                  value="leathal"
                >
                  Leathal 5+
                </button>
              </Col>
              <Col xs="2">
                ! -
                <button onClick={this.srUpdate} id="specialRule" value="mw">
                  MW2
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
export default RailRifle;
