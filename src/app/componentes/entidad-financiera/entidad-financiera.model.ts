import { TipoEntidadFinanciera } from "./tipo-entidad-financiera.model";

export class EntidadFinanciera {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: TipoEntidadFinanciera;
}

export class EntidadFinancieraGuardado {
  nombre: string;
  tipo: string;

  constructor(nombre: string, tipo?: string) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
}

export class EntidadFinancieraActualizado {
  nombre: string;
  tipo: string;

  constructor(nombre: string, tipo?: string) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
}
