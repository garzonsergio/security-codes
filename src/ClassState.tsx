import React from "react";
import { Loading } from "./Loading";

interface ClassProps {
  name: string;
}

interface StateClass {
  error: boolean;
  loading: boolean;
}
class ClassState extends React.Component<ClassProps, StateClass> {
  constructor(props: ClassProps) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    };
  }
  // UNSAFE_componentWillMount(): void {
  //   console.log("will Mount");
  // }

  componentDidMount(): void {
    console.log("did mount");
  }

  componentDidUpdate(
    prevProps: Readonly<ClassProps>,
    prevState: Readonly<StateClass>,
    snapshot?: any
  ): void {
    console.log("update");
    if (this.state.loading) {
      setTimeout(() => {
        console.log("Validating");
        this.setState(() => ({ loading: false }));
        console.log("Validation completed");
      }, 3000);
    }
  }
  render(): JSX.Element {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor ingresa el código de seguridad</p>
        {this.state.error && <p>Error:El código es incorrecto</p>}
        {this.state.loading && <Loading />}
        <input placeholder="Código de Seguridad" />
        <button
          onClick={() =>
            this.setState((prevState) => ({ loading: !prevState.loading }))
          }
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
