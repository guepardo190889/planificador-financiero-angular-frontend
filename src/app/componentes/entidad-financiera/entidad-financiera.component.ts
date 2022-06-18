import { Component, OnInit } from "@angular/core";
import { EntidadFinanciera } from "src/app/modelos/entidadfinanciera";
import { EntidadfinancieraService } from "src/app/servicios/entidadfinanciera.service";
import { TipoentidadfinancieraService } from "src/app/servicios/tipoentidadfinanciera.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-entidad-financiera",
  templateUrl: "./entidad-financiera.component.html",
})
export class EntidadFinancieraComponent implements OnInit {
  public titulo: string = "Entidades financieras";
  entidadesFinancieras: EntidadFinanciera[] = [];
  tiposEntidadesFinancieras: String[] = [];

  constructor(private entidadFinancieraService: EntidadfinancieraService) {
    this.entidadFinancieraService
      .buscarTodos()
      .subscribe((entidadesFinancieras) => {
        this.entidadesFinancieras = entidadesFinancieras;
      });
  }

  ngOnInit(): void {}

  eliminar(entidadFinanciera: EntidadFinanciera): void {
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
        text: `¿Desesa eliminar la entidad financiera ${entidadFinanciera.nombre}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.entidadFinancieraService
            .eliminar(entidadFinanciera.id)
            .subscribe((response) => {
              this.entidadesFinancieras = this.entidadesFinancieras.filter(
                (coincidencia) => coincidencia !== entidadFinanciera
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
