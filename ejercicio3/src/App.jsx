import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Boton from "./Boton";

function App() {
  return (
    <div className="container">
      <div className="titulo">
        <h1>Ejercicio 3</h1>
      </div>
      <div className="botones">
        <Boton numeroBoton={"#1"} />
        <Boton numeroBoton={"#2"} />
        <Boton numeroBoton={"#3"} />
      </div>
    </div>
  ); 
}

export default App; 
