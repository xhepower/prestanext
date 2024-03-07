import { Modal } from "app/app/Components/shared/Modal";
import { actualizar, obtenerJWT, redirigir } from "app/app/actions";
import { UserInterface } from "app/app/interfaces";
import appService from "app/app/services/app.service";
import { JwtPayload, verify } from "jsonwebtoken";
import { User } from "app/app/Components/Users/User";
import { AddUser } from "app/app/Components/Users/AddUsuario";
import { AddRuta } from "app/app/Components/Rutas/AddRuta";
import { AddCliente } from "app/app/Components/Clientes/AddCliente";
import { AddUserButton } from "app/app/Components/Users";
import { FC } from "react";
const datos = async () => {
  try {
    const response = await appService.getAllUsers();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const decoded = async () => {
  const token = (await obtenerJWT()) || null;
  let role;
  let sub;

  if (token && token.value && process.env.JWTSECRET) {
    const pay: string | JwtPayload = verify(token.value, process.env.JWTSECRET);
    if (typeof pay === "object") {
      role = pay.role;
      sub = pay.sub;
    }
  }

  return { role, sub };
};
export default async function UsersPage(props: any) {
  const { role, sub } = await decoded();
  const { visibleModal, modal, id } = props.searchParams;
  const losdatos: UserInterface[] = await datos();

  let ShowModal: React.FC<{ id: any }> | null;
  switch (modal) {
    case "addUser":
      ShowModal = AddUser;
      break;
    case "addRuta":
      ShowModal = AddRuta;
      break;
    default:
      ShowModal = null;
  }
  console.log(role);
  return (
    <>
      {role == "admin" ? (
        <>
          {visibleModal == "visible" && ShowModal ? (
            <Modal redir="/home/users">
              <ShowModal id={id}></ShowModal>
            </Modal>
          ) : (
            <section className="main-container">
              <AddUserButton></AddUserButton>
              <div className="users-container">
                <h2 className="titulo-usuarios">Usuarios</h2>
                {losdatos?.map((user) => {
                  const key: string = `user${user.id}`;

                  return <User key={key} user={user}></User>;
                })}
              </div>
            </section>
          )}
        </>
      ) : (
        "No tiene permiso para esta ruta"
      )}
    </>
  );
}
