import { obtenerJWT } from "../actions";
import http from "../http-commons";
import { ClienteInterface } from "../interfaces";
import { leerToken } from "../utils/auth/login";

class AppService {
  constructor() {
    (async () => {
      await this.obtenerToken();
    })();
  }
  obtenerToken = async () => {
    const token = await leerToken();

    http.defaults.headers.common = {
      Authorization: `bearer ${token ? token.value : null}`,
    };
  };
  async getAll(params?: any) {
    return await http.get(`/rutas`, { params });
  }
  async getAllUsers() {
    return await http.get(`/users`);
  }
  async saveUser(email: string, password: string, role: string) {
    return await http.post("/users", { email, role, password });
  }
  async actualizar() {
    return await http.post("/prestamos/actualizar");
  }
  async saveRuta(name: string, userId: number) {
    return await http.post("/rutas", { name, userId });
  }
  async calculate({
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
    const rta = await http.post("/prestamos/plan", {
      inicio,
      vencimiento,
      capital,
      porcentaje,
      frecuencia,
    });

    return rta;
  }
  async Reportes({ inicio, final }: { inicio: Date; final: Date }) {
    const rta = await http.post("/reportes", {
      inicio,
      final,
    });

    return rta;
  }
  async savePrestamo({
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
    return await http.post("/prestamos", {
      inicio,
      vencimiento,
      capital,
      porcentaje,
      frecuencia,
      porcentajemora,
      clienteId,
    });
  }
  async savePago({
    monto,
    fecha,
    prestamoId,
  }: {
    monto: number;
    fecha: Date;
    prestamoId: number;
  }) {
    return await http.post("/pagos", {
      monto,
      fecha,
      prestamoId,
    });
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
