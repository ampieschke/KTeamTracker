import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Balanced from "../../specialRules/balanced";

class Chainsword extends Component {
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
    if (this.state.activeSR === "balanced") {
      srArea = <Balanced />;
    }

    return (
      <Container>
        <Col className="weapon">Chainsword</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 4+</Col>
          <Col>D 5/6</Col>
        </Row>
        <Row>
          <Col>
            SR:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="balanced">
              Balanced
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default Chainsword;
