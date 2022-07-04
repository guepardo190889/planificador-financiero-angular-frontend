import { Component, OnInit } from "@angular/core";

export class CategoriaDD {
  id: number;
  nombre: string;
  id_padre: number;

  constructor(id: number, nombre: string, id_padre: number) {
    this.id = id;
    this.nombre = nombre;
    this.id_padre = id_padre;
  }
}

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
})
export class InicioComponent implements OnInit {
  categorias: CategoriaDD[] = [];
  categoriaSeleccionada: CategoriaDD;

  constructor() {}

  ngOnInit(): void {
    this.inicializarCategorias();
  }

  inicializarCategorias(): void {
    this.categorias.push(new CategoriaDD(1, "Categoría 1     ", 0));
    this.categorias.push(new CategoriaDD(1, "————————————————", 0));
    this.categorias.push(new CategoriaDD(2, "Categoría 2     ", 0));
    this.categorias.push(new CategoriaDD(3, "—— Categoría 2.1", 0));
    this.categorias.push(new CategoriaDD(1, "————————————————", 0));
    this.categorias.push(new CategoriaDD(4, "Categoría 3     ", 0));
    this.categorias.push(new CategoriaDD(5, "—— Categoría 3   ", 0));
    this.categorias.push(new CategoriaDD(6, "—— Categoría 3.1  ", 0));
    this.categorias.push(new CategoriaDD(7, "—— Categoría 3.1", 0));
    this.categorias.push(new CategoriaDD(8, "—— —— Categoría 3.1.1", 0));
    this.categorias.push(new CategoriaDD(9, "—— —— Categoría 3.1.2", 0));
    this.categorias.push(new CategoriaDD(10, "—— Categoría 3.2", 0));
    this.categorias.push(new CategoriaDD(11, "—— Categoría 3.3", 0));
    this.categorias.push(new CategoriaDD(1, "————————————————", 0));
    this.categorias.push(new CategoriaDD(12, "Categoría 4", 0));
    this.categorias.push(new CategoriaDD(13, "—— Categoría 4.1", 0));
    this.categorias.push(new CategoriaDD(13, "—— —— Categoría 4.1.1", 0));
    this.categorias.push(new CategoriaDD(1, "————————————————", 0));
    this.categorias.push(new CategoriaDD(12, "Categoría 5", 0));
    this.categorias.push(new CategoriaDD(1, "————————————————", 0));
  }

  guardar(): void {
    console.log(this.categoriaSeleccionada);
  }
}
