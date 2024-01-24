"use client";
import { logOff } from "../actions";
import { useRouter } from "next/router";
import { redirigir } from "../actions";
import "./home.css";
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
          className="boton-nav boton-home"
          onClick={() => {
            redireccionar("/home");
          }}
        >
          I
        </button>
      </div>
      <div className="boton-home-container">
        {role == "admin" ? (
          <button
            className="boton-nav boton-users boton-li"
            onClick={() => {
              redireccionar("/home/users");
            }}
          >
            U
          </button>
        ) : null}

        <button
          className="boton-nav boton-calculate boton-li"
          onClick={() => {
            redireccionar("/home/?visibleModal=true&modal=calculate");
          }}
        >
          C
        </button>

        <button className="boton-nav boton-actualizar boton-li">A</button>
      </div>
      <div>
        <button className="boton-nav  boton-salir" onClick={logOut}>
          X
        </button>
      </div>
    </nav>
  );
}
