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
        <Row className="weapon">
          <Col xs="3">Ion Rifle - Standard</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 5</Col>
              <Col xs="2">BS 4+</Col>
              <Col xs="2">D 4/5</Col>
              <Col xs="2">SR -</Col>
              <Col xs="2">
                ! -
                <button onClick={this.srUpdate} id="specialRule" value="px">
                  P1
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="weapon">
          <Col xs="3">Ion Rifle - Overcharge</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 5</Col>
              <Col xs="2">BS 4+</Col>
              <Col xs="2">D 5/6</Col>
              <Col xs="2">
                SR -
                <button onClick={this.srUpdate} id="specialRule" value="ap">
                  AP1
                </button>
                <button onClick={this.srUpdate} id="specialRule" value="hot">
                  Hot
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
export default IonRifle;
