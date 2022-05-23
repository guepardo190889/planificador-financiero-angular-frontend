import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCursos:string[] = ['Typescript', 'Java', 'C#']

  mostrarBoton:boolean = true;

  habilitarBoton():void {
    this.mostrarBoton = !this.mostrarBoton;
  }
}
