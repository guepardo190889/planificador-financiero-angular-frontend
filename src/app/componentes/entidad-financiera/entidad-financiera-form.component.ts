import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EntidadfinancieraService } from "src/app/servicios/entidadfinanciera.service";
import Swal from "sweetalert2";
import { EntidadFinanciera } from "./entidadfinanciera";

@Component({
  selector: "app-entidad-financiera-form",
  templateUrl: "./entidad-financiera-form.component.html",
})
export class EntidadFinancieraFormComponent implements OnInit {
  public titulo: string = "Guardar Entidad Financiera";
  public entidadFinanciera: EntidadFinanciera = new EntidadFinanciera();
  public errores: string[];

  constructor(
    private entidadFinancieraService: EntidadfinancieraService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cargarEntidadFinanciera();
  }

  public cargarEntidadFinanciera(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id: number = params[`id`];

      if (id) {
        this.titulo = "Actualizar Entidad Financiera";

        this.entidadFinancieraService
          .buscarPorId(id)
          .subscribe((entidadFinanciera) => {
            this.entidadFinanciera = entidadFinanciera;
          });
      }
    });
  }

  public guardar(): void {
    this.entidadFinancieraService.guardar(this.entidadFinanciera).subscribe(
      (entidadFinancieraGuardada) => {
        this.router.navigate(["/entidades-financieras"]);
        Swal.fire("Guardado", `Guardado realizado exitosamente`, "success");
      },
      (error) => {
        this.errores = error.error.errores as string[];
      }
    );
  }

  public actualizar(): void {
    this.entidadFinancieraService.actualizar(this.entidadFinanciera).subscribe(
      (entidadFinancieraAcualizada) => {
        this.router.navigate(["/entidades-financieras"]);
        Swal.fire(
          "Actualizado",
          `Actualizado realizado exitosamente`,
          "success"
        );
      },
      (error) => {
        this.errores = error.error.errores as string[];
      }
    );
  }
}
