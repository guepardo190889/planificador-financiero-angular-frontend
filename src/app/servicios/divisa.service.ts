import { Injectable } from '@angular/core';
import { Divisa } from '../componentes/divisa/divisa';
import { DIVISAS } from '../componentes/divisa/divisa.json';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor() { }

  buscar(): Divisa[] {
    console.log('service');
    return DIVISAS;
  }
}
