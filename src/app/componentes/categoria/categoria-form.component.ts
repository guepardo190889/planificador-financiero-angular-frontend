import { IfStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoriaService } from "src/app/servicios/categoria.service";
import { TipoCategoriaService } from "src/app/servicios/tipo-categoria.service";
import Swal from "sweetalert2";
import {
  Categoria,
  CategoriaActualizado,
  CategoriaGuardado,
} from "./categoria-model";
import { TipoCategoria } from "./tipo-categoria-model";

@Component({
  selector: "app-categoria-form",
  templateUrl: "./categoria-form.component.html",
})
export class CategoriaFormComponent implements OnInit {
  public titulo: String = "Guardar Categoría";
  public categoria: Categoria = new Categoria();
  public tiposCategorias: TipoCategoria[] = [];
  public tipoCategoriaSeleccionada: TipoCategoria;
  public errores: string[];

  constructor(
    private categoriaService: CategoriaService,
    private tipoCategoriaService: TipoCategoriaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id: number = +params.get(`id`);

      if (id) {
        this.titulo = "Actualizar Categoría";

        this.buscarCategoria(id);
      } else {
        this.buscarTodosTiposCategorias(false);
      }
    });
  }

  buscarCategoria(id: number): void {
    this.categoriaService.buscarPorId(id).subscribe((categoria) => {
      this.categoria = categoria;
      this.buscarTodosTiposCategorias(true);
    });
  }

  buscarTodosTiposCategorias(autoseleccionarParaActualizacion: boolean): void {
    this.tiposCategorias = this.tipoCategoriaService.buscarTodos();

    if (autoseleccionarParaActualizacion) {
      this.tiposCategorias.filter((tipoCategoria: TipoCategoria) => {
        if (this.categoria.tipo.nombre === tipoCategoria.nombre) {
          this.tipoCategoriaSeleccionada = tipoCategoria;
        }
      });
    }
  }

  public guardar(): void {
    let categoriaGuardado: CategoriaGuardado = new CategoriaGuardado(
      this.categoria.nombre,
      this.tipoCategoriaSeleccionada.nombre,
      //this.categoria.descripcion
    );
    console.log(categoriaGuardado);

    this.categoriaService.guardar(categoriaGuardado).subscribe(
      (entidadFinancieraGuardada) => {
        this.router.navigate(["/categorias"]);
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
  public actualizar(): void {
    let tipoCategoria: string;

    if (this.tipoCategoriaSeleccionada) {
      tipoCategoria = this.tipoCategoriaSeleccionada.nombre;
    }

    let categoriaActualizado: CategoriaActualizado = new CategoriaActualizado(
      this.categoria.nombre,
      tipoCategoria,
      //this.categoria.descripcion
    );

    this.categoriaService
      .actualizar(this.categoria.id, categoriaActualizado)
      .subscribe(
        (entidadFinancieraAcualizada) => {
          this.router.navigate(["/categorias"]);
          Swal.fire(
            "Actualizado",
            `Actualizado realizado exitosamente`,
            "success"
          );
        },
        (error) => {
          this.errores = error.error.errores as string[];
        }
      );
  }
}
