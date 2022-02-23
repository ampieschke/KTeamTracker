import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Barrage from "../../specialRules/barrage";
import Blast from "../../specialRules/blastx";
import Indirect from "../../specialRules/indirect";

class ArtilleryBarage extends Component {
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
    } else if (this.state.activeSR === "indirect") {
      srArea = <Indirect />;
    }

    return (
      <Container>
        <h3>Artillery Barage</h3>
        <p>
          Perform a Shoot action using the ranged weapon below.For the purposes
          of Line of Sight, draw Visibility and Cover lines from a friendly
          Veteran Guardsman operative. Note for the purposes of this weapon's
          special rules, treat that friendly operative as performing the shoot
          action.
        </p>
        <Col className="weapon">Artillery Barage</Col>

        <Row>
          <Col>A 6</Col>
          <Col>BS 5+</Col>
          <Col>D 2/3</Col>
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
            <button onClick={this.srUpdate} id="specialRule" value="indirect">
              Indirect
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default ArtilleryBarage;
