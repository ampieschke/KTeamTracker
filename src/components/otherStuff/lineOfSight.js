import React, { Component } from "react";

import { Container } from "react-bootstrap";

class LineOfSight extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1>Line of Sight</h1>
          <div className="phaseStep">
            <h3>1. Target with an Engaged Order is in LoS if</h3>
            <ul>
              <li>Target is visible</li>
              <li>Target is not obscured</li>
            </ul>
            <h3>2. Target with a Conceal Order is in LoS if</h3>
            <ul>
              <li>Target is visible</li>
              <li>Target is not obscured</li>
              <li>Target is not in cover</li>
            </ul>

            <h5>Are they Visible?</h5>
            <p>
              Yes, if you can draw an imaginary, unobstructed straight line from
              the head of the operative to any part of the intended target (not
              it’s base).
            </p>
            <h5>Are they Obscured?</h5>
            <p>
              If the intended target is more than WHITE CIRCLE from a point at
              which a Cover line crosses a terrain feature, that terrain is
              Obscuring. However, if the active operative is within TRIANGLE of
              a point at which a Cover line crosses a terrain feature, that part
              of the terrain feature is not treated as Obscuring.
            </p>
            <h5>Are they in Cover?</h5>
            <p>
              If the intended target is more than WHITE CIRCLE away from the
              active operative. And the intended target is within TRIANGLE of a
              point at which a cover line crosses another operative’s base or a
              terrain feature that provides cover, they are in cover
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
export default LineOfSight;
