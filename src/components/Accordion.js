import React,{useState} from "react";
import "./../Style.css";


function Accordion({header,children, collapse,click}) {
  return (
    <div className="accordionContainer">
      <h2 onClick={click}>{header}</h2>
      {!collapse && children}
    </div>
  );
}

export default Accordion;
