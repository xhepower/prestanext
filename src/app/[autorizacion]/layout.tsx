import { Children } from "react";
import { redirect } from "next/navigation";
import { isLogged } from "../actions";
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logueado = await isLogged();
  if (logueado) {
    redirect("/home");
  }
  return (
    <main>
      <h1>Puto auth layout</h1>
      {children}
    </main>
  );
}
