import React, { Component } from "react";

import { Container, Col } from "react-bootstrap";

class HighIntensityMarkerlight extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">High Intensity Markerlight</Col>
        <Col>
          <p>
            Each time this operative performs the <b>Markerlight</b> action, the
            selected enemy operative gains 2 Markerlight tokens instead of 1.
          </p>
        </Col>
      </Container>
    );
  }
}
export default HighIntensityMarkerlight;
