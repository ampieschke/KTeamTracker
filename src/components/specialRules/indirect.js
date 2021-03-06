import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Indirect extends Component {
  render() {
    return (
      <Container>
        <Row className="specialRule">
          <Col>Indirect</Col>
          <Row>
            <p>
              Each time an attack is made with this weapon, in the select a
              valid target step, enemy operatives are not in cover.
            </p>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Indirect;
