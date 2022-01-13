import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Heavy from "../../specialRules/heavy";
import Fusillade from "../../specialRules/fusillade";

class Psilencer extends Component {
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
    } else if (this.state.activeSR === "fusillade") {
      srArea = <Fusillade />;
    }
    return (
      <div>
        <Col className="weapon">Psilencer</Col>
        <Row>
          <Col>A 6</Col>
          <Col>WS 3+</Col>
          <Col>D 3/4</Col>
        </Row>
        <Row>
          <Col>
            SR:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="heavy">
              Heavy
            </button>
            <button onClick={this.srUpdate} id="specialRule" value="fusillade">
              Fusillade
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </div>
    );
  }
}
export default Psilencer;
