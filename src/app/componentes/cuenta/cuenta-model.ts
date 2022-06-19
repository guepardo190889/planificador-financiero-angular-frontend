import { Divisa } from "src/app/modelos/divisa";
import { EntidadFinanciera } from "../entidad-financiera/entidad-financiera.model";

/**
 * Cuenta o depósito donde se guarda dinero
 * @since 19-06-2022
 */
export class Cuenta {
  id: number;
  nombre: string;
  saldo: number;
  porDefecto: boolean;
  divisa: Divisa;
  entidadFinanciera: EntidadFinanciera;
}

/**
 * Modelo de datos que contiene la información necesaria para guardar una cuenta
 * @author Seth Karim Luis Martínez
 * @since 19-06-2022
 */
export class CuentaGuardado {
  nombre: string;
  saldo: number;
  porDefecto: boolean;
  divisaId: number;
  entidadFinancieraId: number;

  constructor(
    nombre: string,
    saldo: number = 0,
    porDefecto: boolean = false,
    divisaId: number,
    entidadFinancieraId?: number
  ) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.porDefecto = porDefecto;
    this.divisaId = divisaId;
    this.entidadFinancieraId = entidadFinancieraId;
  }
}

/**
 * Modelo de datos que contiene la información necesaria para actualizar una cuenta
 * @author Seth Karim Luis Martínez
 * @since 19-06-2022
 */
export class CuentaActualizado {
  nombre: string;
  saldo: number;
  porDefecto: boolean;
  divisa: Divisa;
  entidadFinanciera: EntidadFinanciera;

  constructor(
    nombre: string,
    saldo: number = 0,
    porDefecto: boolean = false,
    divisa: Divisa,
    entidadFinanciera?: EntidadFinanciera
  ) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.porDefecto = porDefecto;
    this.divisa = divisa;
    this.entidadFinanciera = entidadFinanciera;
  }
}
