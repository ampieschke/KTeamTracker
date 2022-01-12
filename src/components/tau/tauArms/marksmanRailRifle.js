import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import AP from "../../specialRules/ap";
import Leathal from "../../specialRules/lethalX";
import MWx from "../../specialRules/mWx";
import Silent from "../../specialRules/silent";

class MarksmanRailRifle extends Component {
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
    if (this.state.activeSR === "ap") {
      srArea = <AP />;
    } else if (this.state.activeSR === "leathal") {
      srArea = <Leathal />;
    } else if (this.state.activeSR === "mw") {
      srArea = <MWx />;
    } else if (this.state.activeSR === "silent") {
      srArea = <Silent />;
    }

    return (
      <Container>
        <Row>
          <Col className="weapon">Marksman Rail Rifle - Standard</Col>

          <Row>
            <Col>A 4</Col>
            <Col>BS 3+</Col>
            <Col>D 4/4</Col>
          </Row>
          <Row>
            <Col>
              SR:{" "}
              <button onClick={this.srUpdate} id="specialRule" value="ap">
                AP1
              </button>
              <button onClick={this.srUpdate} id="specialRule" value="leathal">
                Leathal 5+
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              !:{" "}
              <button onClick={this.srUpdate} id="specialRule" value="mw">
                MW2
              </button>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col className="weapon">Marksman Rail Rifle - Dart Round</Col>
          <Row>
            <Col>A 4</Col>
            <Col>BS 3+</Col>
            <Col>D 3/3</Col>
          </Row>
          <Row>
            <Col>
              SR:{" "}
              <button onClick={this.srUpdate} id="specialRule" value="ap">
                AP1
              </button>
              <button onClick={this.srUpdate} id="specialRule" value="silent">
                Silent
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              !:{" "}
              <button onClick={this.srUpdate} id="specialRule" value="mw">
                MW2
              </button>
            </Col>
          </Row>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default MarksmanRailRifle;
