import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Bayonet from "../guardsmenArms/bayonet";
import LongLas from "../guardsmenArms/longLas";
import Silent from "../../specialRules/silent";

class SniperTrooper extends Component {
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
    if (this.state.activeSR === "silent") {
      srArea = <Silent />;
    }

    return (
      <Container>
        <Row>
          <Col xs="5">
            <h2>Sniper Trooper</h2>
          </Col>
          <Col xs="7">
            <Row>
              <Col xs="4">M 3</Col>
              <Col xs="4">APL 2</Col>
              <Col xs="4">GA 1</Col>
            </Row>
            <Row>
              <Col xs="4">DF 3</Col>
              <Col xs="4">SV 5+</Col>
              <Col xs="4">W 7</Col>
            </Row>
          </Col>
        </Row>
        <Row className="armory">
          <LongLas />
          <Bayonet />
        </Row>

        <Row className="abilities">
          <h3 className="text-center">Abilities: </h3>
          <b>Sniper:</b>
          <p>
            Each time this operative is activated, solong as it does not perform
            a NormalMove, Charge, or Fall Back action, its Long-las gains the
            <button onClick={this.srUpdate} id="specialRule" value="silent">
              Silent
            </button>{" "}
            special rule for that activation.
          </p>
        </Row>
        {/* <Row className="uniqueActions">
          <h3 className="text-center">Unique Actions: </h3>
          <PsychicPowers />
        </Row> */}
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default SniperTrooper;
