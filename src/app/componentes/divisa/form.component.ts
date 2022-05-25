import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DivisaService } from "src/app/servicios/divisa.service";
import Swal from "sweetalert2";
import { Divisa } from "./divisa";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit {
  private titulo: string = "Guardar Divisa";
  private divisa: Divisa = new Divisa();

  constructor(private divisaService: DivisaService, private router: Router) {}

  ngOnInit() {}

  public guardar(): void {
    this.divisaService.guardar(this.divisa).subscribe((divisaGuardada) => {
      this.router.navigate(["/divisas"]);
      Swal.fire("Nueva Divisa", `Divisa ${divisaGuardada.nombre}`, "success");
    });
  }
}
