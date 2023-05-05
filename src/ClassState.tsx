import React from "react";

interface ClassProps {
  name: string;
}

interface StateClass {
  error: boolean;
}
class ClassState extends React.Component<ClassProps, StateClass> {
  constructor(props: ClassProps) {
    super(props);
    this.state = {
      error: false,
    };
  }
  render(): JSX.Element {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor ingresa el código de seguridad</p>
        {this.state.error && <p>Error:El código es incorrecto</p>}
        <input placeholder="Código de Seguridad" />
        <button
          onClick={() =>
            this.setState((prevState) => ({ error: !prevState.error }))
          }
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
