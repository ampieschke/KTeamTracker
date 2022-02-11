import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class TakeCover extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Take Cover (1 CP)</Col>
              <p>
                Until the end of the turning point, each time a shooting attack
                is made against a friendly operative (excluding drones), if it's
                in cover, improve its Save characteristic by 1 for that shooting
                attack.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default TakeCover;
