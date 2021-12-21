import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class PsychicPowers extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="2"></Col>
          <Col xs="3">Psychic Powers </Col>
          <Col xs="7">
            <h3>Armoured Resilience</h3>
            <p>
              Until the end of the Turning Point, improve this operative's save
              characteristic by 1.
            </p>
            <h3>Hammerhand</h3>
            <p>
              Until the end of the Turning Point, each time this operative
              fights in combat, in the resolve successful hits step, the first
              time it strikes, inflict 1 additional damage on the target.
            </p>
            <h3>Astral Aim</h3>
            <p>
              Until the end of the Turning Point, this operative's ranged
              weapons gain the No Cover special rule.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default PsychicPowers;
