import React, { Component } from "react";

import { Container } from "react-bootstrap";

class NormalMove extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Normal Move</h1>
          <div className="action">
            <p>
              Move in straight line increments equal to the move characteristic
            </p>
            <p>Must finish the move in a location it can be placed.</p>
            <p>Moving through and up terrain is complicated.. Page 73-75</p>
          </div>
        </Container>
      </div>
    );
  }
}
export default NormalMove;
