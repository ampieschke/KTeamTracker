import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import MWx from "../../specialRules/mWx";
import AP from "../../specialRules/ap";

class Meltagun extends Component {
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
    } else if (this.state.activeSR === "ap") {
      srArea = <AP />;
    }

    return (
      <Container>
        <Col className="weapon">Meltagun</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 4+</Col>
          <Col>D 6/3</Col>
        </Row>
        <Row>
          <Col>
            SR: Range PENTAGON,
            <button onClick={this.srUpdate} id="specialRule" value="ap">
              AP2
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            !:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="mw">
              MW4
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default Meltagun;
