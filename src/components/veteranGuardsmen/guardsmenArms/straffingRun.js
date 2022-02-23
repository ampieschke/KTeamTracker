import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class StraffingRun extends Component {
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
    // let srArea;
    // if (this.state.activeSR === "ap") {
    //   srArea = <APx />;
    // }

    return (
      <Container>
        <h3>Straffing Run</h3>
        <p>
          Select one enemy operative in a friendly operative's line of sight to
          be the mark. Then place a straffing run token anywhere in the killzone
          (if you have a killzone edge, it cannot be placed closer to youe edge
          than the mark is). Draw an imaginary line with unlimited height above
          and below between any part of the base of the mark and the center of
          the straffing run token.
          <br /> <br />
          Using the ranged weapon below, make a shooting attack against the
          mark, and each other operative who's base is crossed by the line.
          <br /> <br />
          For those shooting attacks, when determining if an operative is a
          valid target and if it is in cover, drawn visiblity and cover lines
          from the mark, and if they are in cover provided by light terrain or
          another operative, they are treated as having an Engage order for that
          attack instead.
        </p>
        <Col className="weapon">Straffing Run</Col>
        <Row>
          <Col>A 6</Col>
          <Col>BS 4+</Col>
          <Col>D 2/3</Col>
        </Row>
        {/* <Row>
          <Col>
            SR:{" "}
            <button onClick={this.srUpdate} id="specialRule" value="ap">
              AP1
            </button>
          </Col>
        </Row>
        <Row className="srArea">{srArea}</Row> */}
      </Container>
    );
  }
}
export default StraffingRun;
