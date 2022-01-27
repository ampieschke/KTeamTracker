import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class IntoTheBreach extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Into the Breach (1CP)</Col>
              <p>
                Each friendly Guardsmen operative within your drop zone can
                perform a free Dash action, but must finish that move closer to
                the enemy's drop zone.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default IntoTheBreach;
