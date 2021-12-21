import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class InertialDampener extends Component {
  render() {
    return (
      <Container>
        <Row className="ability">
          <Col xs="3">Inertial Dampener</Col>
          <Col xs="9">
            <p>
              Each time this operative performsan Overwatch action, for that
              actions shooting attack, do not worsen the BS characteristic of
              its marksman rail rifle as a result of performing an Overwatch
              action.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default InertialDampener;
