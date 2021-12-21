import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Ceaseless from "../../specialRules/ceaseless";
import Fusillade from "../../specialRules/fusillade";
import Heavy from "../../specialRules/heavy";

class BurstCannon extends Component {
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
    if (this.state.activeSR === "heavy") {
      srArea = <Heavy />;
    } else if (this.state.activeSR === "ceaseless") {
      srArea = <Ceaseless />;
    } else if (this.state.activeSR === "fusillade") {
      srArea = <Fusillade />;
    }

    return (
      <Container>
        <Row className="weapon">
          <Col xs="3">Pulse Carbine</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 6</Col>
              <Col xs="2">BS 4+</Col>
              <Col xs="2">D 3/4</Col>
              <Col xs="2">
                SR -
                <button onClick={this.srUpdate} id="specialRule" value="heavy">
                  Heavy
                </button>
                <button
                  onClick={this.srUpdate}
                  id="specialRule"
                  value="ceaseless"
                >
                  Ceaseless
                </button>
                <button
                  onClick={this.srUpdate}
                  id="specialRule"
                  value="fusillade"
                >
                  Fusillaed
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
export default BurstCannon;
