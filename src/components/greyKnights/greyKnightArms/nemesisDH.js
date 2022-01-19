import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";
import Stun from "../../specialRules/stun";

class NemesisDaemonHammer extends Component {
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
    if (this.state.activeSR === "stun") {
      srArea = <Stun />;
    }

    return (
      <div>
        <Col className="weapon">Nemesis Daemon Hammer</Col>
        <Row>
          <Col>A 5</Col>
          <Col>WS 4+</Col>
          <Col>D 5/6</Col>
        </Row>
        <Row>
          <Col>
            !:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="stun">
              Stun
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </div>
    );
  }
}
export default NemesisDaemonHammer;
