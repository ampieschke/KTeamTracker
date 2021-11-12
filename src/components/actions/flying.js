import React, { Component } from "react";

import { Container } from "react-bootstrap";

class Flying extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Flying</h1>
          <div className="action">
            <p>
              If an operative has the FLY keyword it can move over and across
              other operative bases as if they weren’t there.
            </p>
            <p>Must be able to end its move on solid ground.</p>
          </div>
        </Container>
      </div>
    );
  }
}
export default Flying;
