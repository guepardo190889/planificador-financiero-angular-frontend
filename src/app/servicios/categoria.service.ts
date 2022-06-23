import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, map, Observable, throwError } from "rxjs";
import Swal from "sweetalert2";
import {
  Categoria,
  CategoriaActualizado,
  CategoriaGuardado,
} from "../componentes/categoria/categoria-model";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  private url: string = "http://localhost:8080/api/v1/categorias";
  private headers: any = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(private http: HttpClient, private router: Router) {}

  guardar(categoria: CategoriaGuardado): Observable<Categoria> {
    return this.http.post(this.url, categoria, { headers: this.headers }).pipe(
      map((response: any) => {
        return response as Categoria;
      }),
      catchError((e) => {
        if (e.status == 400 || e.status == 409) {
          return throwError(e);
        }

        this.router.navigate(["/categorias"]);
        Swal.fire("Error", e.error.error, "error");

        return throwError(e);
      })
    );
  }

  actualizar(
    id: number,
    categoria: CategoriaActualizado
  ): Observable<Categoria> {
    return this.http
      .put(`${this.url}/${id}`, categoria, {
        headers: this.headers,
      })
      .pipe(
        map((response: any) => {
          return response as Categoria;
        }),
        catchError((e) => {
          if (e.status == 400 || e.status == 409) {
            return throwError(e);
          }

          this.router.navigate(["/categorias"]);
          Swal.fire("Error", e.error.error, "error");

          return throwError(e);
        })
      );
  }

  eliminar(id: number): Observable<Categoria> {
    return this.http
      .delete(`${this.url}/${id}`, { headers: this.headers })
      .pipe(
        map((response: any) => {
          return response as Categoria;
        }),
        catchError((e) => {
          this.router.navigate(["/categorias"]);
          Swal.fire("Error", e.error.error, "error");

          return throwError(e);
        })
      );
  }

  buscarTodos(): Observable<Categoria[]> {
    return this.http.get(this.url).pipe(
      map((response: any) => {
        return response as Categoria[];
      }),
      catchError((e) => {
        Swal.fire("Error", e.error.error, "error");

        return throwError(e);
      })
    );
  }

  buscarPorId(id: number): Observable<Categoria> {
    return this.http.get(`${this.url}/${id}`).pipe(
      map((response: any) => {
        return response as Categoria;
      }),
      catchError((e) => {
        this.router.navigate(["/categorias"]);
        Swal.fire("Error", e.error.error, "error");

        return throwError(e);
      })
    );
  }
}
