import React from "react";
class ClassState extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Por favor ingresa el código de seguridad</p>
        <input placeholder="Código de Seguridad" />
        <button>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
