"use client";
import { redirigir } from "app/app/actions";

export async function redireccionar(url: string) {
  await redirigir(url);
}
export async function AddUserButton() {
  return (
    <div className="btn-adduser-container">
      <button
        onClick={() => {
          redireccionar("/home/users?visibleModal=visible&modal=addUser");
        }}
      >
        Añadir usuario
      </button>
    </div>
  );
}
