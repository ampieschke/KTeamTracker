import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class DroneScout extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Drone Scout</Col>
        <Col>
          <p>
            During deployment, you can set up one friendly Pathfinder Drone
            operative with a Conceal order anywhere in the killzone that is
            wholly within PENTAGON of your drop zone, and PENTAGON from enemy
            operatives and more than SQUARE from the enemy drop zone.
          </p>
        </Col>
      </Container>
    );
  }
}
export default DroneScout;
