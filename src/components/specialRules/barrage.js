import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Barrage extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">Barrage </Col>
          <Col xs="7">
            <p>
              Each time a friendly operative makes a shooting attack with this
              weapon, for that shooting attack, the automatic retention of
              defence dice as a result of cover is determined differently.
              Instead, if any part of the operative's base is hiddenby a terrain
              feature from directly above, the defender can retain defence dice
              as if they were in cover.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Barrage;
