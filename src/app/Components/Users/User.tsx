"use client";

import { UserInterface } from "app/app/interfaces";
import { Ruta } from "../Rutas";
import "./User.css";
import { useState } from "react";
interface userPropsInterface {
  user: UserInterface;
}
export function User({ user }: userPropsInterface) {
  const [visible, setVisible] = useState<boolean>(false);
  const { email, role, rutas } = user;
  const handleVer = () => {
    setVisible(!visible);
  };
  return (
    <div className="cliente">
      <div className="card">
        <div className="datos">
          <p className="clienteItem">Nombre de usuario: {email}</p>
          <p className="clienteItem">Rol: {role}</p>
        </div>
        <div className="botones">
          <button onClick={handleVer}>ver</button>
          <button>añadir</button>
        </div>
      </div>
      {visible ? (
        <div className="ruta-container">
          {rutas?.map((ruta) => {
            return (
              <Ruta
                key={`rutaKey${ruta.id}`}
                ruta={ruta}
                dropVisible={false}
              ></Ruta>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
