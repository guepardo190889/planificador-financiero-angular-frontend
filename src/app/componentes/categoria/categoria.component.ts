import { Component, OnInit } from "@angular/core";
import { CategoriaService } from "src/app/servicios/categoria.service";
import Swal from "sweetalert2";
import { Categoria } from "./categoria-model";

@Component({
  selector: "app-categoria",
  templateUrl: "./categoria.component.html",
})
export class CategoriaComponent implements OnInit {
  public titulo: string = "Categorías";
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {
    this.categoriaService.buscarTodos().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  ngOnInit(): void {}

  eliminar(categoria: Categoria): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Confirmación",
        text: `¿Desesa eliminar la categoría ${categoria.nombre}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.categoriaService.eliminar(categoria.id).subscribe((response) => {
            this.categorias = this.categorias.filter(
              (coincidencia) => coincidencia !== categoria
            );

            swalWithBootstrapButtons.fire(
              "Eliminado",
              `Eliminado realizado exitosamente`,
              "success"
            );
          });
        }
      });
  }
}
