import appService from "../services/app.service";
const data = { email: "xhepo@xhepo.com", password: "superman" };

import { Home } from "../Components/home";
import { RutaInterface, rutasGetInterface } from "../interfaces";
import { useSearchParams } from "next/navigation";
import { Modal } from "../Components/shared/Modal";
import { verify } from "jsonwebtoken";
import { obtenerJWT } from "../actions";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
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
    console.log(response.data);
  } catch (error) {
    // throw new Error(
    //   "¡Mierda! Hubo un error: " + (error instanceof Error ? error.message : "")
    // );
    console.log(error.response.data);
  }
};

export default async function HomePage(props: any) {
  const { role, sub } = await decoded();

  const userId = sub ? sub : "";
  const { visibleModal, modal } = props.searchParams;
  const bvisibleModal = Boolean(visibleModal);
  const losdatos: RutaInterface[] = await datos(userId);

  return (
    <>
      {bvisibleModal ? (
        <Modal role={role} sub={sub} />
      ) : (
        <Home datos={losdatos} role={role} idAdmin={sub ? +sub : null}></Home>
      )}
    </>
  );
}
