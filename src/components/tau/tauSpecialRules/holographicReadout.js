import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class HolographicReadout extends Component {
  render() {
    return (
      <Container>
        <Row className="ability">
          <Col xs="3">Holographic Readout</Col>
          <Col xs="9">
            <p>
              Once per battle, when a friendly Pathfinder operative (excluding
              drones) is activated within SQUARE of and is Visible to this
              operative, this operative can use this ability. If it does until
              the end of the friendly Pathfinder operative's activation, it can
              perform one mission action for one less AP (to a minimum of 0AP)
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default HolographicReadout;
