import http from "../http-commons";

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
  //   constructor(tabla) {
  //     this.tabla = tabla;
  //   }
  async getAll() {
    return await http.get(`/rutas`, {});
  }
  //   totalPages(parameters) {
  //     return http.get(`/${this.tabla}/totalpages`, {
  //       params: parameters,
  //     });
  //   }
  getOne(id: number) {
    return http.get(`/rutas?userId${id}`);
  }
  //   async save(data) {
  //     try {
  //       return await http.post(`/${this.tabla}`, data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   delete(id) {
  //     return http.delete(`/${this.tabla}/${id}`);
  //   }
  //   update(id, data) {
  //     return http.patch(`/${this.tabla}/${id}`, data);
  //   }
}

const rta = new AppService();
export default rta;
