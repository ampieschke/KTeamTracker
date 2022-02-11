import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Bonded extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Bonded (1 CP)</Col>
              <p>
                Until the end of the turning point, each time a friendly
                operative makes a shooting attack, if it's within SQUARE of
                another friendly operative (excluding drones), you can re-roll
                one of your attack dice.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default Bonded;
