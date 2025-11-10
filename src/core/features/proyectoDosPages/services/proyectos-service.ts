import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() { }
  proyectos = signal<Proyecto[]>([
    {
      id: 1,
      description: 'Digital wallet',
      name: 'HybeCore',
    },
  ]);

  addProyectos(newProyecto: Proyecto ){
    this.proyectos.set([...this.proyectos(), newProyecto]);
  }

  

}
