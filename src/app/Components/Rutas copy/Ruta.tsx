import "./Ruta.css";
import { RutaInterface } from "app/app/interfaces";
interface rutaPropsInterface {
  ruta: RutaInterface;
}
export function Ruta({ ruta }: rutaPropsInterface) {
  const { name, clientes } = ruta;
  return (
    <div className="ruta">
      <p className="rutaNombre">Nombre de ruta: {name}</p>
    </div>
  );
}
