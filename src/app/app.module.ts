import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CabeceraComponent } from "./componentes/cabecera/cabecera.component";
import { PieComponent } from "./componentes/pie/pie.component";
import { DivisaComponent } from "./componentes/divisa/divisa.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from "./componentes/divisa/form.component";
import { FormsModule } from "@angular/forms";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { EntidadFinancieraComponent } from "./componentes/entidad-financiera/entidad-financiera.component";
import { EntidadFinancieraFormComponent } from "./componentes/entidad-financiera/entidad-financiera-form.component";
import { CuentaComponent } from "./componentes/cuenta/cuenta.component";
import { CuentaFormComponent } from "./componentes/cuenta/cuenta-form.component";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CategoriaComponent } from "./componentes/categoria/categoria.component";
import { CategoriaFormComponent } from "./componentes/categoria/categoria-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const RUTAS: Routes = [
  { path: "", component: InicioComponent },
  { path: "divisas", component: DivisaComponent },
  { path: "divisas/form", component: FormComponent },
  { path: "divisas/form/:id", component: FormComponent },
  { path: "entidades-financieras", component: EntidadFinancieraComponent },
  {
    path: "entidades-financieras/form",
    component: EntidadFinancieraFormComponent,
  },
  {
    path: "entidades-financieras/form/:id",
    component: EntidadFinancieraFormComponent,
  },
  { path: "cuentas", component: CuentaComponent },
  { path: "cuentas/form", component: CuentaFormComponent },
  { path: "cuentas/form/:id", component: CuentaFormComponent },
  { path: "categorias", component: CategoriaComponent },
  { path: "categorias/form", component: CategoriaFormComponent },
  { path: "categorias/form/:id", component: CategoriaFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    DivisaComponent,
    FormComponent,
    InicioComponent,
    EntidadFinancieraComponent,
    EntidadFinancieraFormComponent,
    CuentaComponent,
    CuentaFormComponent,
    CategoriaComponent,
    CategoriaFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(RUTAS),
    CurrencyMaskModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
