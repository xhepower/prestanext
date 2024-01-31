import "./Prestamo.css";
import { PrestamoInterface } from "app/app/interfaces";
interface props {
  prestamo: PrestamoInterface;
}
import { useState } from "react";
import { redirigir } from "app/app/actions";
import { Pago } from "../Pagos";
export function Prestamo({ prestamo }: props) {
  const [visible, setVisible] = useState<boolean>(false);
  const {
    id,
    inicio,
    vencimiento,
    capital,
    porcentaje,
    porcentajemora,
    cuota,
    intereses,
    saldo,
    mora,
    total,
    estado,
    frecuencia,
    proxima,
    created_at,
    updated_at,
    pagos,
  } = prestamo;
  const handleVer = () => {
    setVisible(!visible);
  };
  async function redireccionar(url: string) {
    await redirigir(url);
  }
  return (
    <div className="prestamo-container">
      <div className="card-prestamo">
        <div className="datos-prestamo">
          <p className="datos-prestamo-item"> {estado.toLocaleUpperCase()}</p>
          <p className="datos-prestamo-item"> {`capital: ${capital}`}</p>
          <p className="datos-prestamo-item"> {`porcentaje: ${porcentaje}%`}</p>
          <p className="datos-prestamo-item"> {`mora: ${mora}`}</p>
          <p className="datos-prestamo-item"> {`total: ${total}`}</p>
          <p className="datos-prestamo-item"> {`saldo: ${saldo}`}</p>
          <p className="datos-prestamo-item">{`vencimiento: ${vencimiento}`}</p>
        </div>
        <div className="botones botones-prestamo">
          <button
            className="boton-ver boton-card boton-card-prestamo"
            onClick={handleVer}
          >
            ver
          </button>
          <button
            className=" boton-card boton-add-pago
            boton-card-prestamo"
            onClick={() => {
              redireccionar(
                `/home?visibleModal=visible&modal=addPago&id=${id}`
              );
            }}
          >
            añadir
          </button>
        </div>
      </div>
      {visible ? (
        <div className="pagos-container">
          <h5 className="titulo-pagos">Pagos</h5>
          {pagos?.map((pago) => {
            return <Pago key={`pagoKey${pago.id}`} pago={pago}></Pago>;
          })}
        </div>
      ) : null}
    </div>
  );
}
