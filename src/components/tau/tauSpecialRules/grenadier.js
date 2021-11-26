import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Grenadier extends Component {
  render() {
    return (
      <Container>
        <Row className="ability">
          <Col xs="3">Grenadier</Col>
          <Col xs="9">
            <p>
              This operative is equiped with EMP, fusion, and photon grenades
              and they do not cost any EP. Grenades that have the Limited
              special rule can be selected for this operative's use twice,
              instead of once.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Grenadier;
