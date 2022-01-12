import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class BolterDiscipline extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Bolter Discipline (1CP)</Col>
              <p>
                Until the end of he Turning Point, each time a friendly
                operative is activated, if it does not perform a Fight action
                during that activation, it can perform two Shoot actions during
                that activation if a storm bolter is selected for each of those
                shooting attacks.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default BolterDiscipline;
