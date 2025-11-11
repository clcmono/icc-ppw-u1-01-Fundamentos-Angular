import { ChangeDetectionStrategy, Component,signal,output } from '@angular/core';

@Component({
  selector: 'app-add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto { 
  name = signal('');
  description = signal('');

  newProyecto= output<Proyecto>();
  removeProyecto= output<number>();

  dellProyecto(id: number){
    this.removeProyecto.emit(id);
  }
 
 
  addValue() {
    const newPoryecto: Proyecto = {
      id: Math.floor(Math.random()*100),
      description: this.description(),
      name: this.name(),
    };
   this.newProyecto.emit(newPoryecto);
   this.name.set('');
   this.description.set('');

  }

  changeName(value:string){
    this.name.set(value);
  }
  changeDescription(value:string){
    this.description.set(value);
  }

  
   

}
