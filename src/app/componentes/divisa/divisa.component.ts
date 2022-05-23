import { Component, OnInit } from "@angular/core";
import { Divisa } from "./divisa";
import { DIVISAS } from "./divisa.json";

@Component({
  selector: "app-divisa",
  templateUrl: "./divisa.component.html",
})
export class DivisaComponent implements OnInit {
  divisas: Divisa[];

  constructor() {}

  ngOnInit() {
    this.divisas = DIVISAS;
  }
}
