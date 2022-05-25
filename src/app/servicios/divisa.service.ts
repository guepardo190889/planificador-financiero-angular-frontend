import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Divisa } from "../componentes/divisa/divisa";

@Injectable({
  providedIn: "root",
})
export class DivisaService {
  private url: string = "http://localhost:8080/api/v1/divisas";
  private headers:any = new HttpHeaders({'Content-Type':'application/json'});
  
  constructor(private http: HttpClient) {}

   buscar(): Observable<Divisa[]> {
     console.log("Buscando divisas")
    return this.http
      .get(this.url)
      .pipe(map((response) => response as Divisa[]));
  }

  guardar(divisa:Divisa):Observable<Divisa>{
    return this.http.post<Divisa>(this.url, divisa, {headers:this.headers});
  }
}
