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
    <div className="cliente">
      <div className="card">
        <div className="datos">
          <p className="clienteItem">Nombre de usuario: {email}</p>
          <p className="clienteItem">Rol: {role}</p>
        </div>
        <div className="botones">
          <button onClick={handleVer}>ver</button>
          <button
            onClick={() => {
              ///home/users?visibleModal=visible&modal=addRuta&userId=$
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
