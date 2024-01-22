import { Modal } from "app/app/Components/shared/Modal";
import { obtenerJWT, redirigir } from "app/app/actions";
import { UserInterface } from "app/app/interfaces";
import appService from "app/app/services/app.service";
import { verify } from "jsonwebtoken";
import { User } from "app/app/Components/Users/User";
import { AddUser } from "app/app/Components/Users/AddUsuario";
import { AddUserButton } from "app/app/Components/Users";
const datos = async () => {
  try {
    const response = await appService.getAllUsers();
    return response.data;
  } catch (error) {
    throw new Error(
      "¡Mierda! Hubo un error: " + (error instanceof Error ? error.message : "")
    );
  }
};

const decoded = async () => {
  const token = await obtenerJWT();

  const { role, sub } = verify(token.value, process.env.JWTSECRET);

  return { role, sub };
};
export default async function UsersPage(props) {
  const { role, sub } = await decoded();

  const userId = sub ? sub : "";
  const { visibleModal, modal } = props.searchParams;
  const losdatos: UserInterface[] = await datos();
  let ShowModal;
  switch (modal) {
    case "addUser":
      ShowModal = AddUser;
      console.log("addu");
      break;
    default:
      console.log("nada");
  }
  return (
    <>
      {role == "admin" ? (
        <>
          {visibleModal == "visible" ? (
            <Modal redir="/home/users">
              <ShowModal></ShowModal>
            </Modal>
          ) : (
            <section className="home">
              <AddUserButton></AddUserButton>
              <div className="users-container">
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
