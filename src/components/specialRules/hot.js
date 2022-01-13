import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Hot extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Hot </Col>
          <Row>
            <p>
              Each time a friendly operative makes a shooting attack with this
              weapon, in the roll attack dice step, for each roll of 1, the
              shooter suffers 3 mortal wounds.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Hot;
