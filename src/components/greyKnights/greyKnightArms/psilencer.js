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
      <Container>
        <Row className="weapon">
          <Col xs="3">Psilencer</Col>
          <Col xs="9">
            <Row>
              <Col xs="2">A 6</Col>
              <Col xs="2">WS 3+</Col>
              <Col xs="2">D 3/4</Col>
              <Col xs="2">
                SR -
                <button onClick={this.srUpdate} id="specialRule" value="heavy">
                  Heavy
                </button>
                <button
                  onClick={this.srUpdate}
                  id="specialRule"
                  value="fusillade"
                >
                  Fusillade
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
export default Psilencer;
