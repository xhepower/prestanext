import appService from "../services/app.service";

import { Home } from "../Components/home";
import { RutaInterface } from "../interfaces";
import { AddUser } from "../Components/Users";
import { AddRuta } from "../Components/Rutas/AddRuta";
import { AddCliente } from "../Components/Clientes/AddCliente";
import { Modal } from "../Components/shared/Modal";
import { verify } from "jsonwebtoken";
import { obtenerJWT } from "../actions";
import { Ruta } from "../Components/Rutas";
const decoded = async () => {
  const token = await obtenerJWT();

  const { role, sub } = verify(token.value, process.env.JWTSECRET);
  return { role, sub };
};
const datos = async (sub: string) => {
  try {
    const userId: string | null = sub ? sub : null;
    const response = await appService.getAll({ userId });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function HomePage(props: any) {
  const { role, sub } = await decoded();

  const userId = sub ? sub : "";

  const { visibleModal, modal, id } = props.searchParams;
  const losdatos: RutaInterface[] = await datos(userId);
  let ShowModal: React.FC;
  switch (modal) {
    case "addUser":
      ShowModal = AddUser;
      break;
    case "addRuta":
      ShowModal = AddRuta;
      break;
    case "addCliente":
      ShowModal = AddCliente;
      break;
    default:
  }
  return (
    <>
      {role == "admin" ? (
        <>
          {visibleModal == "visible" ? (
            <Modal redir="/home">
              <ShowModal id={id}></ShowModal>
            </Modal>
          ) : (
            <section className="main-container">
              <div className="rutas-container">
                <h2 className="titulo-rutas">Rutas</h2>
                {losdatos?.map((ruta) => {
                  const key: string = `ruta${ruta.id}`;

                  return <Ruta key={key} ruta={ruta} dropVisible={true}></Ruta>;
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
