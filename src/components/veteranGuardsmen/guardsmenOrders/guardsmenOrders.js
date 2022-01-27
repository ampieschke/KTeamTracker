import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class GuardsmenOrders extends Component {
  render() {
    return (
      <Container>
        <br />
        <h4>Guardsmen Orders</h4>
        <Col>
          <Row>
            <Col>
              <Col className="ability">Move! Move! Move!</Col>
              <p>
                Add TRIANGLE to the movement characteristic of each friendly
                operative that was issued this order.
              </p>
              <Col className="ability">Take Aim!</Col>
              <p>
                Each time an operative is issued this order re-roll any shooting
                attack rolls of 1. This order has no effect on attacks made with
                morter barrage and remote mine ranged weapons, or attacks made
                with tactical assets.
              </p>
              <Col className="ability">Hold Position</Col>
              <p>
                Each time a shooting attack is made against an operative with
                this order, if the operative is in cover, re-roll defence dice
                rolls of 1. If issued this order, that operative cannot perform
                Dash or Charge actions.
              </p>
              <Col className="ability">Fix Bayonets!</Col>
              <p>
                Each time an operative with this order fights in combat, re-roll
                attack dice rolls of 1.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
export default GuardsmenOrders;
