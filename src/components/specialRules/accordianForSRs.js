import { React } from "react";
import { Accordion } from "react-bootstrap";
// import "./style.css";

function SRAccordian(props) {
  return (
    <div className="content">
      <Accordion.Item eventKey={props.id}>
        <Accordion.Header>
          <strong>{props.name}</strong>
        </Accordion.Header>
        <Accordion.Body>{props.explination}</Accordion.Body>
      </Accordion.Item>
    </div>
  );
}

export default SRAccordian;
