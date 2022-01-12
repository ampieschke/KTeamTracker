import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class TideOfShadows extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Tide of Shadows (1CP)</Col>
              <p>
                Until the end of he Turning Point, each time an enemy operative
                on a Vantage Point makes a shooting attack, each friendly
                operative that has a Conceal order, and is in cover provided by
                Light Terrain, and is more than PENTAGON from that enemy
                operative cannot be treated as being on an Engage Orger for that
                shooting attack as a result of that Vantage Point.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default TideOfShadows;
