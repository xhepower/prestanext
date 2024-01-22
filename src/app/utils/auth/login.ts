import { cookies } from "next/headers";
export async function guardarToken(token: string) {
  const cookiesP = cookies();
  if (token) {
    cookiesP.set("accessToken", token, {
      path: "/",

      httpOnly: true,
    });
  }
}
export function leerToken() {
  const cookiesP = cookies();

  return cookiesP.get("accessToken") ? true : false;
}
export async function borrarToken() {
  const cookiesP = cookies();
  cookiesP.delete("accessToken");
}
export function Token() {
  const cookiesP = cookies();

  return cookiesP.get("accessToken") ? cookiesP.get("accessToken") : null;
}
