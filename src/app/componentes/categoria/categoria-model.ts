import { TipoCategoria } from "./tipo-categoria-model";

export class Categoria {
  id: number;
  nombre: string;
  tipo: TipoCategoria;
  descripcion: string;
}

export class CategoriaGuardado {
  nombre: string;
  tipo: string;
  descripcion: string;

  constructor(nombre: string, tipo: string, descripcion?: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.descripcion = descripcion;
  }
}

export class CategoriaActualizado {
  nombre: string;
  tipo: string;
  descripcion: string;

  constructor(nombre: string, tipo: string, descripcion?: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.descripcion = descripcion;
  }
}
