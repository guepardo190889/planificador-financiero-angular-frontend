import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, map, Observable, throwError } from "rxjs";
import Swal from "sweetalert2";
import { TipoEntidadFinanciera } from "../componentes/entidad-financiera/tipo-entidad-financiera.model";

@Injectable({
  providedIn: "root",
})
export class TipoentidadfinancieraService {
  private url: string =
    "http://localhost:8080/api/v1/tipos-entidades-financieras";
  private headers: any = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(private http: HttpClient, private router: Router) {}

  buscarTodos(): Observable<TipoEntidadFinanciera[]> {
    return this.http.get(this.url).pipe(
      map((response: any) => {
        return response as TipoEntidadFinanciera[];
      }),
      catchError((e) => {
        Swal.fire("Error", e.error.error, "error");

        return throwError(e);
      })
    );
  }
}
