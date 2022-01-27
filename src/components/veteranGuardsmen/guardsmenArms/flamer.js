import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Torrentx from "../../specialRules/torrentx";

class Flamer extends Component {
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
    if (this.state.activeSR === "torrent") {
      srArea = <Torrentx />;
    }

    return (
      <Container>
        <Col className="weapon">Flamer</Col>
        <Row>
          <Col>A 5</Col>
          <Col>BS 2+</Col>
          <Col>D 2/2</Col>
        </Row>
        <Row>
          <Col>
            SR: Range PENTAGON,
            <button onClick={this.srUpdate} id="specialRule" value="torrent">
              Torrent CIRCLE
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row>
      </Container>
    );
  }
}
export default Flamer;
