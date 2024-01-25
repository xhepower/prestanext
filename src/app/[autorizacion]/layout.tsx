import { Children } from "react";
import { redirect } from "next/navigation";
import { isLogged } from "../actions";
import "./login.css";
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="login-container">{children}</main>;
}
