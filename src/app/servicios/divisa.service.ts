import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Divisa } from "../componentes/divisa/divisa";
import { DIVISAS } from "../componentes/divisa/divisa.json";

@Injectable({
  providedIn: "root",
})
export class DivisaService {
  constructor() {}

  buscar(): Observable<Divisa[]> {
    return of(DIVISAS);
  }
}
