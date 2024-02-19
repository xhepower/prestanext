import { redirect } from "next/navigation";
import { isLogged, obtenerJWT } from "../actions";
import { logOff } from "../actions";
import { borrarToken } from "../utils/auth/login";
import { Nac } from "./Nac";
import { verify } from "jsonwebtoken";
import "./home.css";
const decoded = async () => {
  const token = await obtenerJWT();
  let role;
  let sub;
  if (token && token.value && process.env.JWTSECRET) {
    const payload = verify(token.value, process.env.JWTSECRET);
    role = payload.sub;
    sub = payload.sub;
    // Resto del código utilizando role y sub
  } else {
    // Manejar el caso en que token o token.value es undefined
  }
  // const { role, sub } = verify(token.value?, process.env.JWTSECRET);

  return { role, sub };
};
export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logueado = await isLogged();

  if (!logueado) {
    redirect("/auth/login");
  }
  const { role, sub } = await decoded();
  return (
    <main className="main-app">
      <Nac role={role} sub={sub}></Nac>
      {children}
    </main>
  );
}
