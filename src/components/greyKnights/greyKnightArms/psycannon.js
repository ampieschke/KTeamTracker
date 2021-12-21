import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Heavy from "../../specialRules/heavy";

class Psycannon extends Component {
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
    if (this.state.activeSR === "heavy") {
      srArea = <Heavy />;
    }
    return (
      <Container>
        <Row className="weapon">
          <Col xs="3">Psycannon</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 5</Col>
              <Col xs="2">WS 3+</Col>
              <Col xs="2">D 4/6</Col>
              <Col xs="2">
                SR -
                <button onClick={this.srUpdate} id="specialRule" value="heavy">
                  Heavy
                </button>
              </Col>
              <Col xs="2">! -</Col>
            </Row>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default Psycannon;
