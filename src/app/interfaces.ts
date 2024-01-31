export interface RutaInterface {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  clientes?: ClienteInterface[];
}
export interface rutasGetInterface {
  limit: number;

  offset: number;

  minDate: Date;

  maxDate: Date;

  userId: string | null;
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
  capital: number;
  porcentaje: number;
  porcentajemora: number;
  cuota: number;
  intereses: number;
  mora: number;
  total: number;
  saldo: number;
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
  saldoAnterior?: number;
  saldoActual?: number;
  fecha: Date;
  created_at: Date;
  updated_at: Date;
}
export interface UserInterface {
  id: number;
  email: string;
  password: string;
  role: string;
  recoveryToken: null;
  created_at: Date;
  updated_at: Date;
  rutas?: RutaInterface[];
}
