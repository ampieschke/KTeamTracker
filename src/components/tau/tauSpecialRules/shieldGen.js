import React, { Component } from "react";

import { Container, Col } from "react-bootstrap";

class ShieldGenerator extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Shield Generator</Col>
        <Col>
          <p>
            This operative has a 4+ invulnerable save. Each time this operative
            would lose a wound that is not as a result of a mortal wound, roll
            one D6: on a 5+, that wound is not lost.
          </p>
        </Col>
      </Container>
    );
  }
}
export default ShieldGenerator;
