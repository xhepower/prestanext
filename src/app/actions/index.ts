"use server";

import { redirect } from "next/navigation";
import service from "../services/auth.services";
import { borrarToken, guardarToken } from "app/app/utils/auth/login";
import { leerToken } from "app/app/utils/auth/login";

export async function handleLogin(email: string, password: string) {
  let aja: string = "";
  try {
    const rta = await service.login({ email, password });
    const { acces_token } = rta.data;
    guardarToken(acces_token);
    aja = acces_token;
  } catch (error: any) {
    console.log(error.message);
  }
  if (aja) {
    redirect("/home");
  }
}
export async function isLogged() {
  const token = leerToken();
  return token;
}
export async function logOff() {
  await borrarToken();
  redirect("auth/login");
}
