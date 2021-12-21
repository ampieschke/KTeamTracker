import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Medikit extends Component {
  render() {
    return (
      <Container>
        <Row className="ability">
          <Col xs="3">Medikit (1AP)</Col>
          <Col xs="9">
            <p>
              Select one friendly operative (excluding drones) within TRIANGLE
              and visible to this operative. That operative regains 2D3 lost
              wounds. An operative cannot be selected for this ability if it was
              revived using the Medic! ability during the same Turning Point.
              This operative cannot perform this action if it is within
              Engagement Range of an enemy operative.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Medikit;
