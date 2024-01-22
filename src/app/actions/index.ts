"use server";

import { redirect } from "next/navigation";
import service from "../services/auth.services";
import appService from "../services/app.service";
import { Token, borrarToken, guardarToken } from "app/app/utils/auth/login";
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
export async function handleSaveUser(
  email: string,
  password: string,
  role: string
) {
  try {
    await appService.saveUser(email, password, role);
  } catch (error) {
    console.log(error);
  }
  redirect("/home/users");
}
export async function isLogged() {
  const token = leerToken();
  return token;
}
export async function logOff() {
  await borrarToken();
  await redirigir("auth/login");
}
export async function redirigir(url: string) {
  redirect(url);
}
export const obtenerJWT = async () => {
  return Token();
};
