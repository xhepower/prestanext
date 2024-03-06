import { redirect } from "next/navigation";
import { isLogged, obtenerJWT } from "../actions";
import { logOff } from "../actions";
import { borrarToken } from "../utils/auth/login";
import { Nac } from "./Nac";
import { JwtPayload, verify } from "jsonwebtoken";
import "./home.css";
const decoded = async () => {
  const token = await obtenerJWT();
  console.log(token);
  let role;
  let sub;
  if (token && token.value && process.env.JWTSECRET) {
    const pay: string | JwtPayload = verify(token.value, process.env.JWTSECRET);
    console.log(typeof pay);
    if (typeof pay === "object") {
      role = pay.role;
      sub = pay.sub;
    }
    // const payit:{role:string,sub:string}=pay
    //;
    // Resto del código utilizando role y sub
  } else {
    // Manejar el caso en que token o token.value es undefined
  }
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
