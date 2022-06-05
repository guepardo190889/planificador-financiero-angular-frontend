import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DivisaService } from "src/app/servicios/divisa.service";
import Swal from "sweetalert2";
import { Divisa } from "./divisa";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit {
  public titulo: string = "Guardar Divisa";
  public divisa: Divisa = new Divisa();

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
        this.divisaService
          .buscarPorId(id)
          .subscribe((divisa) => (this.divisa = divisa));
      }
    });
  }

  public guardar(): void {
    console.log("Guardar divisa (form)");
    console.log(this.divisa);

    this.divisaService.guardar(this.divisa).subscribe((divisaGuardada) => {
      this.router.navigate(["/divisas"]);
      Swal.fire(
        "Nueva Divisa",
        `Divisa ${divisaGuardada.nombre} creada con éxito!`,
        "success"
      );
    });
  }

  public actualizar(): void {
    this.divisaService
      .actualizar(this.divisa)
      .subscribe((divisaActualizada) => {
        this.router.navigate(["/divisas"]);
        Swal.fire(
          "Divisa actualizada",
          `Divisa ${divisaActualizada.nombre} actualizada con éxito!`,
          "success"
        );
      });
  }
}
