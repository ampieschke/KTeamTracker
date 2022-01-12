import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class InertialDampener extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Inertial Dampener</Col>
        <Col>
          <p>
            Each time this operative performsan Overwatch action, for that
            actions shooting attack, do not worsen the BS characteristic of its
            marksman rail rifle as a result of performing an Overwatch action.
          </p>
        </Col>
      </Container>
    );
  }
}
export default InertialDampener;
