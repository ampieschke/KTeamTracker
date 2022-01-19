import { React } from "react";
import { Card } from "react-bootstrap";
import Title from "./title";

function OppListJson(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Title id={props.id} onClick={() => props.selectOpp(props.id)}>
          {props.name}
        </Title>
      </Card.Body>
    </Card>
  );
}

export default OppListJson;
