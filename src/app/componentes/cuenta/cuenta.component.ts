import { Component, OnInit } from "@angular/core";
import { CuentaService } from "src/app/servicios/cuenta.service";
import Swal from "sweetalert2";
import { Cuenta } from "./cuenta-model";

@Component({
  selector: "app-cuenta",
  templateUrl: "./cuenta.component.html",
})
export class CuentaComponent implements OnInit {
  public titulo: string = "Cuentas";
  cuentas: Cuenta[] = [];

  constructor(private cuentaService: CuentaService) {
    this.cuentaService.buscarTodos().subscribe((cuentas) => {
      this.cuentas = cuentas;
    });
  }

  ngOnInit(): void {}

  eliminar(cuenta: Cuenta): void {
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
        text: `¿Desesa eliminar la cuenta ${cuenta.nombre}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.cuentaService.eliminar(cuenta.id).subscribe((response) => {
            this.cuentas = this.cuentas.filter(
              (coincidencia) => coincidencia !== cuenta
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
