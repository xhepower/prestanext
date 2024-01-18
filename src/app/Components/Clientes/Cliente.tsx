import "./Cliente.css";
import { ClienteInterface } from "app/app/interfaces";
interface props {
  cliente: ClienteInterface;
}
export function Cliente({ cliente }: props) {
  const {
    id,

    name,

    dni,

    city,

    hood,

    business,

    phone1,

    phone2,

    created_at,

    updated_at,

    prestamos,
  } = cliente;
  return (
    <div className="ruta">
      <p className="rutaNombre">Nombre de Cliente: {name}</p>
    </div>
  );
}
