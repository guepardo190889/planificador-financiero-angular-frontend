import { Component, OnInit } from "@angular/core";
import { DivisaService } from "src/app/servicios/divisa.service";
import Swal from "sweetalert2";
import { Divisa } from "./divisa";

@Component({
  selector: "app-divisa",
  templateUrl: "./divisa.component.html",
})
export class DivisaComponent implements OnInit {
  public titulo: string = "Divisas";
  divisas: Divisa[];

  constructor(private divisaService: DivisaService) {
    this.divisaService
      .buscarTodos()
      .subscribe((divisas) => (this.divisas = divisas));
  }

  ngOnInit() {}

  eliminar(divisa: Divisa): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Estás seguro?",
        text: `¿Seguro que desesa eliminar la divisa ${divisa.nombre}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.divisaService.eliminar(divisa.id).subscribe((response) => {
            this.divisas = this.divisas.filter(
              (coincidencia) => coincidencia !== divisa
            );

            swalWithBootstrapButtons.fire(
              "¡Divisa Eliminada!",
              `Divisa ${divisa.nombre} eliminada con éxito`,
              "success"
            );
          });
        }
      });
  }
}
