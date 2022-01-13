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
      <div>
        <Col className="weapon">Nemesis Force Weapon</Col>
        <Row>
          <Col>A 5</Col>
          <Col>WS 3+</Col>
          <Col>D 4/6</Col>
        </Row>
        <Row>
          <Col>
            SR:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="lethal">
              Lethal 5+
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </div>
    );
  }
}
export default NemesisForceWeapon;
