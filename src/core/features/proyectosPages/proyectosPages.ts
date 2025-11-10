import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ListadoProyectos } from './Components/listado-proyectos/listado-proyectos';

@Component({
  selector: 'app-proyectos-page',
  imports: [ListadoProyectos],
  templateUrl: './ProyectosPages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPage {
  changeName(value: string) {
    this.name.set(value);
  }
  changeDescription(value: string) {
    this.description.set(value);
  }
  name = signal('');
  description = signal('');

  addValue() {
    const newPoryecto: Proyecto = {
      id: this.proyectos().length + 1,
      description: this.description(),
      name: this.name(),
    };
    this.proyectos.set([...this.proyectos(), newPoryecto]);
    this.name.set('');
    this.description.set('');
  }

  proyectos = signal<Proyecto[]>([
    {
      id: 1,
      description: 'Digital wallet',
      name: 'HybeCore',
    },
    {
      id: 2,
      description: 'Sistema Financiero',
      name: 'JkCore',
    },
    {
      id: 3,
      description: 'Language learner app',
      name: 'LuxCore',
    },
    {
      id: 4,
      description: 'Soundcloud web',
      name: 'MonoCore',
    },
    {
      id: 5,
      description: 'Task Daily app',
      name: 'ListHybe',
    },
  ]);
}