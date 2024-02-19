"use client";
import Link from "next/link";
import "./Modal.css";
import { redirigir } from "app/app/actions";
export function Modal({
  children,
  redir,
}: {
  children: React.ReactNode;
  redir: string;
}) {
  async function redireccionar(url: string) {
    await redirigir(url);
  }
  return (
    <>
      <div className="modal">
        <div className="overlay">
          <button
            className=" boton-card modal-cerrar"
            onClick={() => {
              redireccionar(`${redir}`);
            }}
          >
            añadir
          </button>
        </div>

        {children}
      </div>
    </>
  );
}
