import { Component, OnInit } from '@angular/core';
import { EntidadFinanciera } from './entidadfinanciera';

@Component({
  selector: 'app-entidad-financiera',
  templateUrl: './entidad-financiera.component.html',
  styleUrls: ['./entidad-financiera.component.css']
})
export class EntidadFinancieraComponent implements OnInit {
  public titulo: string = "Entidades financieras"
  entidadesFinancieras: EntidadFinanciera[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
