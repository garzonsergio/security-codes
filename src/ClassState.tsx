import React from "react";
import { Loading } from "./Loading";

interface ClassProps {
  name: string;
}

interface StateClass {
  value: string;
  error: boolean;
  loading: boolean;
}

const SECURITY_CODE = "203559";
class ClassState extends React.Component<ClassProps, StateClass> {
  constructor(props: ClassProps) {
    super(props);
    this.state = {
      value: "",
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
        
        if (this.state.value === SECURITY_CODE) {
          this.setState(() => ({ loading: false, error: false }));
        } else {
          this.setState(() => ({
            error: true,
            loading: false,
          }));
        }
        console.log("Validation completed");
      }, 3000);
    }
  }
  render(): JSX.Element {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor ingresa el código de seguridad</p>
        {this.state.error && !this.state.loading && (
          <p>Error:El código es incorrecto</p>
        )}
        {this.state.loading && <Loading />}
        <input
          placeholder="Código de Seguridad"
          onChange={(e) => this.setState({ value: e.target.value })}
        />
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
