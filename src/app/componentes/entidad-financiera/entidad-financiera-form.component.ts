import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EntidadfinancieraService } from "src/app/servicios/entidadfinanciera.service";
import { EntidadFinanciera } from "./entidadfinanciera";

@Component({
  selector: "app-entidad-financiera-form",
  templateUrl: "./entidad-financiera-form.component.html",
  styleUrls: ["./entidad-financiera-form.component.css"],
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

  ngOnInit(): void {}
}
