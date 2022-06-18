import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DivisaService } from "src/app/servicios/divisa.service";
import Swal from "sweetalert2";
import { Divisa } from "../../modelos/divisa";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit {
  public titulo: string = "Guardar Divisa";
  public divisa: Divisa = new Divisa();
  public errores: string[];

  constructor(
    private divisaService: DivisaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cargarDivisa();
  }

  public cargarDivisa(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id: number = params[`id`];

      if (id) {
        this.titulo = "Actualizar Divisa";

        this.divisaService
          .buscarPorId(id)
          .subscribe((divisa) => (this.divisa = divisa));
      }
    });
  }

  public guardar(): void {
    this.divisaService.guardar(this.divisa).subscribe(
      (divisaGuardada) => {
        this.router.navigate(["/divisas"]);
        Swal.fire("Guardado", `Guardado realizado exitosamente`, "success");
      },
      (error) => {
        this.errores = error.error.errores as string[];
      }
    );
  }

  public actualizar(): void {
    this.divisaService.actualizar(this.divisa).subscribe(
      (divisaActualizada) => {
        this.router.navigate(["/divisas"]);
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
