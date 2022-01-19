import React from "react";

function Title(props) {
  return (
    <h1 className="title" id={props.id}>
      {props.children}
    </h1>
  );
}

export default Title;
