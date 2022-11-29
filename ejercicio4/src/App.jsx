import { useState, useSyncExternalStore } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [edad, setEdad] = useState(15);

  const incrementar = () => {
    setEdad(edad + 1);
  };
  const disminuir = () => {
    setEdad(edad - 1);
  };

  return (
    <div className="container">
      <div>
        <h1 className="titulo">Ejercicio 4</h1>
        <h1>Edad de una persona</h1>
        <h2>Edad: {edad}</h2>
        {edad >= 18 ? (
          <h3 className="pMayor">Es mayor de Edad</h3>
        ) : (
          <h3 className="pMenor">Es Menor de Edad</h3>
        )}
      </div>
      <div className="botones">
        <button onClick={disminuir}>Disminuir</button>
        <button onClick={incrementar}>Incrementar</button>
      </div>
    </div>
  );
}

export default App;
