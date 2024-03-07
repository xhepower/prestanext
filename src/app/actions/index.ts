"use server";

import { redirect } from "next/navigation";
import service from "../services/auth.services";
import appService from "../services/app.service";
import { leerToken, borrarToken, guardarToken } from "app/app/utils/auth/login";

export async function handleLogin(email: string, password: string) {
  let aja: string = "";
  try {
    const rta = await service.login({ email, password });
    const { acces_token } = rta.data;
    await guardarToken(acces_token);
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
export async function handleReporte({
  inicio,
  final,
}: {
  inicio: Date;
  final: Date;
}) {
  try {
    const rta = await appService.Reportes({ inicio, final });
    return rta.data;
  } catch (error) {
    console.log(error);
  }
}
export async function handleSaveRuta(name: string, userId: number) {
  try {
    await appService.saveRuta(name, userId);
  } catch (error) {
    console.log(error);
  }
  redirect("/home/users");
}
export async function actualizar() {
  try {
    await appService.actualizar();
  } catch (error) {
    console.error(error);
  }
}
export async function handleCalculate({
  inicio,
  vencimiento,
  capital,
  porcentaje,
  frecuencia,
}: {
  inicio: Date;
  vencimiento: Date;
  capital: number;
  porcentaje: number;
  frecuencia: string;
}) {
  try {
    let jijo;

    const rta = await appService.calculate({
      inicio,
      vencimiento,
      capital,
      porcentaje,
      frecuencia,
    });
    return rta.data;
  } catch (error) {
    console.log(error);
  }
}
export async function handleSavePago({
  monto,
  fecha,
  prestamoId,
}: {
  monto: number;
  fecha: Date;
  prestamoId: number;
}) {
  try {
    await appService.savePago({
      monto,
      fecha,
      prestamoId,
    });
  } catch (error) {
    console.log(error);
  }
  redirect("/home");
}
export async function handleSavePrestamo({
  inicio,
  vencimiento,
  capital,
  porcentaje,
  frecuencia,
  porcentajemora,
  clienteId,
}: {
  inicio: Date;
  vencimiento: Date;
  capital: number;
  porcentaje: number;
  frecuencia: string;
  porcentajemora: number;
  clienteId: number;
}) {
  try {
    await appService.savePrestamo({
      inicio,
      vencimiento,
      capital,
      porcentaje,
      frecuencia,
      porcentajemora,
      clienteId,
    });
  } catch (error) {
    console.log(error);
  }
  redirect("/home");
}
export async function handleSaveCliente({
  name,
  dni,
  city,
  hood,
  business,
  phone1,
  phone2,
  rutaId,
}: {
  name: string;

  dni: string;

  city: string;

  hood: string;

  business: string;

  phone1: string;

  phone2: string;
  rutaId: number;
}) {
  try {
    await appService.saveCliente({
      name,
      dni,
      city,
      hood,
      business,
      phone1,
      phone2,
      rutaId,
    });
  } catch (error) {
    console.log(error);
  }
  redirect("/home");
}
export async function isLogged() {
  const token = await leerToken();
  return token;
}
export async function logOff() {
  await borrarToken();
  await redirigir("/auth/login");
}
export async function redirigir(url: string) {
  redirect(url);
}
export const obtenerJWT = async () => {
  return await leerToken();
};
