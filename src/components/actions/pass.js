import React, { Component } from "react";

import { Container } from "react-bootstrap";

class Pass extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Pass</h1>
          <div className="action">
            <p>To not do anything but burn an Action.</p>
          </div>
        </Container>
      </div>
    );
  }
}
export default Pass;
