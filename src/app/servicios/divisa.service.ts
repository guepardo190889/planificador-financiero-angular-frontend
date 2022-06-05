import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
    console.log("Guardar divisa (service)");
    console.log(divisa);

    return this.http.post(this.url, divisa, { headers: this.headers }).pipe(
      map((response: any) => {
        console.log(response);

        return response.divisa as Divisa;
      })
    );
  }

  actualizar(divisa: Divisa): Observable<Divisa> {
    console.log("Actualizar divisa: " + divisa.id);

    return this.http
      .put(`${this.url}/${divisa.id}`, divisa, { headers: this.headers })
      .pipe(
        map((response: any) => {
          console.log(response);
          return response.divisa as Divisa;
        })
      );
  }

  eliminar(divisa: Divisa): Observable<Divisa> {
    console.log("Eliminar divisa: " + divisa.id);

    return this.http
      .delete(`${this.url}/${divisa.id}`, { headers: this.headers })
      .pipe(
        map((response: any) => {
          console.log(response);
          return response.divisa as Divisa;
        })
      );
  }

  buscarTodos(): Observable<Divisa[]> {
    console.log("Consultar todas las divisas");

    return this.http.get(this.url).pipe(
      map((response: any) => {
        console.log(response);
        return response.divisas as Divisa[];
      })
    );
  }

  buscarPorId(id: number): Observable<Divisa> {
    console.log("Consultar divisa: " + id);

    return this.http.get(`${this.url}/${id}`).pipe(
      map((response: any) => {
        console.log(response);
        return response.divisa as Divisa;
      })
    );
  }
}
