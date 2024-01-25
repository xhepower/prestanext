"use client";

import { UserInterface } from "app/app/interfaces";
import { Ruta } from "../Rutas";
import "./User.css";
import { useState } from "react";
import { redirigir } from "app/app/actions";
interface userPropsInterface {
  user: UserInterface;
}
async function redireccionar(url: string) {
  await redirigir(url);
}
export function User({ user }: userPropsInterface) {
  const [visible, setVisible] = useState<boolean>(false);
  const { email, role, rutas, id } = user;
  const handleVer = () => {
    setVisible(!visible);
  };
  const handleAddRuta = () => {};
  return (
    <div className="usuario-container">
      <div className="card-usuario">
        <div className="datos-usuario">
          <p className="datos-usuario-item"> {email}</p>
          <p className="datos-usuario-item datos-usuario-role">{role}</p>
        </div>
        <div className="botones botones-usuario">
          <button
            className="boton-ver boton-card boton-card-users"
            onClick={handleVer}
          >
            ver
          </button>
          <button
            className=" boton-card boton-add-ruta
            boton-card-users"
            onClick={() => {
              redireccionar(
                `/home/users?visibleModal=visible&modal=addRuta&id=${id}`
              );
            }}
          >
            añadir
          </button>
        </div>
      </div>
      {visible ? (
        <div className="rutas-container">
          <h3 className="titulo-ruta">Rutas</h3>
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
