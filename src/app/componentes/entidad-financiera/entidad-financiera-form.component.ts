import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EntidadfinancieraService } from "src/app/servicios/entidadfinanciera.service";
import { TipoentidadfinancieraService } from "src/app/servicios/tipoentidadfinanciera.service";
import Swal from "sweetalert2";
import {
  EntidadFinanciera,
  EntidadFinancieraActualizado,
  EntidadFinancieraGuardado,
} from "./entidad-financiera.model";
import { TipoEntidadFinanciera } from "./tipoentidadfinanciera";

@Component({
  selector: "app-entidad-financiera-form",
  templateUrl: "./entidad-financiera-form.component.html",
})
export class EntidadFinancieraFormComponent implements OnInit {
  public titulo: string = "Guardar Entidad Financiera";
  public entidadFinanciera: EntidadFinanciera = new EntidadFinanciera();
  public tipoEntidadFinancieraSeleccionada: TipoEntidadFinanciera;
  public tiposEntidadesFinancieras: TipoEntidadFinanciera[] = [];
  public errores: string[];

  constructor(
    private entidadFinancieraService: EntidadfinancieraService,
    private tipoEntidadFinancieraService: TipoentidadfinancieraService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id: number = +params.get(`id`);

      if (id) {
        this.titulo = "Actualizar Entidad Financiera";
        this.buscarEntidadFinanciera(id);
      } else {
        this.buscarTodosTiposEntidadesFinancieras(false);
      }
    });
  }

  buscarEntidadFinanciera(id: number): void {
    this.entidadFinancieraService
      .buscarPorId(id)
      .subscribe((entidadFinanciera) => {
        this.entidadFinanciera = entidadFinanciera;
        this.buscarTodosTiposEntidadesFinancieras(true);
      });
  }

  buscarTodosTiposEntidadesFinancieras(autoseleccionar: boolean): void {
    this.tipoEntidadFinancieraService
      .buscarTodos()
      .subscribe((tiposEntidadesFinancieras) => {
        this.tiposEntidadesFinancieras = tiposEntidadesFinancieras;

        if (autoseleccionar) {
          tiposEntidadesFinancieras.filter(
            (tipoEntidadFinanciera: TipoEntidadFinanciera) => {
              if (
                this.entidadFinanciera.tipo.nombre ===
                tipoEntidadFinanciera.nombre
              ) {
                this.tipoEntidadFinancieraSeleccionada = tipoEntidadFinanciera;
              }
            }
          );
        }
      });
  }

  public guardar(): void {
    let tipoEntidadFinanciera: string;

    if (this.tipoEntidadFinancieraSeleccionada) {
      tipoEntidadFinanciera = this.tipoEntidadFinancieraSeleccionada.nombre;
    }

    let entidadFinancieraGuardado: EntidadFinancieraGuardado =
      new EntidadFinancieraGuardado(
        this.entidadFinanciera.nombre,
        this.entidadFinanciera.descripcion,
        tipoEntidadFinanciera
      );

    this.entidadFinancieraService.guardar(entidadFinancieraGuardado).subscribe(
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
    let tipoEntidadFinanciera: string;

    if (this.tipoEntidadFinancieraSeleccionada) {
      tipoEntidadFinanciera = this.tipoEntidadFinancieraSeleccionada.nombre;
    }

    let entidadFinancieraActualizado: EntidadFinancieraActualizado =
      new EntidadFinancieraActualizado(
        this.entidadFinanciera.nombre,
        this.entidadFinanciera.descripcion,
        tipoEntidadFinanciera
      );

    this.entidadFinancieraService
      .actualizar(this.entidadFinanciera.id, entidadFinancieraActualizado)
      .subscribe(
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
