import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

class Fists extends Component {
  render() {
    return (
      <div>
        <Col className="weapon">Fists</Col>
        <Col>
          <Row>
            <Col>A 4</Col>
            <Col>WS 3+</Col>
            <Col>D 3/4</Col>
          </Row>
        </Col>
      </div>
    );
  }
}
export default Fists;
