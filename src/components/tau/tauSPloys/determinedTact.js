import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class DeterminedTactician extends Component {
  render() {
    return (
      <Container>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Determined Tactician (2 CP)</Col>
              <p>
                If a friendly Shas'ui operative is in the killzone and it used
                its Art of War ability in the previous turning point, you can
                use this ploy.
                <br />
                <br />
                Until the end of the Turning Point, while a friendly operative
                is within PENTAGON of and visible to a friendly Shas'ui
                operative, it treats the same Art of War that was in effet for
                your kill team in the previous turning point as being in effect
                for for this Tourning Point.
                <br />
                <br />
                Note that means for Mont'ka, it can only perform that free Dash
                action if it is within PENTAGON of and visible to a friendly
                Shas'ui operative when that action is declared.
                <br />
                <br />
                You can only use this ploy once.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default DeterminedTactician;
