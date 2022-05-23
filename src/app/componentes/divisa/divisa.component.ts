import { Component, OnInit } from "@angular/core";
import { DivisaService } from "src/app/servicios/divisa.service";
import { Divisa } from "./divisa";

@Component({
  selector: "app-divisa",
  templateUrl: "./divisa.component.html",
})
export class DivisaComponent implements OnInit {
  divisas: Divisa[];

  constructor(private divisaService: DivisaService) {
    this.divisaService.buscar().subscribe(
      divisas => this.divisas = divisas
    );
  }

  ngOnInit() {

  }
}
