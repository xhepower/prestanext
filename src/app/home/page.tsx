import appService from "../services/app.service";
const data = { email: "xhepo@xhepo.com", password: "superman" };
import { Home } from "../Components/home";
import { RutaInterface } from "../interfaces";
const datos = async () => {
  try {
    const response = await appService.getAll();
    return response.data;
  } catch (error) {
    throw new Error(
      "¡Boom! Hubo un error: " + (error instanceof Error ? error.message : "")
    );
  }
};

export default async function HomePage() {
  const losdatos: RutaInterface[] = await datos();
  return <Home datos={losdatos}></Home>;
}
