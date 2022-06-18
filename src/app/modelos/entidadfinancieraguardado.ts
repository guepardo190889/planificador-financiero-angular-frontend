export class EntidadFinancieraGuardado {
  nombre: string;
  descripcion: string;
  tipo: string;

  constructor(nombre: string, descripcion?: string, tipo?: string) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tipo = tipo;
  }
}
