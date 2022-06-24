/**
 * Modelo de datos que representa un tipo de categoría
 * @author Seth Karim Luis Martínez
 * @since 23-06-2022
 */
export class TipoCategoria {
  nombre: string;
  descripcion: string;

  constructor(nombre: string, descripcion: string) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}
