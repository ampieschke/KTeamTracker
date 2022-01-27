import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Stun from "../../specialRules/stun";
class TrenchClub extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSR: "" };
    this.srUpdate = this.srUpdate.bind(this);
  }

  srUpdate(e) {
    this.setState({ activeSR: e.target.value });
    console.log(this.state.activeSR);
  }
  render() {
    let srArea;
    if (this.state.activeSR === "torrent") {
      srArea = <Stun />;
    }
    return (
      <Container>
        <Col className="weapon">Trench Club</Col>
        <Row>
          <Col>A 3</Col>
          <Col>BS 3+</Col>
          <Col>D 3/3</Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default TrenchClub;
