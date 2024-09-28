import React from "react";
import '../style-sheet/Boton.css'

function Boton(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.' ) && (value !== '=')
  };

  return(
    <div
    className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd() }
      onClick={() => props.clickManagement(props.children)}>
      {props.children}
    </div>
  )
}

export default Boton;