import React, { Component } from "react";
// import "./style.css";
import { Container, Col, Row } from "react-bootstrap";

import InspoLeader from "./inspoLeader";
import InDeath from "./inDeath";
import CombinedArms from "./combinedArms";

class GuardsmenTPloys extends Component {
  constructor(props) {
    super(props);
    this.state = { activeOperative: "" };
    this.rosterUpdate = this.rosterUpdate.bind(this);
  }

  rosterUpdate(e) {
    this.setState({ activeOperative: e.target.value });
  }

  render() {
    let rosterArea;
    if (this.state.activeOperative === "inspoLeader") {
      rosterArea = <InspoLeader />;
    } else if (this.state.activeOperative === "takeCover") {
      rosterArea = <InDeath />;
    } else if (this.state.activeOperative === "combinedArms") {
      rosterArea = <CombinedArms />;
    }

    return (
      <Container>
        <div>
          <h3>Strategic Ploys</h3>
          <Row>
            <Col xs="3" className="leftBox">
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="inspoLeader"
                id="inspoLeader"
              >
                Inspirational Leadership
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="takeCover"
                id="takeCover"
              >
                In Death, Atonement
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="combinedArms"
                id="combinedArms"
              >
                Combined Arms
              </button>
            </Col>
            <Col xs="9" className="rightBox">
              {rosterArea}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default GuardsmenTPloys;
