import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import LethalX from "../../specialRules/lethalX";

class NemesisForceWeapon extends Component {
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
    if (this.state.activeSR === "lethal") {
      srArea = <LethalX />;
    }

    return (
      <Container>
        <Row className="weapon">
          <Col xs="3">Nemesis Force Weapon</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 5</Col>
              <Col xs="2">WS 3+</Col>
              <Col xs="2">D 4/6</Col>
              <Col xs="2">
                SR
                <button onClick={this.srUpdate} id="specialRule" value="lethal">
                  Lethal 5+
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
export default NemesisForceWeapon;
