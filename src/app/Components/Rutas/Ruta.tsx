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
    <div className="ruta">
      <div className="card">
        <div className="datos">
          <p className="rutaItem">Nombre de ruta: {name}</p>
        </div>
        {dropVisible && (
          <div className="botones">
            <button onClick={handleVer}>ver</button>
            <button>añadir</button>
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
