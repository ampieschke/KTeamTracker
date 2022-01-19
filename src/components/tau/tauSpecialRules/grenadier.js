import React, { Component } from "react";

import { Container, Col } from "react-bootstrap";

class Grenadier extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Grenadier</Col>
        <Col>
          <p>
            This operative is equiped with EMP, fusion, and photon grenades and
            they do not cost any EP. Grenades that have the Limited special rule
            can be selected for this operative's use twice, instead of once.
          </p>
        </Col>
      </Container>
    );
  }
}
export default Grenadier;
