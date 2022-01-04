import React, { Component } from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Container className="bottomPart">
        <Row>
          <Col xs="4" className="footicon">
            <a href="/">
              <i
                className="fas fa-book-open fa-2x"
                style={{ color: "white" }}
              ></i>
            </a>
          </Col>
          <Col xs="4" className="footicon">
            <a href="/armylist">
              <i
                className="fas fa-book-open fa-2x"
                style={{ color: "white" }}
              ></i>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
