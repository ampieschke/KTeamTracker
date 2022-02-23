import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import APx from "../../specialRules/ap";

class GuidedMissile extends Component {
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
      srArea = <APx />;
    }

    return (
      <Container>
        <h3>Guided Missile</h3>
        <p>
          Perform a Shoot action using the ranged weapon below.For the purposes
          of Line of Sight, draw Visibility and Cover lines from a friendly
          Veteran Guardsman operative. Note for the purposes of this weapon's
          special rules, treat that friendly operative as performing the shoot
          action.
        </p>
        <Col className="weapon">Guided Missile</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 3+</Col>
          <Col>D 4/6</Col>
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
export default GuidedMissile;
