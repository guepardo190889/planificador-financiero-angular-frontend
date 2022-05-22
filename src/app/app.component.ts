import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Bienvenido al Planificador financiero';
  tituloDivisa:string = "Divisas"; 
  tituloCategoria:string = "Categorías"
}
