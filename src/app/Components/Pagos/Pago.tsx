import { PagoInterface } from "app/app/interfaces";
interface props {
  pago: PagoInterface;
}
import { useState } from "react";
import { redirigir } from "app/app/actions";
import "./Pago.css";
export function Pago({ pago }: props) {
  const [visible, setVisible] = useState<boolean>(false);
  const { id, monto, saldoAnterior, saldoActual, fecha } = pago;
  return (
    <div className="pago-container">
      <div className="card-pago">
        <div className="datos-prestamo">
          <p className="datos-pago-item"> {` ${fecha}`}</p>
          <p className="datos-pago-item">
            {" "}
            {`Saldo anterior: ${saldoAnterior}`}
          </p>
          <p className="datos-pago-item"> {`monto: ${monto}`}</p>
          <p className="datos-pago-item"> {`Saldo actual: ${saldoActual}`}</p>
        </div>
      </div>
    </div>
  );
}
