import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Brutal extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col xs="2"></Col>
          <Col xs="3">Brutal </Col>
          <Col xs="7">
            <p>
              Each time a friendly operative fights in combat with this weapon,
              in the resolve successful hits step of that combat, your opponent
              can only parry with critical hits.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Brutal;
