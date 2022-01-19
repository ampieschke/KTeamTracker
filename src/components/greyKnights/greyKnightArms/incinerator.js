import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";
import Heavy from "../../specialRules/heavy";
import Rngx from "../../specialRules/rngx";
import Torrent from "../../specialRules/torrentx";

class Incinerator extends Component {
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
    } else if (this.state.activeSR === "rng") {
      srArea = <Rngx />;
    } else if (this.state.activeSR === "torrent") {
      srArea = <Torrent />;
    }

    return (
      <div>
        <Col className="weapon">Incinerator</Col>
        <Row>
          <Col>A 6</Col>
          <Col>WS 2+</Col>
          <Col>D 2/3</Col>
        </Row>
        <Row>
          <Col>
            SR:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="heavy">
              Heavy
            </button>
            <button onClick={this.srUpdate} id="specialRule" value="rng">
              Rng PENTAGON
            </button>
            <button onClick={this.srUpdate} id="specialRule" value="torrent">
              Torrent CIRCLE
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </div>
    );
  }
}
export default Incinerator;
