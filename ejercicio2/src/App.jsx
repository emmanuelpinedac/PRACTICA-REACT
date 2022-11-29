import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  function myButton() {
    alert(" Boooommmmm !! ! !  !  !   !     !");
  }

  return (
    <div className="container">
      <div>
        <h1>Ejercicio 2</h1>
        <button onClick={myButton}> No tocar este Boton</button>
      </div>
    </div>
  );
}

export default App;
