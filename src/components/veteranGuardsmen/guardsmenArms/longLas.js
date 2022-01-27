import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import MWx from "../../specialRules/mWx";

class LongLas extends Component {
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
    if (this.state.activeSR === "mw") {
      srArea = <MWx />;
    }

    return (
      <Container>
        <Col className="weapon">Long-las</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 2+</Col>
          <Col>D 3/3</Col>
        </Row>
        <Row>
          <Col>
            !:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="mw">
              MW3
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default LongLas;
