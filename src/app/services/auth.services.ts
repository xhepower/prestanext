// import http from "./http-commons";
// //const axios = require("axios").default;
// class AuthService {
//   login(data) {
//     return http.post("/auth/login", data);
//   }
//   recoveryPassword(data) {
//     return http.post("/auth/recovery", data);
//   }
//   changePassword(data) {
//     return http.post("/auth/change-password", data);
//   }
// }
// export default new AuthService();
interface loginData {
  email: string;
  password: string;
}
import http from "../http-commons";
class AuthService {
  login(data: loginData) {
    return http.post("/auth/login", data);
  }
  recoveryPassword(data: any) {
    return http.post("/auth/recovery", data);
  }
  changePassword(data: any) {
    return http.post("/auth/change-password", data);
  }
}
const rta = new AuthService();
export default rta;
