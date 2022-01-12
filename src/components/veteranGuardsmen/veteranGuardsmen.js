import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

// import GreyKnights from "../armies/greyKnights";

class VeteranGuardsmen extends Component {
  constructor(props) {
    super(props);
    this.state = { activeChoice: "" };
    this.choiceUpdate = this.choiceUpdate.bind(this);
  }

  choiceUpdate(e) {
    this.setState({ activeChoice: e.target.value });
  }

  render() {
    let activeArea;
    // if (this.state.activeChoice === "roster") {
    //   activeArea = <GreyKnights />;
    // }
    // else if (this.state.activeChoice === "strategicPloys") {
    //   activeArea = <GreyKnightGunner />;
    // } else if (this.state.activeChoice === "tacticalPloys") {
    //   activeArea = <GreyKnightJusticar />;
    // }

    return (
      <Container>
        <h1>Coming Soon!</h1>
      </Container>
    );
  }
}

export default VeteranGuardsmen;
