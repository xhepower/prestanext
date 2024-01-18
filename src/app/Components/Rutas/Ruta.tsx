import { Cliente } from "../Clientes";
import { RutaInterface } from "app/app/interfaces";
interface rutaPropsInterface {
  ruta: RutaInterface;
}
import "./Ruta.css";
export function Ruta({ ruta }: rutaPropsInterface) {
  const { name, clientes } = ruta;
  return (
    <section className="ruta">
      <div>
        <p className="rutaItem">Nombre de ruta: {name}</p>
      </div>
      {clientes.map((cliente) => {
        return (
          <Cliente key={`clienteKey${cliente.id}`} cliente={cliente}></Cliente>
        );
      })}
    </section>
  );
}
