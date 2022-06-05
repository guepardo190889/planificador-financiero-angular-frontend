import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CabeceraComponent } from "./componentes/cabecera/cabecera.component";
import { PieComponent } from "./componentes/pie/pie.component";
import { DirectivaComponent } from "./componentes/directiva/directiva.component";
import { DivisaComponent } from "./componentes/divisa/divisa.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from "./componentes/divisa/form.component";
import { FormsModule } from "@angular/forms";
import { InicioComponent } from "./componentes/inicio/inicio.component";

const RUTAS: Routes = [
  { path: "", component: InicioComponent },
  { path: "divisas", component: DivisaComponent },
  { path: "directivas", component: DirectivaComponent },
  { path: "divisas/form", component: FormComponent },
  { path: "divisas/form/:id", component: FormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    DirectivaComponent,
    DivisaComponent,
    FormComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(RUTAS),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
