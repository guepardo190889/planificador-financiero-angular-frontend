import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, map, Observable, throwError } from "rxjs";
import Swal from "sweetalert2";
import {
  Cuenta,
  CuentaActualizado,
  CuentaGuardado,
} from "../componentes/cuenta/cuenta-model";

@Injectable({
  providedIn: "root",
})
export class CuentaService {
  private url: string = "http://localhost:8080/api/v1/cuentas";
  private headers: any = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(private http: HttpClient, private router: Router) {}

  guardar(cuenta: CuentaGuardado): Observable<Cuenta> {
    return this.http.post(this.url, cuenta, { headers: this.headers }).pipe(
      map((response: any) => {
        return response as Cuenta;
      }),
      catchError((e) => {
        if (e.status == 400 || e.status == 409) {
          return throwError(e);
        }

        this.router.navigate(["/cuentas"]);
        Swal.fire("Error", e.error.error, "error");

        return throwError(e);
      })
    );
  }

  actualizar(id: number, cuenta: CuentaActualizado): Observable<Cuenta> {
    return this.http
      .put(`${this.url}/${id}`, cuenta, {
        headers: this.headers,
      })
      .pipe(
        map((response: any) => {
          return response as Cuenta;
        }),
        catchError((e) => {
          if (e.status == 400 || e.status == 409) {
            return throwError(e);
          }

          this.router.navigate(["/cuentas"]);
          Swal.fire("Error", e.error.error, "error");

          return throwError(e);
        })
      );
  }

  eliminar(id: number): Observable<Cuenta> {
    return this.http
      .delete(`${this.url}/${id}`, { headers: this.headers })
      .pipe(
        map((response: any) => {
          return response as Cuenta;
        }),
        catchError((e) => {
          this.router.navigate(["/cuentas"]);
          Swal.fire("Error", e.error.error, "error");

          return throwError(e);
        })
      );
  }

  buscarTodos(): Observable<Cuenta[]> {
    return this.http.get(this.url).pipe(
      map((response: any) => {
        return response as Cuenta[];
      }),
      catchError((e) => {
        Swal.fire("Error", e.error.error, "error");

        return throwError(e);
      })
    );
  }

  buscarPorId(id: number): Observable<Cuenta> {
    return this.http.get(`${this.url}/${id}`).pipe(
      map((response: any) => {
        return response as Cuenta;
      }),
      catchError((e) => {
        this.router.navigate(["/cuentas"]);
        Swal.fire("Error", e.error.error, "error");

        return throwError(e);
      })
    );
  }
}
