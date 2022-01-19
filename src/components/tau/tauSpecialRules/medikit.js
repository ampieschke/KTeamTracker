import React, { Component } from "react";

import { Container, Col } from "react-bootstrap";

class Medikit extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Medikit (1AP)</Col>
        <Col>
          <p>
            Select one friendly operative (excluding drones) within TRIANGLE and
            visible to this operative. That operative regains 2D3 lost wounds.
            An operative cannot be selected for this ability if it was revived
            using the Medic! ability during the same Turning Point. This
            operative cannot perform this action if it is within Engagement
            Range of an enemy operative.
          </p>
        </Col>
      </Container>
    );
  }
}
export default Medikit;
