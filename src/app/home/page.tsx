import appService from "../services/app.service";

import { Home } from "../Components/home";
import { RutaInterface } from "../interfaces";
import { AddUser } from "../Components/Users";
import { AddRuta } from "../Components/Rutas/AddRuta";
import { AddCliente } from "../Components/Clientes/AddCliente";
import { Modal } from "../Components/shared/Modal";
import { JwtPayload, verify } from "jsonwebtoken";
import { actualizar, obtenerJWT } from "../actions";
import { Ruta } from "../Components/Rutas";
import { AddPrestamo } from "../Components/Prestamos/AddPrestamo";
import { AddPago } from "../Components/Pagos/AddPago";
import { string } from "yup";
const decoded = async () => {
  const token = await obtenerJWT();
  let role;
  let sub;
  if (token && token.value && process.env.JWTSECRET) {
    const pay: string | JwtPayload = verify(token.value, process.env.JWTSECRET);
    console.log(typeof pay);
    if (typeof pay === "object") {
      role = pay.role;
      sub = pay.sub;
    }
  } else {
    // Manejar el caso en que token o token.value es undefined
  }
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
  const payload = await decoded();
  const { role, sub } = payload;
  const userId = typeof sub === "string" ? sub : "";

  const { visibleModal, modal, id } = props.searchParams;
  const losdatos: RutaInterface[] = await datos(userId);
  let ShowModal: React.FC<{ id: any }> | null;
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
      ShowModal = null;
  }

  return (
    <>
      <>
        {console.log(ShowModal)}
        {visibleModal == "visible" && ShowModal ? (
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
