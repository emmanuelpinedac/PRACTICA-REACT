import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  function actualizarNombre(e) {
    setNombre(e.target.value);
  }
  function actualizaremail(e) {
    setEmail(e.target.value);
  }
  function enviarAlerta(e) {
    e.preventDefault();
    e.target.reset();
    let alerta = { nombre, email };
    setNombre("");
    setEmail("");
    alert("Su nombre es: " + alerta.nombre + "   Su email es: " + alerta.email);
  }

  return (
    <div className="container">
      <div>
        <h1>Ejercicio 6</h1>
        <div className="formulario">
          <form onSubmit={enviarAlerta}>
            <h4>Ingrese su nombre</h4>
            <input
              onChange={actualizarNombre}
              type="text"
              placeholder="Su nombre"
            />
            <h4>Ingrese su email</h4>
            <input
              onChange={actualizaremail}
              type="email"
              name="email"
              placeholder="Ingrese su email"
            />
            <br />
            <br />
            <input type="submit" value={"Enviar"} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
