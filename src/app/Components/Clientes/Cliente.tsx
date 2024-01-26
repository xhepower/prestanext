import "./Cliente.css";
import { ClienteInterface } from "app/app/interfaces";
interface props {
  cliente: ClienteInterface;
}
import { useState } from "react";
import "./Cliente.css";
export function Cliente({ cliente }: props) {
  const [visible, setVisible] = useState<boolean>(false);
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
  const handleVer = () => {
    setVisible(!visible);
  };
  return (
    <div className="cliente-container">
      <div className="card-cliente">
        <div className="datos-cliente">
          <p className="datos-cliente-item"> {name}</p>
          <p className="datos-cliente-item"> {dni}</p>
          <p className="datos-cliente-item"> {city}</p>
          <p className="datos-cliente-item"> {hood}</p>
          <p className="datos-cliente-item"> {business}</p>
          <p className="datos-cliente-item"> {phone1}</p>
          <p className="datos-cliente-item"> {phone2}</p>
        </div>
        <div className="botones botones-cliente">
          <button
            className="boton-ver boton-card boton-card-cliente"
            onClick={handleVer}
          >
            ver
          </button>
          <button
            className=" boton-card boton-add-prestamo
            boton-card-cliente"
          >
            añadir
          </button>
        </div>
      </div>
    </div>
  );
}
