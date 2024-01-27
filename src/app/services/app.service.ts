import { obtenerJWT } from "../actions";
import http from "../http-commons";
import { ClienteInterface } from "../interfaces";
import { Token } from "../utils/auth/login";

//const axios = require("axios").default;

// http.defaults.headers.common = {
//   Authorization: `bearer ${token ? token : null}`,
// };

class AppService {
  constructor() {
    (async () => {
      await this.obtenerToken();
    })();
  }
  obtenerToken = async () => {
    //   let token;
    //   if (localStorage.getItem("superdupertoken")) {
    //     token = localStorage.getItem("superdupertoken");
    //   } else {
    //     token = null;
    //   }
    //   return token;
    const token = (await Token())?.value;
    http.defaults.headers.common = {
      Authorization: `bearer ${token ? token : null}`,
    };
  };
  async getAll(params: any) {
    return await http.get(`/rutas`, { params });
  }
  async getAllUsers() {
    return await http.get(`/users`);
  }
  async saveUser(email: string, password: string, role: string) {
    return await http.post("/users", { email, role, password });
  }
  async saveRuta(name: string, userId: number) {
    return await http.post("/rutas", { name, userId });
  }
  async saveCliente({
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
    return await http.post("/clientes", {
      name,

      dni,

      city,

      hood,

      business,

      phone1,

      phone2,
      rutaId,
    });
  }
  // getOne(id: number) {
  //   return http.get(`/rutas?userId${+id}`);
  // }
  // crearCliente(rutaId: number, data: ClienteInterface) {}
}

const rta = new AppService();
export default rta;
