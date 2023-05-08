import React from "react";
import { AppState } from "./types";
interface UseProps {
  name: string;
}

const SECURITY_CODE = "203559";

const UseState = ({ name }: UseProps) => {
  const [state, setState] = React.useState<AppState["state"]>({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  const onConfirm = () => {
    setState({ ...state, loading: false, confirmed: true, error: false });
  };

  const onError = () => {
    setState({ ...state, loading: false, error: true });
  };

  const onCheck = () => {
    setState({ ...state, loading: true });
  };

  const onDelete = () => {
    setState({ ...state, deleted: true });
  };

  const onReset = () => {
    setState({ ...state, confirmed: false, deleted: false, value: "" });
  };

  React.useEffect(() => {
    console.log("Start the effect");

    if (state.loading) {
      setTimeout(() => {
        console.log("Validating");
        setState({ ...state, loading: false });
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
        console.log("Validation completed");
      }, 3000);
    }

    console.log("Ending the effect");
  }, [state.loading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, value: e.target.value });
    console.log(e.target.value);
  };
  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor ingresa el código de seguridad</p>
        {state.error && !state.loading && <p>Error:El código es incorrecto</p>}
        {state.loading && <p>... Loading</p>}
        <input
          placeholder="Código de Seguridad"
          value={state.value}
          onChange={handleChange}
        />
        <button onClick={onCheck}>Comprobar</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>¿Desea eliminar?</p>
        <button onClick={onDelete}>Si, eliminar</button>
        <button onClick={onReset}>No, descartar</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Eliminado con éxito</p>
        <button onClick={onReset}>Recuperar UseState</button>
      </React.Fragment>
    );
  }
};

export { UseState };
