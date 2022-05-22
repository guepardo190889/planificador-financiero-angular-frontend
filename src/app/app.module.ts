import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CabeceraComponent } from "./componentes/cabecera/cabecera.component";

@NgModule({
  declarations: [AppComponent, CabeceraComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
