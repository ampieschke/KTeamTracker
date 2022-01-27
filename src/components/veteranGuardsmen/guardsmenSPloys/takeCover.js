import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class TakeCover extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Take Cover (1CP)</Col>
              <p>
                Until the end of the Turning Point, each time a shooting attack
                is made against a friendly Guardsmen operative, if it is in
                cover, improve its save characteristic by 1 for that shooting
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
