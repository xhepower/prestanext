import { obtenerJWT } from "../actions";
import http from "../http-commons";
import { ClienteInterface } from "../interfaces";
import { Token } from "../utils/auth/login";

//const axios = require("axios").default;

// console.log(token);
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
  // getOne(id: number) {
  //   return http.get(`/rutas?userId${+id}`);
  // }
  // crearCliente(rutaId: number, data: ClienteInterface) {}
}

const rta = new AppService();
export default rta;
