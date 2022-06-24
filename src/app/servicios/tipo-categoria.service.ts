import { Injectable } from "@angular/core";
import { TipoCategoria } from "../componentes/categoria/tipo-categoria-model";

@Injectable({
  providedIn: "root",
})
export class TipoCategoriaService {
  constructor() {}

  buscarTodos(): TipoCategoria[] {
    let tipos: TipoCategoria[] = [];

    tipos.push(new TipoCategoria("INGRESO", "Ingreso"));
    tipos.push(new TipoCategoria("EGRESO", "Egreso"));

    return tipos;
  }
}
