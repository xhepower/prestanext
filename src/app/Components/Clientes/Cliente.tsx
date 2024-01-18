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
    <div className="cliente">
      <div>
        <p className="clienteItem">Nombre de ruta: {name}</p>
      </div>
      <div className="cliente-container">
        {prestamos.map((prestamo) => {
          return (
            // <Prestamo
            //   key={`clienteKey${cliente.id}`}
            //   cliente={cliente}
            // ></Prestamo>
            <div key={`prestamoKey${prestamo.id}`}>prestamo</div>
          );
        })}
      </div>
    </div>
  );
}
