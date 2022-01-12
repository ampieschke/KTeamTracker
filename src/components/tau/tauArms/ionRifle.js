import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import AP from "../../specialRules/ap";
import Hot from "../../specialRules/hot";
import Px from "../../specialRules/px";

class IonRifle extends Component {
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
    } else if (this.state.activeSR === "hot") {
      srArea = <Hot />;
    } else if (this.state.activeSR === "px") {
      srArea = <Px />;
    }

    return (
      <Container>
        <Row>
          <Col className="weapon">Ion Rifle - Standard</Col>
          <Row>
            <Col>A 5</Col>
            <Col>BS 4+</Col>
            <Col>D 4/5</Col>
          </Row>
          <Row>
            <Col>
              !:{" "}
              <button onClick={this.srUpdate} id="specialRule" value="px">
                P1
              </button>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col className="weapon">Ion Rifle - Overcharge</Col>
          <Row>
            <Col>A 5</Col>
            <Col>BS 4+</Col>
            <Col>D 5/6</Col>
          </Row>
          <Row>
            <Col>
              SR:{" "}
              <button onClick={this.srUpdate} id="specialRule" value="ap">
                AP1
              </button>
              <button onClick={this.srUpdate} id="specialRule" value="hot">
                Hot
              </button>
            </Col>
          </Row>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default IonRifle;
