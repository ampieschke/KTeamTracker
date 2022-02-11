import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class AWorthyCause extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">A Worthy Cause (1 CP)</Col>
              <p>
                Use this ploy at the start of the Firefight phase. Select one
                ready operative (excluding drones), that is within SQUARE of an
                enemy operative or within CIRCLE of the center of an objective
                marker and activate it. Once that operative has completed its
                activation, the player who has initiative activates an operative
                as normal.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default AWorthyCause;
