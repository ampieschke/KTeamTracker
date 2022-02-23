import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Barrage from "../../specialRules/barrage";
import Blast from "../../specialRules/blastx";

class MarkedAirStrike extends Component {
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
    if (this.state.activeSR === "barrage") {
      srArea = <Barrage />;
    } else if (this.state.activeSR === "blast") {
      srArea = <Blast />;
    }

    return (
      <Container>
        <h3>Marked Air Strike</h3>
        <p>
          Perform a Shoot action using the ranged weapon below.For the purposes
          of Line of Sight, draw Visibility and Cover lines from a friendly
          Veteran Guardsman operative. Note for the purposes of this weapon's
          special rules, treat that friendly operative as performing the shoot
          action.
        </p>
        <Col className="weapon">Air Strike</Col>

        <Row>
          <Col>A 5</Col>
          <Col>BS 4+</Col>
          <Col>D 3/4</Col>
        </Row>
        <Row>
          <Col>
            SR:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="barrage">
              Barrage
            </button>
            <button onClick={this.srUpdate} id="specialRule" value="blast">
              Blast CIRCLE
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default MarkedAirStrike;
