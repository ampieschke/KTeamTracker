import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Bayonet extends Component {
  render() {
    return (
      <Container>
        <Col className="weapon">Bayonet</Col>
        <Row>
          <Col>A 3</Col>
          <Col>BS 4+</Col>
          <Col>D 2/3</Col>
        </Row>
      </Container>
    );
  }
}
export default Bayonet;
