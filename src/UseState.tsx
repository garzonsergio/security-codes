import React from "react";
interface UseProps {
  name: string;
}

interface AppState {
  error: boolean;
  loading: boolean;
}

const UseState = ({ name }: UseProps) => {
  const [error, setError] = React.useState<AppState["error"]>(false);
  const [loading, setLoading] = React.useState<AppState["loading"]>(false);

  React.useEffect(() => {
    console.log("Start the effect");

    if (loading) {
      setTimeout(() => {
        console.log("Validating");
        setLoading(false);
        console.log("Validation completed");
      }, 3000);
    }

    console.log("Ending the effect");
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor ingresa el código de seguridad</p>
      {error && <p>Error:El código es incorrecto</p>}
      {loading && <p>... Loading</p>}
      <input placeholder="Código de Seguridad" />
      <button onClick={() => setLoading((e) => !e)}>Comprobar</button>
    </div>
  );
};

export { UseState };
