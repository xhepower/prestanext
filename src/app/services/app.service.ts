import http from "../http-commons";
import { ClienteInterface } from "../interfaces";

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
http.defaults.headers.common = { Authorization: `bearer ${obtenerToken()}` };
class AppService {
  async getAll() {
    return await http.get(`/rutas`, {});
  }

  getOne(id: number) {
    return http.get(`/rutas?userId${id}`);
  }
  crearCliente(rutaId: number, data: ClienteInterface) {}
}

const rta = new AppService();
export default rta;
