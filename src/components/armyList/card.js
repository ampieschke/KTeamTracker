import React from "react";

function OppCard(props) {
  return (
    <div className="card">
      <div className="content">
        <strong>{props.name}</strong>
        <br />
        <strong>M:</strong> {props.m}
        <br />
        <strong>APL:</strong> {props.apl}
        <br />
        <strong>W:</strong> {props.w}
      </div>
    </div>
  );
}

export default OppCard;
