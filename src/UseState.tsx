import React from "react";
interface UseProps {
  name: string;
}

interface AppState {
  error: boolean;
  loading: boolean;
  value: string | number;
}

const SECURITY_CODE = "203559";

const UseState = ({ name }: UseProps) => {
  const [value, setValue] = React.useState<AppState["value"]>("");
  const [error, setError] = React.useState<AppState["error"]>(false);
  const [loading, setLoading] = React.useState<AppState["loading"]>(false);

  React.useEffect(() => {
    console.log("Start the effect");

    if (loading) {
      // setError(false);
      setTimeout(() => {
        console.log("Validating");
        setLoading(false);
        if (value === SECURITY_CODE) {
          setLoading(false);
        } else {
          setError(true);
        }
        console.log("Validation completed");
      }, 3000);
    }

    console.log("Ending the effect");
  }, [loading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor ingresa el código de seguridad</p>
      {error && !loading && <p>Error:El código es incorrecto</p>}
      {loading && <p>... Loading</p>}
      <input
        placeholder="Código de Seguridad"
        value={value}
        onChange={handleChange}
      />
      <button onClick={() => setLoading((e) => !e)}>Comprobar</button>
    </div>
  );
};

export { UseState };
