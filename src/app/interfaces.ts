export interface RutaInterface {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  clientes?: ClienteInterface[];
}

export interface ClienteInterface {
  id: number;
  name: string;
  dni: string;
  city: null;
  hood: null;
  business: null;
  phone1: null;
  phone2: null;
  created_at: Date;
  updated_at: Date;
  prestamos?: PrestamoInterface[];
}

export interface PrestamoInterface {
  id: number;
  inicio: Date;
  vencimiento: Date;
  capital: string;
  porcentaje: string;
  porcentajemora: string;
  cuota: string;
  intereses: string;
  mora: string;
  total: string;
  estado: string;
  frecuencia: string;
  proxima: Date;
  created_at: Date;
  updated_at: Date;
  pagos?: PagoInterface[];
}

export interface PagoInterface {
  id: number;
  monto: string;
  created_at: Date;
  updated_at: Date;
}
