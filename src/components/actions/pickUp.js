import React, { Component } from "react";

import { Container } from "react-bootstrap";

class PickUp extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Pick Up</h1>
          <div className="action">
            <p>
              Cannot be performed if within engagement range of an enemy or
              already carrying an objective
            </p>
            <p>
              Must be within Triangle of an objective marker or token that the
              Pick Up action can be performed on
            </p>
            <p>
              Remove the token or objective from the zone, the operative is now
              carrying it
            </p>
            <p>
              When carrying an objective, unless specified, the operative acts
              normally
            </p>
            <p>
              An operative can drop an objective at any point during its
              activation at no cost
            </p>
            <p>
              If the operative is killed the object is dropped within Triangle
              of and visible to the operative
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
export default PickUp;
