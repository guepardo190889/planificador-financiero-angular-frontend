import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import Swal from "sweetalert2";
import { EntidadFinanciera } from "../componentes/entidad-financiera/entidadfinanciera";

@Injectable({
  providedIn: "root",
})
export class EntidadfinancieraService {
  private url: string = "http://localhost:8080/api/v1/entidades-financieras";
  private headers: any = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(private http: HttpClient, private router: Router) {}

  guardar(entidadFinanciera: EntidadFinanciera): Observable<EntidadFinanciera> {
    return this.http
      .post(this.url, entidadFinanciera, { headers: this.headers })
      .pipe(
        map((response: any) => {
          return response as EntidadFinanciera;
        }),
        catchError((e) => {
          if (e.status == 400 || e.status == 409) {
            return throwError(e);
          }

          this.router.navigate(["/entidades-financieras"]);
          Swal.fire("Error", e.error.error, "error");

          return throwError(e);
        })
      );
  }
}
