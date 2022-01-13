import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Rending extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Rending </Col>
          <Row>
            <p>
              Each time a friendly operative fights in combat or shoots with
              this weapon, in the roll attack dice step, if you retain any
              critical hits you can retain one normal hit as a critical hit.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Rending;
