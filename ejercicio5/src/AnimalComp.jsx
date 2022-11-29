import React from "react";

export default function AnimalComp() {
  let animales = ["Gallina", "Perro", "Vaca", "Chancho", "Caballo", "jirafa"];

  return (
    <div>
      <h3>
        {animales.map((elemento) => (
          <p>El animal es: {elemento}</p>
        ))}
      </h3>
    </div>
  );
}
