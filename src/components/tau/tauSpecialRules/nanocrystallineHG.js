import React, { Component } from "react";

import { Container, Col } from "react-bootstrap";

class NanocrystallineHeadgear extends Component {
  render() {
    return (
      <Container>
        <Col className="ability">Nanocrystalline Headgear</Col>
        <Col>
          <p>
            You can ignore any or all modifiers to this operative's APL and to
            the Weapon Skill and Ballistic Skill characteristics of its melee
            and ranged weapons.
          </p>
        </Col>
      </Container>
    );
  }
}
export default NanocrystallineHeadgear;
