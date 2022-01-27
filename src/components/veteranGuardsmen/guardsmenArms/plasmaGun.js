import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Hot from "../../specialRules/hot";
import AP from "../../specialRules/ap";

class PlasmaGun extends Component {
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
    if (this.state.activeSR === "hot") {
      srArea = <Hot />;
    } else if (this.state.activeSR === "ap") {
      srArea = <AP />;
    }

    return (
      <Container>
        <Col className="weapon">Plasma Gun - Standard</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 4+</Col>
          <Col>D 5/6</Col>
        </Row>
        <Row>
          <Col>
            SR: RNG PENTAGON,{" "}
            <button onClick={this.srUpdate} id="specialRule" value="ap">
              AP1
            </button>
          </Col>
        </Row>

        <Col className="weapon">Plasma Gun - Supercharge</Col>
        <Row>
          <Col>A 4</Col>
          <Col>BS 4+</Col>
          <Col>D 5/6</Col>
        </Row>
        <Row>
          <Col>
            SR: RNG PENTAGON,{" "}
            <button onClick={this.srUpdate} id="specialRule" value="ap">
              AP2
            </button>
            <button onClick={this.srUpdate} id="specialRule" value="hot">
              Hot
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default PlasmaGun;
