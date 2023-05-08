import React from "react";
interface UseProps {
  name: string;
}

interface AppState {
  state: {
    error: boolean;
    loading: boolean;
    value: string | number;
    deleted: boolean;
    confirmed: boolean;
  };
  // error: boolean;
  // loading: boolean;
  // value: string | number;
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
  // const [value, setValue] = React.useState<AppState["value"]>("");
  // const [error, setError] = React.useState<AppState["error"]>(false);
  // const [loading, setLoading] = React.useState<AppState["loading"]>(false);

  React.useEffect(() => {
    console.log("Start the effect");

    if (state.loading) {
      // setError(false);
      setTimeout(() => {
        console.log("Validating");
        setState({ ...state, loading: false });
        if (state.value === SECURITY_CODE) {
          setState({ ...state, loading: false, error: false, confirmed: true });
        } else {
          setState({ ...state, loading: false, error: true });
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
        <button onClick={() => setState({ ...state, loading: true })}>
          Comprobar
        </button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>¿Desea eliminar?</p>
        <button onClick={() => setState({ ...state, deleted: true })}>
          Si, eliminar
        </button>
        <button
          onClick={() => setState({ ...state, confirmed: false, value: "" })}
        >
          No, descartar
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Eliminado con éxito</p>
        <button
          onClick={() =>
            setState({ ...state, confirmed: false, value: "", deleted: false })
          }
        >
          Recuperar UseState
        </button>
      </React.Fragment>
    );
  }
};

export { UseState };
