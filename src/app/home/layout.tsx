import { redirect } from "next/navigation";
import { isLogged, obtenerJWT } from "../actions";
import { logOff } from "../actions";
import { borrarToken } from "../utils/auth/login";
import { Nac } from "./Nac";
import { JwtPayload, verify } from "jsonwebtoken";
import "./home.css";
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
  } else {
    redirect("/auth/login");
  }

  return { role, sub };
};
export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role, sub } = await decoded();

  return (
    <main className="main-app">
      <Nac role={role} sub={sub}></Nac>
      {children}
    </main>
  );
}
