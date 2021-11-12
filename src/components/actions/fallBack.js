import React, { Component } from "react";

import { Container } from "react-bootstrap";

class FallBack extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Fall Back</h1>
          <div className="action">
            <p>
              Can only perform this action if it is within Engagement Range of
              an enemy operative
            </p>
            <p>
              Can move through engagement range, but cannot end within
              engagement range of an enemy operative
            </p>
            <p>Operative moves the same as a normal move, with exceptions</p>
            <p>NEEDS MORE!!!</p>
          </div>
        </Container>
      </div>
    );
  }
}
export default FallBack;
