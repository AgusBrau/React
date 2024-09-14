import { useEffect, useState } from "react";
const TiempoEjecucion = () => {
  const [tiempo, setTiempo] = useState(() => -1);

  useEffect(() => {
    setTimeout(() => {
      setTiempo((tiempo) => tiempo + 1);
    }, 1000);
  });

  return (
    <span className="badge text-bg-info">Tiempo de ejecucion: {tiempo} </span>
  );
};
export default TiempoEjecucion;
