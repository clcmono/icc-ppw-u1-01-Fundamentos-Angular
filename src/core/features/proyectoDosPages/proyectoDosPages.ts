import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosService } from './services/proyectos-service';
import { ListadoProyectos } from "../proyectosPages/Components/listado-proyectos/listado-proyectos";
import { AddProyecto } from "../proyectosPages/Components/add-proyecto/add-proyecto";

@Component({
  selector: 'app-proyecto-dos-pages',
  imports: [ListadoProyectos, AddProyecto],
  templateUrl: './proyectoDosPages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectoDosPages { 
  proyectosService = inject(ProyectosService);
}
