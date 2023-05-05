import React from "react";
interface UseProps {
  name: string;
}

interface AppState {
  state: boolean;
}

const UseState = ({ name }: UseProps) => {
  const [error, setError] = React.useState<AppState["state"]>(false);
  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor ingresa el código de seguridad</p>
      {error && <p>Error:El código es incorrecto</p>}
      <input placeholder="Código de Seguridad" />
      <button onClick={() => setError((e) => !e)}>Comprobar</button>
    </div>
  );
};

export { UseState };
