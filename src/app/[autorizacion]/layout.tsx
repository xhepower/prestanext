import { Children } from "react";
import { redirect } from "next/navigation";
import { isLogged } from "../actions";
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <h1>Puto auth layout</h1>
      {children}
    </main>
  );
}
