import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class PsychicPowers extends Component {
  render() {
    return (
      <Container>
        <br />
        <h1>Psychic Powers </h1>
        <Col>
          <Row>
            <Col>
              <Col className="weapon">Armoured Resilience</Col>
              <p>
                Until the end of the Turning Point, improve this operative's
                save characteristic by 1.
              </p>
              <Col className="weapon">Hammerhand</Col>
              <p>
                Until the end of the Turning Point, each time this operative
                fights in combat, in the resolve successful hits step, the first
                time it strikes, inflict 1 additional damage on the target.
              </p>
              <Col className="weapon">Astral Aim</Col>
              <p>
                Until the end of the Turning Point, this operative's ranged
                weapons gain the No Cover special rule.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default PsychicPowers;
