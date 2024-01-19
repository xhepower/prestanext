"use client";
import { logOff } from "../actions";
import { useRouter } from "next/router";
export function Nac() {
  async function logOut() {
    await logOff();
  }
  return (
    <nav>
      <ul>
        <li>
          <button>usuarios</button>
        </li>
        <li>
          <button>calcular</button>
        </li>
        <li>
          <button>actualizar</button>
        </li>
        <li>
          <button onClick={logOut}>cerrar sesion</button>
        </li>
      </ul>
    </nav>
  );
}
