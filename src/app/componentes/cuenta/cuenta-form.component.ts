import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Divisa } from "src/app/modelos/divisa";
import { CuentaService } from "src/app/servicios/cuenta.service";
import { DivisaService } from "src/app/servicios/divisa.service";
import { EntidadfinancieraService } from "src/app/servicios/entidadfinanciera.service";
import Swal from "sweetalert2";
import { EntidadFinanciera } from "../entidad-financiera/entidad-financiera.model";
import { Cuenta, CuentaGuardado } from "./cuenta-model";

@Component({
  selector: "app-cuenta-form",
  templateUrl: "./cuenta-form.component.html",
})
export class CuentaFormComponent implements OnInit {
  public titulo: string = "Guardar Cuenta";
  public cuenta: Cuenta = new Cuenta();
  public divisas: Divisa[] = [];
  public divisaSeleccionada: Divisa;
  public entidadesFinancieras: EntidadFinanciera[] = [];
  public entidadFinancieraSeleccionada: EntidadFinanciera;
  public errores: string[];

  constructor(
    private cuentaService: CuentaService,
    private divisaService: DivisaService,
    private entidadFinancieraService: EntidadfinancieraService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id: number = +params.get(`id`);

      if (id) {
        this.titulo = "Actualizar Cuenta";

        this.buscarCuenta(id);
      } else {
        this.buscarTodasDivisas(false);
        this.buscarTodosEntidadesFinancieras(false);
      }
    });
  }

  buscarCuenta(id: number): void {
    this.cuentaService.buscarPorId(id).subscribe((cuenta) => {
      this.cuenta = cuenta;
      this.buscarTodasDivisas(true);
      this.buscarTodosEntidadesFinancieras(true);
    });
  }

  buscarTodasDivisas(autoseleccionarParaActualizacion: boolean): void {
    this.divisaService.buscarTodos().subscribe((divisas) => {
      this.divisas = divisas;

      if (autoseleccionarParaActualizacion) {
        divisas.filter((divisa: Divisa) => {
          if (this.cuenta.divisa.id == divisa.id) {
            this.divisaSeleccionada = divisa;
          }
        });
      } else {
        this.autoseleccionarDivisaPorDefecto();
      }
    });
  }

  autoseleccionarDivisaPorDefecto(): void {
    this.divisas.filter((divisa: Divisa) => {
      if (divisa.porDefecto) {
        this.divisaSeleccionada = divisa;
      }
    });
  }

  buscarTodosEntidadesFinancieras(
    autoseleccionarParaActualizacion: boolean
  ): void {
    this.entidadFinancieraService
      .buscarTodos()
      .subscribe((entidadesFinancieras) => {
        this.entidadesFinancieras = entidadesFinancieras;

        if (autoseleccionarParaActualizacion) {
          entidadesFinancieras.filter(
            (entidadFinanciera: EntidadFinanciera) => {
              if (this.cuenta.entidadFinanciera.id == entidadFinanciera.id) {
                this.entidadFinancieraSeleccionada = entidadFinanciera;
              }
            }
          );
        }
      });
  }

  /**
   * Guarda una nueva cuenta
   */
  public guardar(): void {
    let entidadFinancieraId: number = this.entidadFinancieraSeleccionada
      ? this.entidadFinancieraSeleccionada.id
      : null;

    let cuenta: CuentaGuardado = new CuentaGuardado(
      this.cuenta.nombre,
      this.cuenta.saldo,
      this.cuenta.porDefecto,
      this.divisaSeleccionada.id,
      entidadFinancieraId
    );

    this.cuentaService.guardar(cuenta).subscribe(
      (entidadFinancieraGuardada) => {
        this.router.navigate(["/cuentas"]);
        Swal.fire("Guardado", `Guardado realizado exitosamente`, "success");
      },
      (error) => {
        this.errores = error.error.errores as string[];
      }
    );
  }

  /**
   * Actualiza una cuenta existente
   */
  public actualizar(): void {}
}
