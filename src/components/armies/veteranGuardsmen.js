import React, { Component } from "react";
import "./style.css";
import { Container, Col, Row } from "react-bootstrap";
import VeteranTrooper from "../veteranGuardsmen/guardsmenRoster/trooperVeteran";
import SergentVeteran from "../veteranGuardsmen/guardsmenRoster/sergeantVeteran";
import SniperTrooper from "../veteranGuardsmen/guardsmenRoster/sniperVeteran";
import GunnerVeteran from "../veteranGuardsmen/guardsmenRoster/gunnerVeteran";
import ConfidantVeteran from "../veteranGuardsmen/guardsmenRoster/confidantVeteran";
import DemolitionVeteran from "../veteranGuardsmen/guardsmenRoster/demolitionVeteran";
import ZealotVeteran from "../veteranGuardsmen/guardsmenRoster/zealotVeteran";
import MedicVeteran from "../veteranGuardsmen/guardsmenRoster/medicVeteran";
import CommsVeteran from "../veteranGuardsmen/guardsmenRoster/commsVeteran";
import BruiserVeteran from "../veteranGuardsmen/guardsmenRoster/bruiserVeteran";
import HardenedVeteran from "../veteranGuardsmen/guardsmenRoster/hardenedVeteran";
import SpotterVeteran from "../veteranGuardsmen/guardsmenRoster/spotterVeteran";

class VeteranGuardsmen extends Component {
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
    if (this.state.activeOperative === "trooperVet") {
      rosterArea = <VeteranTrooper />;
    } else if (this.state.activeOperative === "sgtVet") {
      rosterArea = <SergentVeteran />;
    } else if (this.state.activeOperative === "sniperVet") {
      rosterArea = <SniperTrooper />;
    } else if (this.state.activeOperative === "gunnerVet") {
      rosterArea = <GunnerVeteran />;
    } else if (this.state.activeOperative === "confidantVet") {
      rosterArea = <ConfidantVeteran />;
    } else if (this.state.activeOperative === "demoVet") {
      rosterArea = <DemolitionVeteran />;
    } else if (this.state.activeOperative === "zealotVet") {
      rosterArea = <ZealotVeteran />;
    } else if (this.state.activeOperative === "medVet") {
      rosterArea = <MedicVeteran />;
    } else if (this.state.activeOperative === "commsVet") {
      rosterArea = <CommsVeteran />;
    } else if (this.state.activeOperative === "bruiserVet") {
      rosterArea = <BruiserVeteran />;
    } else if (this.state.activeOperative === "hardVet") {
      rosterArea = <HardenedVeteran />;
    } else if (this.state.activeOperative === "spotVet") {
      rosterArea = <SpotterVeteran />;
    }

    return (
      <Container>
        <div>
          <h3>Roster</h3>
          <Row>
            <Col xs="3" className="leftBox">
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="trooperVet"
                id="trooperVet"
              >
                Trooper Veteran
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="sgtVet"
                id="sgtVet"
              >
                Sergeant Veteran
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="sniperVet"
                id="sniperVet"
              >
                Sniper Veteran
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="gunnerVet"
                id="gunnerVet"
              >
                Gunner Veteran
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="confidantVet"
                id="confidantVet"
              >
                Confidant Veteran
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="demoVet"
                id="demoVet"
              >
                Demolition Veteran
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="zealotVet"
                id="zealotVet"
              >
                Zealot Veteran
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="medVet"
                id="medVet"
              >
                Medic Veteran
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="commsVet"
                id="commsVet"
              >
                Comms Veteran
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="bruiserVet"
                id="bruiserVet"
              >
                Bruiser Veteran
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="hardVet"
                id="hardVet"
              >
                Hardened Veteran
              </button>
              <button
                onClick={this.rosterUpdate}
                className="button-54 vGButton"
                value="spotVet"
                id="spotVet"
              >
                Spotter Veteran
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

export default VeteranGuardsmen;
