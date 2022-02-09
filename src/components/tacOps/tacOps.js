import React, { Component } from "react";
import "./style.css";
import { Container, Col, Row, Button } from "react-bootstrap";

class TacOps extends Component {
  constructor(props) {
    super(props);
    this.state = { tacOps: "" };
  }

  closeOps(e) {
    var closeOpsBtnEl = document.querySelector("#closeOpsBtn");
    var opsAreaEl = document.querySelector("#opsArea");
    var openOpsBtnEl = document.querySelector("#openOpsBtn");
    closeOpsBtnEl.classList.add("hiden");
    opsAreaEl.classList.add("hiden");
    openOpsBtnEl.classList.remove("hiden");
  }

  openOps(e) {
    var closeOpsBtnEl = document.querySelector("#closeOpsBtn");
    var opsAreaEl = document.querySelector("#opsArea");
    var openOpsBtnEl = document.querySelector("#openOpsBtn");
    closeOpsBtnEl.classList.remove("hiden");
    opsAreaEl.classList.add("hiden");
    openOpsBtnEl.classList.add("hiden");
    opsAreaEl.classList.remove("hiden");
  }

  render() {
    return (
      <>
        <Container className="scoreBoard">
          {/* Scoring */}
          <Row xs="3">
            <Button
              variant="secondary"
              justify-content="right"
              id="closeOpsBtn"
              className="button-54"
              onClick={this.closeOps}
              value=""
            >
              Hide Tac Ops
            </Button>
            <Button
              variant="secondary"
              justify-content="right"
              id="openOpsBtn"
              className="button-54 hiden"
              onClick={this.openOps}
              value=""
            >
              Show Tac Ops
            </Button>
          </Row>
          <Col id="opsArea" className="">
            <Col lg="3">Tac Ops</Col>

            <Row>
              <Col>Coming Soon</Col>
            </Row>
            <Row>
              <Col xs="4">Tac Op 1</Col>
              <Col xs="4">Tac Op 2</Col>
              <Col xs="4">Tac Op 3</Col>
            </Row>
            <Row></Row>
          </Col>
        </Container>
      </>
    );
  }
}

export default TacOps;
