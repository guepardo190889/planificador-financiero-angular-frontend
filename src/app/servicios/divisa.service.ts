import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import Swal from "sweetalert2";
import { Divisa } from "../componentes/divisa/divisa";

@Injectable({
  providedIn: "root",
})
export class DivisaService {
  private url: string = "http://localhost:8080/api/v1/divisas";
  private headers: any = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(private http: HttpClient, private router: Router) {}

  guardar(divisa: Divisa): Observable<Divisa> {
    return this.http.post(this.url, divisa, { headers: this.headers }).pipe(
      map((response: any) => {
        return response.divisa as Divisa;
      }),
      catchError((e) => {
        if (e.status == 400 || e.status == 409) {
          return throwError(e);
        }

        this.router.navigate(["/divisas"]);
        Swal.fire("Error", e.error.error, "error");

        return throwError(e);
      })
    );
  }

  actualizar(divisa: Divisa): Observable<Divisa> {
    return this.http
      .put(`${this.url}/${divisa.id}`, divisa, { headers: this.headers })
      .pipe(
        map((response: any) => {
          return response.divisa as Divisa;
        }),
        catchError((e) => {
          if (e.status == 400 || e.status == 409) {
            return throwError(e);
          }

          this.router.navigate(["/divisas"]);
          Swal.fire("Error", e.error.error, "error");

          return throwError(e);
        })
      );
  }

  eliminar(id: number): Observable<Divisa> {
    return this.http
      .delete(`${this.url}/${id}`, { headers: this.headers })
      .pipe(
        map((response: any) => {
          return response.divisa as Divisa;
        }),
        catchError((e) => {
          this.router.navigate(["/divisas"]);
          Swal.fire("Error", e.error.error, "error");

          return throwError(e);
        })
      );
  }

  buscarTodos(): Observable<Divisa[]> {
    return this.http.get(this.url).pipe(
      map((response: any) => {
        return response.divisas as Divisa[];
      }),
      catchError((e) => {
        Swal.fire("Error", e.error.error, "error");

        return throwError(e);
      })
    );
  }

  buscarPorId(id: number): Observable<Divisa> {
    return this.http.get(`${this.url}/${id}`).pipe(
      map((response: any) => {
        return response.divisa as Divisa;
      }),
      catchError((e) => {
        this.router.navigate(["/divisas"]);
        Swal.fire("Error", e.error.error, "error");

        return throwError(e);
      })
    );
  }
}
