"use client";
import { logOff } from "../actions";
import { useRouter } from "next/router";
import { redirigir } from "../actions";
export function Nac(props: any) {
  const { role, sub } = props;
  async function logOut() {
    await logOff();
  }
  async function redireccionar(url: string) {
    await redirigir(url);
  }
  return (
    <nav>
      <div>
        <button
          onClick={() => {
            redireccionar("/home");
          }}
        >
          Inicio
        </button>
      </div>
      <ul>
        {role == "admin" ? (
          <li>
            <button
              onClick={() => {
                redireccionar("/home/users");
              }}
            >
              usuarios
            </button>
          </li>
        ) : null}

        <li>
          <button
            onClick={() => {
              redireccionar("/home/?visibleModal=true&modal=calculate");
            }}
          >
            calcular
          </button>
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
