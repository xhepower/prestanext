import appService from "../services/app.service";

import { Home } from "../Components/home";
import { RutaInterface } from "../interfaces";
import { AddUser } from "../Components/Users";
import { AddRuta } from "../Components/Rutas/AddRuta";
import { AddCliente } from "../Components/Clientes/AddCliente";
import { Modal } from "../Components/shared/Modal";
import { verify } from "jsonwebtoken";
import { actualizar, obtenerJWT } from "../actions";
import { Ruta } from "../Components/Rutas";
import { AddPrestamo } from "../Components/Prestamos/AddPrestamo";
import { AddPago } from "../Components/Pagos/AddPago";
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
  actualizar();
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
    case "addPrestamo":
      ShowModal = AddPrestamo;
      break;
    case "addPago":
      ShowModal = AddPago;
      break;
    default:
  }

  return (
    <>
      <>
        {visibleModal == "visible" ? (
          <Modal redir="/home">
            <ShowModal id={id}></ShowModal>
          </Modal>
        ) : (
          <section className="main-container">
            <div className="rutas-container">
              <h2 className="titulo-ruta">Rutas</h2>
              {losdatos?.map((ruta) => {
                const key: string = `ruta${ruta.id}`;

                return <Ruta key={key} ruta={ruta} dropVisible={true}></Ruta>;
              })}
            </div>
          </section>
        )}
      </>
    </>
  );
}
