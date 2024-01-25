"use client";
import { Cliente } from "../Clientes";
import { RutaInterface } from "app/app/interfaces";
interface rutaPropsInterface {
  ruta: RutaInterface;
  dropVisible?: boolean;
}
import "./Ruta.css";
import { useState } from "react";

export function Ruta({ ruta, dropVisible }: rutaPropsInterface) {
  const [visible, setVisible] = useState<boolean>(false);
  const { name, clientes } = ruta;
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
            >
              añadir
            </button>
          </div>
        )}
      </div>
      {visible ? (
        <div className="cliente-container">
          {clientes?.map((cliente) => {
            return (
              <Cliente
                key={`clienteKey${cliente.id}`}
                cliente={cliente}
              ></Cliente>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
