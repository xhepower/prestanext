"use client";
import { Cliente } from "../Clientes";
import { RutaInterface } from "app/app/interfaces";
interface rutaPropsInterface {
  ruta: RutaInterface;
  dropVisible?: boolean;
}
import "./Ruta.css";
import { useState } from "react";
import { redirigir } from "app/app/actions";

async function redireccionar(url: string) {
  await redirigir(url);
}
export function Ruta({ ruta, dropVisible }: rutaPropsInterface) {
  const [visible, setVisible] = useState<boolean>(false);
  const { name, clientes, id } = ruta;
  const handleVer = () => {
    setVisible(!visible);
  };
  return (
    <div className="ruta-container">
      <div className="card-ruta">
        <div className="datos-ruta">
          <p className="datos-ruta-item"> {name}</p>
        </div>
        {dropVisible && (
          <div className="botones botones-ruta">
            <button
              className="boton-ver boton-card boton-card-ruta"
              onClick={handleVer}
            >
              ver
            </button>
            <button
              className=" boton-card boton-add-cliente
            boton-card-ruta"
              onClick={() => {
                redireccionar(
                  `/home?visibleModal=visible&modal=addCliente&id=${id}`
                );
              }}
            >
              añadir
            </button>
          </div>
        )}
      </div>
      {visible ? (
        <div className="clientes-container">
          <h4 className="titulo-cliente">Clientes</h4>
          {clientes?.map((cliente) => {
            return (
              <Cliente key={`rutaKey${ruta.id}`} cliente={cliente}></Cliente>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
