import React from "react";
import "./Boton.css";

export default function Boton({ numeroBoton }) {
  function myButton() {
    alert("Ha dado click en el boton: " + numeroBoton);
  }

  return (
    <div>
      <button onClick={myButton}>
        <strong>Click aqui: </strong> {numeroBoton}
      </button>
    </div>
  );
}
