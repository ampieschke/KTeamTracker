import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class ClearTheLine extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Clear the Line (1CP)</Col>
              <p>
                Until the end of the Turning Point, each time a friendly
                Guardsmen operative fights in combat, before you roll your
                attack dice, you can retain one as a successful normal hit
                without rolling it.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default ClearTheLine;
