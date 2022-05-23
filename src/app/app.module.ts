import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CabeceraComponent } from "./componentes/cabecera/cabecera.component";
import { PieComponent } from "./componentes/pie/pie.component";
import { DirectivaComponent } from "./componentes/directiva/directiva.component";
import { DivisaComponent } from "./componentes/divisa/divisa.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

const RUTAS: Routes = [
  { path: "", redirectTo: "/divisas", pathMatch: "full" },
  { path: "divisas", component: DivisaComponent },
  { path: "directivas", component: DirectivaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    DirectivaComponent,
    DivisaComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(RUTAS)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
