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
      <div>
        <Col className="weapon">Psycannon</Col>
        <Row>
          <Col>A 5</Col>
          <Col>WS 3+</Col>
          <Col>D 4/6</Col>
        </Row>
        <Row>
          <Col>
            SR:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="heavy">
              Heavy
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </div>
    );
  }
}
export default Psycannon;
