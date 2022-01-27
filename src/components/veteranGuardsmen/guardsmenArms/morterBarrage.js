import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Silent from "../../specialRules/silent";
import Barrage from "../../specialRules/barrage";
import BlastX from "../../specialRules/blastx";
import Unwieldy from "../../specialRules/Unwieldy";

class MorterBarrage extends Component {
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
    if (this.state.activeSR === "barrage") {
      srArea = <Barrage />;
    } else if (this.state.activeSR === "unwieldy") {
      srArea = <Unwieldy />;
    } else if (this.state.activeSR === "blast") {
      srArea = <BlastX />;
    } else if (this.state.activeSR === "silent") {
      srArea = <Silent />;
    }

    return (
      <Container>
        <Col className="weapon">Morter Barrage</Col>
        <Row>
          <Col>A 5</Col>
          <Col>BS 2+</Col>
          <Col>D 2/2</Col>
        </Row>
        <Row>
          <Col>
            SR:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="barrage">
              Barrage
            </button>
            <button onClick={this.srUpdate} id="specialRule" value="unwieldy">
              Unwieldy
            </button>
            <button onClick={this.srUpdate} id="specialRule" value="blast">
              Blast CIRCLE
            </button>
            <button onClick={this.srUpdate} id="specialRule" value="silent">
              Silent
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default MorterBarrage;
