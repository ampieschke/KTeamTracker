import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Silent extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Silent: </Col>
          <Row>
            <p>Can perform Shoot actions with a Conceal order.</p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Silent;
