import { TipoCategoria } from "./tipo-categoria-model";

export class Categoria {
  id: number;
  nombre: string;
  tipo: TipoCategoria;
  id_categoria_padre: number;
  descripcion: string;
}

export class CategoriaGuardado {
  nombre: string;
  tipo: string;
  principal: boolean;
  descripcion: string;

  constructor(
    nombre: string,
    tipo: string,
    principal: boolean = false,
    descripcion?: string
  ) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.principal = principal;
    this.descripcion = descripcion;
  }
}

export class CategoriaActualizado {
  nombre: string;
  tipo: string;
  principal: boolean;
  descripcion: string;

  constructor(
    nombre: string,
    tipo: string,
    principal: boolean = false,
    descripcion?: string
  ) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.principal = principal;
    this.descripcion = descripcion;
  }
}
