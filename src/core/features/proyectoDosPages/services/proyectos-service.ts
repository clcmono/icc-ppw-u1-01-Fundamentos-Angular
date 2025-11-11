import { Injectable, signal,effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() {
    effect(()=>{
      const data = this.proyectos();
      console.log(data);
      console.log(JSON.stringify(data));
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    
    });
     effect(()=>{
      const data = this.proyectosDos();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    
    });

  }


  private readonly  STORAGE_KEY = 'proyectosApp';
  
  proyectos = signal<Proyecto[]>(this.loadProyectos());
  proyectosDos = signal<Proyecto[]>(this.loadProyectos());
  private loadProyectos(): Proyecto[] {
  const data = localStorage.getItem(this.STORAGE_KEY);
  return data ? JSON.parse(data): [{
     id: 1, name: 'clau',
     description: 'Digital wallet',
  },];

  }
  // proyectos = signal<Proyecto[]>([
  //  {
  //     id: 1,
  //     description: 'Digital wallet',
  //     name: 'HybeCore',
  //   },
  // ]);

   addProyectos(newProyecto: Proyecto ){
     this.proyectos.set([...this.proyectos(), newProyecto]);
  }

  delFirstProyecto(){
    this.proyectos.set(this.proyectos().slice(1));
  }

 

}
