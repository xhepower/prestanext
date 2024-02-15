import "./Cliente.css";
import { ClienteInterface } from "app/app/interfaces";
interface props {
  cliente: ClienteInterface;
}
import { useState } from "react";
import "./Cliente.css";
import { redirigir } from "app/app/actions";
import { Prestamo } from "../Prestamos";
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
  async function redireccionar(url: string) {
    await redirigir(url);
  }

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
            onClick={() => {
              redireccionar(
                `/home?visibleModal=visible&modal=addPrestamo&id=${id}`
              );
            }}
          >
            añadir
          </button>
        </div>
      </div>
      {visible ? (
        <div className="prestamos-container">
          <h5 className="titulo-prestamos">Prestamos</h5>
          {prestamos?.map((prestamo) => {
            return (
              <Prestamo
                key={`rutaKey${prestamo.id}`}
                prestamo={prestamo}
              ></Prestamo>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
