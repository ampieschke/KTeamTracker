import { React } from "react";
import { Card } from "react-bootstrap";

function OppCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.operative}</Card.Title>
        <Card.Text>M: {props.m}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default OppCard;
