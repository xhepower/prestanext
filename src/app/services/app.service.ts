import { obtenerJWT } from "../actions";
import http from "../http-commons";
import { ClienteInterface } from "../interfaces";
import { Token } from "../utils/auth/login";

//const axios = require("axios").default;
const obtenerToken = () => {
  //   let token;
  //   if (localStorage.getItem("superdupertoken")) {
  //     token = localStorage.getItem("superdupertoken");
  //   } else {
  //     token = null;
  //   }
  //   return token;
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJzdWIiOjcsImlhdCI6MTcwNTUyMDAwOX0.q9zp1Ly9H1KVqQMWfGdtYj-XbE5WSiI3PX8mg0BW5t0";
};

http.defaults.headers.common = { Authorization: `bearer ${Token()?.value}` };

class AppService {
  async getAll(params: any) {
    return await http.get(`/rutas`, { params });
  }
  async getAllUsers() {
    return await http.get(`/users`);
  }
  saveUser(email: string, password: string, role: string) {
    return http.post("/users", { email, role, password });
  }
  // getOne(id: number) {
  //   return http.get(`/rutas?userId${+id}`);
  // }
  // crearCliente(rutaId: number, data: ClienteInterface) {}
}

const rta = new AppService();
export default rta;
