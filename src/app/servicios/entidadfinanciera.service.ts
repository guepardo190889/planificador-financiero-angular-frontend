import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { EntidadFinanciera } from "../componentes/entidad-financiera/entidadfinanciera";

@Injectable({
  providedIn: "root",
})
export class EntidadfinancieraService {
  private url: string = "http://localhost:8080/api/v1/entidades-financieras";
  private headers: any = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(private http:HttpClient, private router:Router) {}

  guardar(entidadFinanciera:EntidadFinanciera):Observable<EntidadFinanciera>{
    

    return null;
  }
}
