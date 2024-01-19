import { redirect } from "next/navigation";
import { isLogged } from "../actions";
import { logOff } from "../actions";
import { borrarToken } from "../utils/auth/login";
import { Nac } from "./Nac";
export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logueado = await isLogged();
  if (!logueado) {
    redirect("/auth/login");
  }

  return (
    <main>
      <Nac></Nac>
      {children}
    </main>
  );
}
